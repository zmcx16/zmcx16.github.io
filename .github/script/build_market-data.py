import os
import sys
import base64
import pathlib
import json
import requests
from urllib.parse import urlencode
from datetime import datetime


def send_request(url):
    try:
        res = requests.get(url)
        res.raise_for_status()
    except Exception as ex:
        print('Generated an exception: {ex}'.format(ex=ex))
        return -1, ex

    return 0, res.text

def send_post_json(url, req_data):
    try:
        headers = {'content-type': 'application/json'}
        res = requests.post(url, req_data, headers=headers)
        res.raise_for_status()
    except Exception as ex:
        print('Generated an exception: {ex}'.format(ex=ex))
        return -1, ex

    return 0, res.json()

def getMarketData(config, market_folder_path):

    param = {
        'code': os.environ.get("MONITOR_TOKEN_KEY", ""),
        'api': 'get-market'
    }
    encoded_args = urlencode(param)
    query_url = "https://stockminehunterfuncmarket0.azurewebsites.net/api/StockMineHunterFunc" + '?' + encoded_args
    
    try:
        for market_item in config["data"]:
            print('get market: ' + market_item["symbol"])
            ret, resp = send_post_json(query_url, str({"symbol": market_item["symbol"], "src":market_item["src"], "api":market_item["api"]}))
            if ret == 0:
                try:
                    if resp["ret"] != 0:
                        print('server err = {err}, msg = {msg}'.format(err=resp["ret"], msg=resp["err_msg"]))
                    else:
                        data = resp["data"]
                        output = {'update_time': str(datetime.now()), 'symbol': data['symbol'],
                                  'src': data['src'], 'dataUrl': data['dataUrl'], 'data': data['data']}

                        base64_file_name = base64.b64encode(data['id'].encode('ascii')).decode('ascii')
                        with open(market_folder_path / (base64_file_name + '.json'), 'w', encoding='utf-8') as f:
                            f.write(json.dumps(output, separators=(',', ':')))

                except Exception as ex:
                    print('Generated an exception: {ex}, try next target.'.format(ex=ex))
            else:
                print('send_post_json failed: {ret}'.format(ret=ret))
                sys.exit(1)

    except Exception as ex:
        print('Generated an exception: {ex}, try next target.'.format(ex=ex))
        sys.exit(1)

    print('getMarketData done')

if __name__ == "__main__":
    root = pathlib.Path(__file__).parent.resolve()
    plugin_react_folder_path = root / ".." / ".." / "plugin-react"
    market_folder_path = plugin_react_folder_path / 'markets'
    if not os.path.exists(market_folder_path):
        os.makedirs(market_folder_path)
    market_config_path = plugin_react_folder_path / "market_config.json"

    with open(market_config_path, 'r', encoding='utf-8') as f:
        config = json.loads(f.read())
        getMarketData(config, market_folder_path)

    print('all task done')

