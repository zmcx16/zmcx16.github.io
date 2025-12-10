import os
import sys
import json
import time
import pathlib
import logging
from datetime import datetime
import google.generativeai as genai
from build_ai_analysis_prompts import prompts

GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY", "")
UPDATE_THRESHOLD_DAYS = 7

def call_gemini_api(prompt, api_key, model_name="gemini-2.5-flash"):
    try:
        genai.configure(api_key=api_key)
        model = genai.GenerativeModel(model_name)
        
        response = model.generate_content(prompt)
        return response.text
    except Exception as ex:
        logging.error(f'Gemini API error: {ex}')
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
    
    stock_list = data["hold_stock_list"]
    logging.info(f"Starting AI analysis for {len(stock_list)} stocks")
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
            if not should_update(stat_data, prompt_key, symbol, UPDATE_THRESHOLD_DAYS):
                logging.info(f"[{current_call}/{total_calls}] Skipping {symbol} (updated within {UPDATE_THRESHOLD_DAYS} days)")
                skipped_count += 1
                continue
            
            logging.info(f"[{current_call}/{total_calls}] Analyzing {symbol} with {prompt_key}")
            prompt = prompt_template.format(symbol=symbol)
            result = call_gemini_api(prompt, GEMINI_API_KEY)
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
                time.sleep(2)
    
    logging.info("\n" + "="*60)
    logging.info("AI analysis completed!")
    logging.info(f"Updated: {updated_count}, Skipped: {skipped_count}")
    logging.info("="*60)
