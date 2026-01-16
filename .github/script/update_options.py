#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Update hold_option_list in trade-data.json
Automatically adds new options, removes expired ones, and sorts alphabetically
"""

import json
import re
import sys
import os
from datetime import datetime
from typing import List, Dict

def parse_option_trade(line: str) -> Dict:
    """
    Parse option trade line like: SOLD 3 ABNB Feb27'26 110 PUT @ 1
    Returns dict with symbol, type, expiry, strike
    """
    # Pattern: SOLD <quantity> <SYMBOL> <Date> <Strike> <PUT/CALL> @ <Price>
    pattern = r'SOLD\s+\d+\s+([A-Z]+)\s+([A-Za-z]+\d+[\']\d{2})\s+([\d.]+)\s+(PUT|CALL)\s+@\s+([\d.]+)'
    match = re.match(pattern, line.strip())
    
    if not match:
        print(f"Warning: Could not parse line: {line}")
        return None
    
    symbol = match.group(1)
    date_str = match.group(2)  # e.g., Feb27'26
    strike_str = match.group(3)
    option_type = match.group(4).lower()
    
    # Convert strike to int if it's a whole number, otherwise float
    strike_float = float(strike_str)
    strike = int(strike_float) if strike_float.is_integer() else strike_float
    
    # Parse date: Feb27'26 -> 2026-02-27
    expiry = parse_date(date_str)
    
    return {
        "symbol": symbol,
        "type": option_type,
        "expiry": expiry,
        "strike": strike
    }

def parse_date(date_str: str) -> str:
    """
    Parse date string like Feb27'26 to 2026-02-27
    """
    # Extract month, day, year
    pattern = r"([A-Za-z]+)(\d+)[''](\d{2})"
    match = re.match(pattern, date_str)
    
    if not match:
        raise ValueError(f"Invalid date format: {date_str}")
    
    month_str = match.group(1)
    day = match.group(2).zfill(2)
    year = "20" + match.group(3)
    
    # Convert month name to number
    month_map = {
        'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04',
        'May': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08',
        'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12'
    }
    
    month = month_map.get(month_str, None)
    if not month:
        raise ValueError(f"Invalid month: {month_str}")
    
    return f"{year}-{month}-{day}"

def is_expired(expiry_date: str, reference_date: datetime = None) -> bool:
    """
    Check if option is expired
    """
    if reference_date is None:
        reference_date = datetime.now()
    
    expiry = datetime.strptime(expiry_date, "%Y-%m-%d")
    return expiry < reference_date

def remove_expired_options(options: List[Dict], reference_date: datetime = None) -> List[Dict]:
    """
    Remove expired options from list
    """
    return [opt for opt in options if not is_expired(opt["expiry"], reference_date)]

def merge_options(existing: List[Dict], new: List[Dict]) -> List[Dict]:
    """
    Merge new options into existing list, avoiding duplicates
    """
    # Create a set of existing options for quick lookup
    existing_set = set()
    for opt in existing:
        key = (opt["symbol"], opt["type"], opt["expiry"], opt["strike"])
        existing_set.add(key)
    
    # Add new options that don't exist
    merged = existing.copy()
    for opt in new:
        key = (opt["symbol"], opt["type"], opt["expiry"], opt["strike"])
        if key not in existing_set:
            merged.append(opt)
            existing_set.add(key)
            print(f"Added: {opt['symbol']} {opt['expiry']} {opt['strike']} {opt['type'].upper()}")
        else:
            print(f"Skipped (duplicate): {opt['symbol']} {opt['expiry']} {opt['strike']} {opt['type'].upper()}")
    
    return merged

def sort_options(options: List[Dict]) -> List[Dict]:
    """
    Sort options by symbol (alphabetically), then by expiry date, then by strike
    """
    return sorted(options, key=lambda x: (x["symbol"], x["expiry"], x["strike"]))

def update_trade_data(json_file: str, input_data: str):
    """
    Update trade-data.json with new options
    """
    # Read existing data
    with open(json_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Parse new options from input
    new_options = []
    for line in input_data.strip().split('\n'):
        line = line.strip()
        if line:
            option = parse_option_trade(line)
            if option:
                new_options.append(option)
    
    print(f"\nParsed {len(new_options)} new option trades")
    
    # Get existing options
    existing_options = data.get("hold_option_list", [])
    print(f"Existing options: {len(existing_options)}")
    
    # Remove expired options
    non_expired = remove_expired_options(existing_options)
    expired_count = len(existing_options) - len(non_expired)
    if expired_count > 0:
        print(f"Removed {expired_count} expired options")
    
    # Merge new options
    merged = merge_options(non_expired, new_options)
    
    # Sort alphabetically
    sorted_options = sort_options(merged)
    
    # Update data
    data["hold_option_list"] = sorted_options
    
    # Write back to file (RFC 8259 compliant: UTF-8, no BOM, 3-space indent)
    with open(json_file, 'w', encoding='utf-8', newline='\n') as f:
        json.dump(data, f, indent=3, ensure_ascii=False, separators=(',', ':'))
        f.write('\n')  # Ensure file ends with newline
    
    print(f"\nTotal options after update: {len(sorted_options)}")
    print(f"Updated {json_file}")

def main():
    """
    Main function - interactive mode
    """
    # Get script directory and construct path to trade-data.json
    script_dir = os.path.dirname(os.path.abspath(__file__))
    json_file = os.path.join(script_dir, "..", "..", "trade-data.json")
    json_file = os.path.normpath(json_file)
    
    # Interactive mode - read from stdin
    print("Enter option trades (one per line, Ctrl+Z then Enter to finish):")
    print("Format: SOLD <qty> <SYMBOL> <Date> <Strike> PUT/CALL @ <Price>")
    print("Example: SOLD 3 ABNB Feb27'26 110 PUT @ 1\n")
    
    input_data = sys.stdin.read()
    
    if not input_data.strip():
        print("No input data provided")
        return
    
    update_trade_data(json_file, input_data)

if __name__ == "__main__":
    main()
