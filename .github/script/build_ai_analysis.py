import os
import sys
import json
import time
import pathlib
import logging
import argparse
import concurrent.futures
from datetime import datetime
import yaml

from google import genai
from google.genai import types

def load_prompts_from_dir(prompts_dir: pathlib.Path) -> dict:
    """Dynamically load all .txt prompt files from a directory.
    The filename stem (without extension) becomes the prompt key."""
    result = {}
    if not prompts_dir.is_dir():
        logging.warning(f"Prompts directory not found: {prompts_dir}")
        return result
    for txt_file in sorted(prompts_dir.glob("*.txt")):
        key = txt_file.stem
        try:
            result[key] = txt_file.read_text(encoding="utf-8")
            logging.info(f"Loaded prompt: {key}")
        except Exception as ex:
            logging.warning(f"Failed to load prompt {txt_file}: {ex}")
    return result

def load_summary_prompts_from_dir(prompts_dir: pathlib.Path) -> dict:
    """Dynamically load all .yaml prompt files from a directory.
    Each YAML file should have a top-level key with 'output_path' and 'prompt' fields."""
    result = {}
    if not prompts_dir.is_dir():
        logging.warning(f"Summary prompts directory not found: {prompts_dir}")
        return result
    for yaml_file in sorted(prompts_dir.glob("*.yaml")):
        try:
            content = yaml_file.read_text(encoding="utf-8")
            data = yaml.safe_load(content)
            if not isinstance(data, dict):
                logging.warning(f"Invalid YAML structure in {yaml_file}: expected dict")
                continue
            for key, val in data.items():
                if not isinstance(val, dict):
                    logging.warning(f"Skipping {key} in {yaml_file}: value is not a dict")
                    continue
                if 'prompt' not in val:
                    logging.warning(f"Skipping {key} in {yaml_file}: missing 'prompt' field")
                    continue
                result[key] = {
                    'prompt': val['prompt'],
                    'output_path': val.get('output_path', f'plugin-react/ai-analysis/summary/{key}.md'),
                    'inject': val.get('inject'),
                }
                logging.info(f"Loaded summary prompt: {key}")
        except Exception as ex:
            logging.warning(f"Failed to load summary prompt {yaml_file}: {ex}")
    return result

_SCRIPT_DIR = pathlib.Path(__file__).parent.resolve()
prompts = load_prompts_from_dir(_SCRIPT_DIR / "prompts" / "stock")

GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY", "")
MODEL_LIST = {
    "gemini-2.5-flash": {"use_tool": True},
    "gemini-3-flash-preview": {"use_tool": False}
}

# Helpers to read API tuning parameters from environment variables.
def _get_env_float(name, default):
    val = os.environ.get(name)
    if val is None or val == "":
        return default
    try:
        return float(val)
    except Exception:
        logging.warning(f'Invalid float for {name}: {val}, using default {default}')
        return default

def _get_env_int(name, default):
    val = os.environ.get(name)
    if val is None or val == "":
        return default
    try:
        return int(val)
    except Exception:
        logging.warning(f'Invalid int for {name}: {val}, using default {default}')
        return default

def _get_env_list(name):
    val = os.environ.get(name)
    if not val:
        return None
    # comma separated values
    return [s.strip() for s in val.split(',') if s.strip()]

def get_api_params():
    # Build API parameter dict from environment variables with sane defaults for analysis tasks
    params = {
        'temperature': _get_env_float('GEMINI_TEMPERATURE', 0.0),
        'top_p': _get_env_float('GEMINI_TOP_P', 0.8),
        'candidate_count': _get_env_int('GEMINI_CANDIDATE_COUNT', 1),
    }
    stop_seqs = _get_env_list('GEMINI_STOP_SEQUENCES')
    if stop_seqs:
        params['stop_sequences'] = stop_seqs

    presence = os.environ.get('GEMINI_PRESENCE_PENALTY')
    freq = os.environ.get('GEMINI_FREQUENCY_PENALTY')
    if presence is not None and presence != '':
        try:
            params['presence_penalty'] = float(presence)
        except Exception:
            logging.warning(f'Invalid GEMINI_PRESENCE_PENALTY: {presence}')
    if freq is not None and freq != '':
        try:
            params['frequency_penalty'] = float(freq)
        except Exception:
            logging.warning(f'Invalid GEMINI_FREQUENCY_PENALTY: {freq}')

    # Remove None values
    return {k: v for k, v in params.items() if v is not None}

