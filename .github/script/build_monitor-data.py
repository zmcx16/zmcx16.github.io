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
    except Exception as exc:
        print('Generated an exception: ex'.format(ex=ex))
        return -1, exc

    return 0, res.text

def send_post_json(url, req_data):
    try:
        headers = {'content-type': 'application/json'}
        res = requests.post(url, req_data, headers=headers)
        res.raise_for_status()
    except Exception as ex:
        print('Generated an exception: ex'.format(ex=ex))
        return -1, exc

    return 0, res.json()

def getMonitorData(config, monitor_data_path):

    param = {
        'code': os.environ.get("MONITOR_TOKEN_KEY", ""),
        'api': 'get-monitor-data'
    }
    encoded_args = urlencode(param)
    query_url = "https://stockminehunterfuncmonitor0.azurewebsites.net/api/StockMineHunterFunc" + '?' + encoded_args
    
    monitor_ouput = []

    try:
        for monitor_item in config["monitor_data"]:
            ret, resp = send_post_json(query_url, str({"monitor_url": monitor_item["monitor_url"], "max_count":monitor_item["max_count"]}))
            if ret == 0:
                try:
                    if resp["ret"] != 0:
                        print('server err = {err}, msg = {msg}'.format(err=resp["ret"], msg=resp["err_msg"]))
                    else:
                        output = {"name":  monitor_item["name"], "data": resp["data"]}
                        monitor_ouput.append(output)

                except Exception as ex:
                    print('Generated an exception: {ex}, try next target.'.format(ex=ex))
            else:
                print('send_post_json failed: {ret}'.format(ret=ret))
                sys.exit(1)
        
        with open((monitor_data_path), 'w', encoding='utf-8') as f:
            print(monitor_data_path)
            f.write(json.dumps(monitor_ouput, separators=(',', ':')))

        print('get monitor ' + monitor_item["name"] + ' done')

    except Exception as ex:
        print('Generated an exception: {ex}, try next target.'.format(ex=ex))
        sys.exit(1)

    print('getMonitorData done')

if __name__ == "__main__":
    root = pathlib.Path(__file__).parent.resolve()
    plugin_react_folder_path = root / ".." / ".." / "plugin-react"
    monitor_config_path = plugin_react_folder_path / "monitor_config.json"
    monitor_data_path = plugin_react_folder_path / "monitor_data.json"

    with open(monitor_config_path, 'r', encoding='utf-8') as f:
        config = json.loads(f.read())
        getMonitorData(config, monitor_data_path)

    print('all task done')

