#!/usr/bin/env python3
"""
Update summary statistics in stat.json with modification times from summary/*.md files
"""

import os
import json
from pathlib import Path
from datetime import datetime

def get_modification_time(file_path):
    """Get file modification time in ISO 8601 format"""
    timestamp = os.path.getmtime(file_path)
    return datetime.fromtimestamp(timestamp).isoformat()

def update_summary_stats():
    """Update stat.json with summary file modification times"""
    
    # Define paths
    script_dir = Path(__file__).parent
    summary_dir = script_dir / ".." / ".." / "plugin-react" / "ai-analysis" / "summary"
    stat_file = script_dir / ".." / ".." / "plugin-react" / "ai-analysis" / "stat.json"
    
    # Check if summary directory exists
    if not summary_dir.exists():
        print(f"❌ Summary directory not found: {summary_dir}")
        return
    
    # Check if stat.json exists
    if not stat_file.exists():
        print(f"❌ stat.json not found: {stat_file}")
        return
    
    # Read existing stat.json
    print(f"📖 Reading {stat_file}")
    with open(stat_file, 'r', encoding='utf-8') as f:
        stat_data = json.load(f)
    
    # Ensure summary section exists
    if "summary" not in stat_data:
        stat_data["summary"] = {}
        print("✨ Created new 'summary' section in stat.json")
    
    # Find all .md files in summary directory
    md_files = list(summary_dir.glob("*.md"))
    
    if not md_files:
        print(f"⚠️  No .md files found in {summary_dir}")
        return
    
    print(f"\n🔍 Found {len(md_files)} markdown file(s) in summary/")
    
    # Update modification times
    updated_count = 0
    for md_file in md_files:
        file_name = md_file.stem  # Get filename without extension
        mod_time = get_modification_time(md_file)
        
        # Initialize file entry if it doesn't exist
        if file_name not in stat_data["summary"]:
            stat_data["summary"][file_name] = {}
        
        # Update last_update_time
        old_time = stat_data["summary"][file_name].get("last_update_time", "")
        stat_data["summary"][file_name]["last_update_time"] = mod_time
        
        if old_time != mod_time:
            print(f"  ✅ {file_name}.md: {mod_time}")
            updated_count += 1
        else:
            print(f"  ⏭️  {file_name}.md: No change ({mod_time})")
    
    # Write updated data back to stat.json
    print(f"\n💾 Writing updated data to {stat_file}")
    with open(stat_file, 'w', encoding='utf-8') as f:
        json.dump(stat_data, f, indent=2, ensure_ascii=False)
    
    print(f"\n✨ Done! Updated {updated_count} out of {len(md_files)} file(s)")
    print(f"📊 Total summary entries: {len(stat_data['summary'])}")

if __name__ == "__main__":
    try:
        update_summary_stats()
    except Exception as e:
        print(f"\n❌ Error: {e}")
        import traceback
        traceback.print_exc()
