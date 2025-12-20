import os
import sys
import json
import time
import pathlib
import logging
import argparse
from datetime import datetime
from google import genai
from build_ai_analysis_prompts import prompts

GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY", "")

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
    return parser.parse_args()

class RateLimitError(Exception):
    """Exception raised when API rate limit (429) is hit."""
    pass

def get_client(api_key):
    """Get or create the Gemini client instance (singleton pattern)."""
    global _model
    if _model is None:
        _model = genai.Client(api_key=api_key)
        logging.info("Initialized Gemini client")
        time.sleep(60)  # Sleep 1 minute to avoid rate limit
    return _model

def call_gemini_api(prompt, api_key, model_name="gemini-3.0-flash-preview", max_retries=5):
    client = get_client(api_key)
    
    for attempt in range(max_retries):
        try:
            response = client.models.generate_content(
                model=model_name,
                contents=prompt
            )
            return response.text
        except Exception as ex:
            error_str = str(ex)
            if '429' in error_str or 'rate limit' in error_str.lower() or 'quota' in error_str.lower():
                logging.error(f'Rate limit exceeded (429): {ex}')
                raise RateLimitError(f'API rate limit exceeded: {ex}')
            
            # Handle 503 (Service Unavailable / Model Overloaded) with retry
            if '503' in error_str or 'unavailable' in error_str.lower() or 'overloaded' in error_str.lower():
                wait_time = 60 * (attempt + 1)  # 60s, 120s, 180s
                logging.warning(f'Service unavailable (503), attempt {attempt + 1}/{max_retries}. Waiting {wait_time}s before retry...')
                if attempt < max_retries - 1:
                    time.sleep(wait_time)
                    continue
                else:
                    logging.error(f'Service unavailable after {max_retries} retries: {ex}')
                    return None
            
            logging.error(f'Gemini API error: {ex}')
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

def save_analysis_result(output_base_dir, prompt_key, symbol, content):
    output_dir = output_base_dir / prompt_key
    output_dir.mkdir(parents=True, exist_ok=True)
    
    output_file = output_dir / f'{symbol}.md'
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    logging.info(f'Saved analysis for {symbol} to {output_file}')

if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
    
    args = parse_args()
    update_threshold_days = args.update_threshold_days
    stock_list_key = args.stock_list
    
    if not GEMINI_API_KEY:
        logging.error("GEMINI_API_KEY environment variable is not set")
        sys.exit(1)
    
    script_path = pathlib.Path(__file__).parent.resolve()
    output_dir = plugin_react_folder_path = script_path / ".." / ".." / "plugin-react" / "ai-analysis"

    input_path = script_path / '..' / '..' / 'trade-data.json'
    with open(input_path, 'r', encoding='utf-8') as f:
        data = json.loads(f.read())
    stat_file = output_dir / 'stat.json'
    stat_data = load_stat(stat_file)
    
    if stock_list_key not in data:
        logging.error(f"Stock list key '{stock_list_key}' not found in trade-data.json")
        sys.exit(1)
    
    stock_list = data[stock_list_key]
    logging.info(f"Starting AI analysis for {len(stock_list)} stocks from '{stock_list_key}'")
    logging.info(f"Update threshold: {update_threshold_days} days")
    logging.info(f"Stock list: {', '.join(stock_list)}")
    
    total_calls = len(stock_list) * len(prompts)
    current_call = 0
    skipped_count = 0
    updated_count = 0
    
    for prompt_key, prompt_template in prompts.items():
        logging.info(f"\n{'='*60}")
        logging.info(f"Processing prompt: {prompt_key}")
        logging.info(f"{'='*60}")
        for symbol in stock_list:
            current_call += 1
            if not should_update(stat_data, prompt_key, symbol, update_threshold_days):
                logging.info(f"[{current_call}/{total_calls}] Skipping {symbol} (updated within {update_threshold_days} days)")
                skipped_count += 1
                continue
            
            logging.info(f"[{current_call}/{total_calls}] Analyzing {symbol} with {prompt_key}")
            prompt = prompt_template.format(symbol=symbol)
            try:
                result = call_gemini_api(prompt, GEMINI_API_KEY)
            except RateLimitError:
                logging.error("Rate limit (429) encountered. Exiting program.")
                logging.info(f"Progress before exit - Updated: {updated_count}, Skipped: {skipped_count}")
                sys.exit(0)
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

            if current_call < total_calls:
                time.sleep(15)
    
    logging.info("\n" + "="*60)
    logging.info("AI analysis completed!")
    logging.info(f"Updated: {updated_count}, Skipped: {skipped_count}")
    logging.info("="*60)