# Global client instance (singleton pattern to avoid repeated initialization)
_model = None

def parse_args():
    parser = argparse.ArgumentParser(description='AI Analysis Script for Stock Data')
    parser.add_argument(
        '--stock-list',
        type=str,
        choices=['hold_stock_list', 'watch_stock_list'],
        default='hold_stock_list',
        help='Which stock list to analyze (default: hold_stock_list)'
    )
    parser.add_argument(
        '--update-threshold-days',
        type=int,
        default=7,
        help='Number of days before re-analyzing a stock (default: 7)'
    )
    parser.add_argument(
        '--models',
        type=str,
        nargs='+',
        choices=list(MODEL_LIST.keys()),
        default=None,
        help=f'Models to use for analysis (default: all supported models)'
    )
    parser.add_argument(
        '--input-type',
        type=str,
        choices=['stock', 'summary'],
        default='stock',
        help='Type of analysis to perform: stock (per-stock analysis) or summary (portfolio summary prompts) (default: stock)'
    )

    return parser.parse_args()

class RateLimitError(Exception):
    """Exception raised when API rate limit (429) is hit."""
    pass

def is_valid_markdown(text):
    """Check if the response text is valid markdown format."""
    if not text or not isinstance(text, str):
        return False
    
    text = text.strip()
    
    # Check if it's a JSON response (common error case)
    if text.startswith('{') or text.startswith('['):
        try:
            json.loads(text)
            logging.warning('Response appears to be JSON instead of markdown')
            return False
        except Exception:
            pass
    
    # Check for Python object representations (from API response objects)
    python_object_patterns = [
        'content=',
        'Content(',
        'GroundingMetadata(',
        'SearchEntryPoint(',
        'FinishReason.',
    ]
    for pattern in python_object_patterns:
        if text.startswith(pattern):
            logging.warning(f'Response appears to be Python object representation: {pattern}')
            return False
    
    # Check for common error patterns
    error_patterns = [
        'error',
        'exception',
        'traceback',
        '<!DOCTYPE',
        '<html',
    ]
    text_lower = text.lower()
    for pattern in error_patterns:
        if text_lower.startswith(pattern):
            logging.warning(f'Response contains error pattern: {pattern}')
            return False
    
    # Check for HTML/XML tags (common in grounding metadata responses)
    html_tags = [
        '<style',
        '<div',
        '<svg',
        '<script',
        '<span',
        '<table',
        '<form',
        '<iframe',
        '<img',
        '<link',
        '<meta',
        '<head',
        '<body',
    ]
    for tag in html_tags:
        if text_lower.startswith(tag):
            logging.warning(f'Response contains HTML tag: {tag}')
            return False
    
    # Basic markdown validation - should have some structure
    # Check for common markdown elements (at least one should exist)
    markdown_indicators = [
        text.count('#') > 0,  # Headers
        text.count('**') > 0,  # Bold
        text.count('*') > 2,  # Italic or list
        text.count('-') > 2,  # Lists or separators
        text.count('\n') > 3,  # Multiple lines
    ]
    
    # At least 2 markdown indicators should be present
    if sum(markdown_indicators) < 2:
        logging.warning('Response lacks markdown structure')
        return False
    
    # Check minimum length (should be substantial analysis)
    if len(text) < 100:
        logging.warning(f'Response too short: {len(text)} characters')
        return False
    
    return True

def get_client(api_key):
    """Get or create the Gemini client instance (singleton pattern)."""
    global _model
    if _model is None:
        _model = genai.Client(api_key=api_key)
        logging.info("Initialized Gemini client")
        time.sleep(60)  # Sleep 1 minute to avoid rate limit
    return _model

