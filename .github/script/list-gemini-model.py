# -*- coding: utf-8 -*-
"""
List all available Gemini models using the Google AI API.
"""

import os
import sys
import json
import io
from typing import List, Dict, Any

# Set UTF-8 encoding for stdout in Windows
if sys.platform == 'win32':
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8')

try:
    from google import genai
except ImportError:
    print("Error: google-genai package is not installed.")
    print("Please install it using: pip install google-genai")
    sys.exit(1)


def test_model_access(client, model_name: str) -> tuple[bool, str]:
    """
    Test if a model is accessible with the current API key.
    
    Args:
        client: Gemini client instance.
        model_name: Name of the model to test.
        
    Returns:
        Tuple of (is_accessible, status_message).
    """
    try:
        # Try a simple generate call with minimal content
        response = client.models.generate_content(
            model=model_name,
            contents="Hi"
        )
        return True, "Available"
    except Exception as ex:
        error_str = str(ex)
        if '404' in error_str or 'not found' in error_str.lower():
            return False, "Not Found"
        elif '403' in error_str or 'permission' in error_str.lower():
            return False, "Permission Denied"
        elif '429' in error_str or 'rate limit' in error_str.lower():
            return True, "Available (Rate Limited)"
        else:
            return False, f"Error: {error_str[:50]}"


def list_gemini_models(api_key: str = None, test_access: bool = False) -> List[Dict[str, Any]]:
    """
    List all available Gemini models.
    
    Args:
        api_key: Google AI API key. If not provided, will try to get from GOOGLE_API_KEY env var.
        test_access: If True, test if each model is accessible with the API key.
        
    Returns:
        List of model information dictionaries.
    """
    # Get API key from parameter or environment variable
    if api_key is None:
        api_key = os.getenv('GOOGLE_API_KEY')
    
    if not api_key:
        raise ValueError(
            "API key not provided. Please set GOOGLE_API_KEY environment variable "
            "or pass it as an argument."
        )
    
    # Create client
    client = genai.Client(api_key=api_key)
    
    # List all models
    models = []
    print("Fetching available Gemini models...\n")
    
    for model in client.models.list():
        model_info = {
            'name': model.name,
            'display_name': getattr(model, 'display_name', model.name),
            'description': getattr(model, 'description', ''),
            'supported_generation_methods': getattr(model, 'supported_generation_methods', []),
            'input_token_limit': getattr(model, 'input_token_limit', None),
            'output_token_limit': getattr(model, 'output_token_limit', None),
            'accessible': None,
            'access_status': 'Not Tested'
        }
        
        # Test model access if requested
        if test_access:
            print(f"Testing access to {model.name}...", end=' ')
            is_accessible, status = test_model_access(client, model.name)
            model_info['accessible'] = is_accessible
            model_info['access_status'] = status
            print(status)
        
        models.append(model_info)
    
    return models


def print_models(models: List[Dict[str, Any]], output_format: str = 'table', show_access: bool = False):
    """
    Print models in specified format.
    
    Args:
        models: List of model information dictionaries.
        output_format: Format to print ('table', 'json', or 'simple').
        show_access: If True, show accessibility status in output.
    """
    if output_format == 'json':
        print(json.dumps(models, indent=2))
    elif output_format == 'simple':
        for model in models:
            access_str = f" [{model['access_status']}]" if show_access else ""
            print(f"{model['name']}{access_str}")
    else:  # table format
        if show_access:
            print(f"{'Model Name':<50} {'Display Name':<30} {'Access Status':<25} {'Methods':<40}")
            print("-" * 145)
        else:
            print(f"{'Model Name':<50} {'Display Name':<30} {'Methods':<40}")
            print("-" * 120)
            
        for model in models:
            methods = ', '.join(model['supported_generation_methods']) if model['supported_generation_methods'] else 'N/A'
            if show_access:
                access_icon = "✓" if model['accessible'] else "✗"
                access_str = f"{access_icon} {model['access_status']}"
                print(f"{model['name']:<50} {model['display_name']:<30} {access_str:<25} {methods:<40}")
            else:
                print(f"{model['name']:<50} {model['display_name']:<30} {methods:<40}")
        
        print(f"\n\nTotal models found: {len(models)}")
        if show_access:
            accessible_count = sum(1 for m in models if m['accessible'])
            print(f"Accessible models: {accessible_count}")
        print()
        
        # Print detailed info for each model
        print("\n" + "="*120)
        print("Detailed Model Information:")
        print("="*120 + "\n")
        
        for model in models:
            print(f"Name: {model['name']}")
            print(f"Display Name: {model['display_name']}")
            print(f"Description: {model['description']}")
            print(f"Supported Methods: {', '.join(model['supported_generation_methods'])}")
            if show_access:
                access_icon = "✓" if model['accessible'] else "✗"
                print(f"Access Status: {access_icon} {model['access_status']}")
            if model['input_token_limit']:
                print(f"Input Token Limit: {model['input_token_limit']:,}")
            if model['output_token_limit']:
                print(f"Output Token Limit: {model['output_token_limit']:,}")
            print("-" * 120)


def main():
    """Main function."""
    import argparse
    
    parser = argparse.ArgumentParser(
        description='List all available Gemini models',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # List models using environment variable GOOGLE_API_KEY
  python list-gemini-model.py
  
  # List models with API key as argument
  python list-gemini-model.py --api-key YOUR_API_KEY
  
  # Output as JSON
  python list-gemini-model.py --format json
  
  # Output simple list of model names
  python list-gemini-model.py --format simple
        """
    )
    
    parser.add_argument(
        '--api-key',
        type=str,
        default="",
        help='Google AI API key (or set GOOGLE_API_KEY environment variable)'
    )
    
    parser.add_argument(
        '--format',
        choices=['table', 'json', 'simple'],
        default='table',
        help='Output format (default: table)'
    )
    
    parser.add_argument(
        '--skip-test-access',
        action='store_true',
        help='Skip testing if each model is accessible with the API key'
    )
    
    args = parser.parse_args()
    
    try:
        models = list_gemini_models(api_key=args.api_key, test_access=not args.skip_test_access)
        print_models(models, output_format=args.format, show_access=not args.skip_test_access)
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == '__main__':
    main()