def call_gemini_api(prompt, api_key, model_name, tools, max_retries=5):
    client = get_client(api_key)
    
    # Build request parameters from env vars / defaults
    api_params = get_api_params()
    # Always include model and contents
    request_kwargs = dict(model=model_name, contents=prompt, **api_params)
    # Put tools into a shallow config dict alongside existing api_params
    try:
        request_kwargs['config'] = dict(api_params)
        request_kwargs['config']['tools'] = tools
    except Exception:
        request_kwargs['config'] = {'tools': tools}
    logging.debug(f'Calling Gemini with requested params: {request_kwargs}')
    # Retry logic for this specific model (only for 503 errors)
    for attempt in range(max_retries):
        try:
            # Determine which kwargs are accepted by this SDK's generate_content
            try:
                import inspect
                gen_func = getattr(client.models, 'generate_content', None)
                if gen_func is None:
                    logging.error('SDK client.models.generate_content not found')
                    return None
                sig = inspect.signature(gen_func)
                accepted = set(sig.parameters.keys())
                logging.debug(f'Accepted params for SDK call: {accepted}')

                # If SDK uses a single 'config' param, put api tuning params inside it.
                if 'config' in accepted:
                    # respected config may already be set in request_kwargs
                    cfg = request_kwargs.get('config', api_params)
                    filtered_kwargs = {'model': model_name, 'contents': prompt, 'config': cfg}
                    # If SDK also accepts some tuning args at top-level, include them
                    for k in ('temperature', 'top_p', 'candidate_count', 'max_output_tokens', 'stop_sequences', 'presence_penalty', 'frequency_penalty'):
                        if k in accepted and k in api_params:
                            filtered_kwargs[k] = api_params[k]
                else:
                    filtered_kwargs = {k: v for k, v in request_kwargs.items() if k in accepted}

                logging.debug(f'Filtered params for SDK call: {list(filtered_kwargs.keys())}')

                # Call SDK with filtered kwargs, applying a per-call timeout so
                # the script never hangs indefinitely on a stalled HTTP request.
                # NOTE: do NOT use `with` here — exiting the context manager calls
                # shutdown(wait=True), which blocks until the hung thread finishes,
                # defeating the purpose of the timeout.
                api_timeout = _get_env_int('GEMINI_API_TIMEOUT', 120)
                executor = concurrent.futures.ThreadPoolExecutor(max_workers=1)
                future = executor.submit(gen_func, **filtered_kwargs)
                try:
                    response = future.result(timeout=api_timeout)
                except concurrent.futures.TimeoutError:
                    executor.shutdown(wait=False)  # abandon the hung thread immediately
                    logging.warning(f'API call timed out after {api_timeout}s for {model_name}')
                    if attempt < max_retries - 1:
                        logging.warning(f'Retrying ({attempt + 1}/{max_retries})...')
                        time.sleep(30)
                        continue
                    logging.error(f'API call timed out after {max_retries} retries for {model_name}')
                    return None
                executor.shutdown(wait=False)

                # Robustly extract text from various SDK response shapes
                resp_text = None
                try:
                    if hasattr(response, 'text') and response.text:
                        resp_text = response.text
                    elif isinstance(response, dict):
                        resp_text = response.get('text') or json.dumps(response, ensure_ascii=False)
                    else:
                        # Try common shapes (outputs / candidates)
                        if hasattr(response, 'output'):
                            out = getattr(response, 'output')
                            if isinstance(out, (list, tuple)) and len(out) > 0:
                                resp_text = str(out[0])
                            else:
                                resp_text = str(out)
                        elif hasattr(response, 'candidates'):
                            cands = getattr(response, 'candidates')
                            if isinstance(cands, (list, tuple)) and len(cands) > 0:
                                cand = cands[0]
                                resp_text = getattr(cand, 'text', None) or str(cand)
                            else:
                                resp_text = str(cands)
                        else:
                            resp_text = str(response)
                except Exception:
                    resp_text = str(response)

                # Check is valid markdown response
                if not is_valid_markdown(resp_text):
                    if attempt < max_retries - 1:
                        wait_time = 30
                        logging.warning(f'Invalid markdown response for {model_name}, retry {attempt + 1}/{max_retries} after {wait_time}s')
                        time.sleep(wait_time)
                        continue
                    else:
                        logging.error(f'Invalid markdown response after {max_retries} retries for {model_name}')
                        return None

                return resp_text
            except Exception as inner_ex:
                # If the SDK inner call failed, check if it's a rate-limit (429) or quota error
                inner_msg = str(inner_ex).lower()
                logging.error(f'Failed to call SDK generate_content with filtered params: {inner_ex}')
                if '429' in inner_msg or 'rate limit' in inner_msg or 'quota' in inner_msg:
                    logging.warning('Detected rate limit error in SDK call, raising RateLimitError')
                    raise RateLimitError(f'Rate limit detected in SDK inner call: {inner_ex}')
                return None
            
        except Exception as ex:
            error_str = str(ex)
            logging.error(f'API call error for {model_name}: {error_str}')
            
            # Handle 429 - Rate Limit: raise exception to switch model
            if '429' in error_str or 'rate limit' in error_str.lower() or 'quota' in error_str.lower():
                logging.warning(f'Rate limit (429) for {model_name}')
                raise RateLimitError(f'Rate limit for {model_name}')
            
            # Handle 503 - Service Unavailable: retry with backoff
            elif '503' in error_str or 'unavailable' in error_str.lower() or 'overloaded' in error_str.lower():
                if attempt < max_retries - 1:
                    wait_time = 30
                    logging.warning(f'Service unavailable (503) for {model_name}, retry {attempt + 1}/{max_retries} after {wait_time}s')
                    time.sleep(wait_time)
                    continue
                else:
                    logging.error(f'Service unavailable (503) after {max_retries} retries for {model_name}')
                    return None
            
            # Other errors - return None immediately
            else:
                logging.error(f'API error for {model_name}: {ex}')
                return None
    
    return None

def load_stat(stat_file):
    if stat_file.exists():
        try:
            with open(stat_file, 'r', encoding='utf-8') as f:
                return json.loads(f.read())
        except Exception as ex:
            logging.warning(f'Failed to load stat.json: {ex}')
    return {}

def save_stat(stat_file, stat_data):
    try:
        stat_file.parent.mkdir(parents=True, exist_ok=True)
        with open(stat_file, 'w', encoding='utf-8') as f:
            f.write(json.dumps(stat_data, indent=2, sort_keys=True))
    except Exception as ex:
        logging.error(f'Failed to save stat.json: {ex}')

def should_update(stat_data, prompt_key, symbol, threshold_days=7):
    if prompt_key not in stat_data:
        return True
    
    if symbol not in stat_data[prompt_key]:
        return True
    
    last_update_str = stat_data[prompt_key][symbol].get('last_update_time')
    if not last_update_str:
        return True
    
    try:
        last_update = datetime.fromisoformat(last_update_str)
        days_since_update = (datetime.now() - last_update).days
        return days_since_update >= threshold_days
    except Exception as ex:
        logging.warning(f'Failed to parse last_update_time for {symbol}: {ex}')
        return True

def should_update_summary(stat_data, prompt_key, threshold_days=7):
    summary_stat = stat_data.get('summary', {})
    if prompt_key not in summary_stat:
        return True
    last_update_str = summary_stat[prompt_key].get('last_update_time')
    if not last_update_str:
        return True
    try:
        last_update = datetime.fromisoformat(last_update_str)
        days_since_update = (datetime.now() - last_update).days
        return days_since_update >= threshold_days
    except Exception as ex:
        logging.warning(f'Failed to parse last_update_time for summary {prompt_key}: {ex}')
        return True

def save_analysis_result(output_base_dir, prompt_key, symbol, content):
    output_dir = output_base_dir / prompt_key
    output_dir.mkdir(parents=True, exist_ok=True)
    
    output_file = output_dir / f'{symbol}.md'
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    logging.info(f'Saved analysis for {symbol} to {output_file}')

def build_summary_prompt_with_context(prompt: str, cfg: dict, workspace_root: pathlib.Path) -> str:
    """Pre-inject local file content into a summary prompt based on the 'inject' config."""
    inject = cfg.get('inject')
    if not inject:
        return prompt

    context_parts = []

    # --- Inject portfolio data from trade-data.json ---
    if inject.get('portfolio_from_trade_data'):
        try:
            trade_data = json.loads((workspace_root / 'trade-data.json').read_text(encoding='utf-8'))
            portfolio = trade_data.get('portfolio', {})
            context_parts.append(
                "## 【持股組合資料 (from trade-data.json .portfolio)】\n```json\n"
                + json.dumps(portfolio, indent=2, ensure_ascii=False)
                + "\n```"
            )
            logging.info(f"Injected portfolio data: {list(portfolio.keys())}")
        except Exception as ex:
            logging.warning(f"Failed to inject portfolio data: {ex}")

    # --- Inject per-stock .md analysis files for portfolio holdings ---
    if inject.get('stock_md_files_for_portfolio'):
        md_dirs = inject.get('md_dirs')
        try:
            trade_data = json.loads((workspace_root / 'trade-data.json').read_text(encoding='utf-8'))
            portfolio_symbols = sorted(trade_data.get('portfolio', {}).keys())
            ai_analysis_dir = workspace_root / 'plugin-react' / 'ai-analysis'
            md_sections = []
            missing = []
            for symbol in portfolio_symbols:
                found = False
                for md_dir in md_dirs:
                    md_file = ai_analysis_dir / md_dir / f'{symbol}.md'
                    if md_file.exists():
                        content = md_file.read_text(encoding='utf-8')
                        md_sections.append(f"### {symbol} ({md_dir})\n{content}")
                        found = True
                        break
                if not found:
                    missing.append(symbol)
            if md_sections:
                context_parts.append(
                    "## 【個股深度分析報告 (from plugin-react/ai-analysis)】\n\n"
                    + "\n\n---\n\n".join(md_sections)
                )
                logging.info(f"Injected {len(md_sections)} stock MD files")
            if missing:
                logging.warning(f"No .md analysis files found for: {missing}")
        except Exception as ex:
            logging.warning(f"Failed to inject stock MD files: {ex}")

    if not context_parts:
        return prompt

    injected_context = "\n\n".join(context_parts)
    return f"{injected_context}\n\n---\n\n{prompt}"


def save_summary_result(workspace_root, output_path, content):
    output_file = workspace_root / output_path
    output_file.parent.mkdir(parents=True, exist_ok=True)
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(content)
    logging.info(f'Saved summary analysis to {output_file}')

if __name__ == "__main__":
    root_logger = logging.getLogger()
    for _h in root_logger.handlers[:]:
        root_logger.removeHandler(_h)
    logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
    
    args = parse_args()
    update_threshold_days = args.update_threshold_days
    input_type = args.input_type
    selected_models = args.models if args.models else list(MODEL_LIST.keys())
    
    # Filter MODEL_LIST based on selected models
    filtered_model_list = {k: v for k, v in MODEL_LIST.items() if k in selected_models}
    
    if not GEMINI_API_KEY:
        logging.error("GEMINI_API_KEY environment variable is not set")
        sys.exit(1)
    
    script_path = pathlib.Path(__file__).parent.resolve()
    workspace_root = (script_path / ".." / "..").resolve()
    output_dir = workspace_root / "plugin-react" / "ai-analysis"
    stat_file = output_dir / 'stat.json'
    stat_data = load_stat(stat_file)

    if input_type == 'summary':
        # Summary mode: run each summary prompt once (no per-stock iteration)
        summary_prompts = load_summary_prompts_from_dir(_SCRIPT_DIR / "prompts" / "summary")

        if not summary_prompts:
            logging.error("No summary prompts found in prompts/summary directory")
            sys.exit(1)

        tasks = []
        for prompt_key, prompt_cfg in summary_prompts.items():
            if should_update_summary(stat_data, prompt_key, update_threshold_days):
                tasks.append({
                    'prompt_key': prompt_key,
                    'prompt': prompt_cfg['prompt'],
                    'output_path': prompt_cfg['output_path'],
                })

        total_tasks = len(tasks)
        skipped_count = len(summary_prompts) - total_tasks
        updated_count = 0

        logging.info(f"Starting summary AI analysis for {total_tasks} prompts")
        logging.info(f"Update threshold: {update_threshold_days} days")
        logging.info(f"Selected models: {', '.join(filtered_model_list.keys())}")
        logging.info(f"Total tasks: {total_tasks} to process, {skipped_count} already up-to-date")

        task_idx = 0
        for model_idx, (model_name, model_cfg) in enumerate(filtered_model_list.items()):
            if task_idx >= total_tasks:
                break

            logging.info(f"\n{'='*80}")
            logging.info(f"Using model {model_idx + 1}/{len(filtered_model_list)}: {model_name}")
            logging.info(f"{'='*80}")

            model_switched = False

            while task_idx < total_tasks and not model_switched:
                task = tasks[task_idx]
                prompt_key = task['prompt_key']
                prompt = task['prompt']
                output_path = task['output_path']
                prompt_cfg = summary_prompts[prompt_key]

                logging.info(f"[{task_idx + 1}/{total_tasks}] Running summary prompt '{prompt_key}' using {model_name}")

                try:
                    use_tool = False
                    try:
                        use_tool = bool(model_cfg.get('use_tool'))
                    except Exception:
                        use_tool = False

                    if use_tool:
                        grounding_tool = types.Tool(google_search=types.GoogleSearch())
                        tools = [grounding_tool]
                    else:
                        tools = []

                    enriched_prompt = build_summary_prompt_with_context(prompt, prompt_cfg, workspace_root)
                    logging.info(f"Enriched prompt for '{prompt_key}': {enriched_prompt}...")
                    result = call_gemini_api(enriched_prompt, GEMINI_API_KEY, model_name, tools)
                except RateLimitError:
                    logging.warning(f"Rate limit (429) for {model_name}, switching to next model")
                    model_switched = True
                    if model_idx == len(filtered_model_list) - 1:
                        logging.error("All models exhausted. Exiting program.")
                        logging.info(f"Progress: {updated_count}/{total_tasks} completed, {total_tasks - task_idx} remaining")
                        sys.exit(0)
                    break

                if result:
                    save_summary_result(workspace_root, output_path, result)
                    if 'summary' not in stat_data:
                        stat_data['summary'] = {}
                    stat_data['summary'][prompt_key] = {
                        'last_update_time': datetime.now().isoformat()
                    }
                    save_stat(stat_file, stat_data)
                    updated_count += 1
                    logging.info(f"✓ Successfully ran summary prompt '{prompt_key}'")
                else:
                    logging.error(f"✗ Failed to run summary prompt '{prompt_key}'")
                task_idx += 1
                if task_idx < total_tasks:
                    time.sleep(15)

            if task_idx >= total_tasks:
                logging.info(f"All summary tasks completed successfully with {model_name}")
                break

        logging.info("\n" + "="*60)
        logging.info("Summary AI analysis completed!")
        logging.info(f"Updated: {updated_count}, Skipped: {skipped_count}")
        logging.info("="*60)

    else:
        # Stock mode: existing per-stock analysis logic
        stock_list_key = args.stock_list

        input_path = workspace_root / 'trade-data.json'
        with open(input_path, 'r', encoding='utf-8') as f:
            data = json.loads(f.read())

        stock_info_path = workspace_root / 'stock-data' / 'stat.json'
        with open(stock_info_path, 'r', encoding='utf-8') as f:
            stock_info_data = json.loads(f.read())

        if stock_list_key not in data:
            logging.error(f"Stock list key '{stock_list_key}' not found in trade-data.json")
            sys.exit(1)

        stock_list = data[stock_list_key]
        logging.info(f"Starting AI analysis for {len(stock_list)} stocks from '{stock_list_key}'")
        logging.info(f"Update threshold: {update_threshold_days} days")
        logging.info(f"Selected models: {', '.join(filtered_model_list.keys())}")
        logging.info(f"Stock list: {', '.join(stock_list)}")

        # Build task list (only tasks that need to be updated)
        tasks = []
        for prompt_key, prompt_template in prompts.items():
            for symbol in stock_list:
                if should_update(stat_data, prompt_key, symbol, update_threshold_days):
                    tasks.append({
                        'prompt_key': prompt_key,
                        'prompt_template': prompt_template,
                        'symbol': symbol
                    })

        total_tasks = len(tasks)
        total_calls = len(stock_list) * len(prompts)
        skipped_count = total_calls - total_tasks
        updated_count = 0

        logging.info(f"Total tasks: {total_tasks} to process, {skipped_count} already up-to-date")

        # Try each model in the list (filtered_model_list is a dict -> model_name: config)
        task_idx = 0
        for model_idx, (model_name, model_cfg) in enumerate(filtered_model_list.items()):
            if task_idx >= total_tasks:
                break

            logging.info(f"\n{'='*80}")
            logging.info(f"Using model {model_idx + 1}/{len(filtered_model_list)}: {model_name}")
            logging.info(f"{'='*80}")

            model_switched = False

            while task_idx < total_tasks and not model_switched:
                task = tasks[task_idx]
                prompt_key = task['prompt_key']
                prompt_template = task['prompt_template']
                symbol = task['symbol']
                stock_stat = stock_info_data.get(symbol, {})

                logging.info(f"[{task_idx + 1}/{total_tasks}] Analyzing {symbol} with {prompt_key} using {model_name}")
                stock_stat_str = json.dumps(stock_stat, indent=2, ensure_ascii=False) if stock_stat else "無基本面數據, 請自行取得相關資訊。"
                prompt = prompt_template.format(symbol=symbol, stock_stat=stock_stat_str)

                try:
                    # Respect per-model config (e.g., whether to use grounding tools)
                    use_tool = False
                    try:
                        use_tool = bool(model_cfg.get('use_tool'))
                    except Exception:
                        use_tool = False

                    if use_tool:
                        grounding_tool = types.Tool(
                            google_search=types.GoogleSearch()
                        )
                        tools = [grounding_tool]
                    else:
                        tools = []

                    result = call_gemini_api(prompt, GEMINI_API_KEY, model_name, tools)
                except RateLimitError:
                    logging.warning(f"Rate limit (429) for {model_name}, switching to next model")
                    model_switched = True
                    if model_idx == len(filtered_model_list) - 1:
                        logging.error("All models exhausted. Exiting program.")
                        logging.info(f"Progress: {updated_count}/{total_tasks} completed, {total_tasks - task_idx} remaining")
                        sys.exit(0)
                    break

                if result:
                    save_analysis_result(output_dir, prompt_key, symbol, result)
                    if prompt_key not in stat_data:
                        stat_data[prompt_key] = {}
                    stat_data[prompt_key][symbol] = {
                        'last_update_time': datetime.now().isoformat()
                    }
                    save_stat(stat_file, stat_data)

                    updated_count += 1
                    logging.info(f"✓ Successfully analyzed {symbol}")
                else:
                    logging.error(f"✗ Failed to analyze {symbol}")
                task_idx += 1                
                if task_idx < total_tasks:
                    time.sleep(15)

            # If we completed all tasks without hitting rate limit, break out
            if task_idx >= total_tasks:
                logging.info(f"All tasks completed successfully with {model_name}")
                break

        logging.info("\n" + "="*60)
        logging.info("AI analysis completed!")
        logging.info(f"Updated: {updated_count}, Skipped: {skipped_count}")
        logging.info("="*60)
