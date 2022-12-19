import os
import sys
import base64
import pathlib
import json
from urllib.parse import urlencode
from datetime import datetime
import numpy as np
from scipy import stats


def calc_market_correlation(config, market_folder_path, correlation_config_path):

    market_dict = {}
    table = []
    try:
        # get market dict
        for data in config['data']:
            fileID = data["src"] + "_" + data["symbol"]
            base64_file_name = base64.b64encode(fileID.encode('ascii')).decode('ascii')
            with open(market_folder_path / (base64_file_name + '.json'), 'r', encoding='utf-8') as f:
                market = json.loads(f.read())
            
            market_dict[fileID] = {
                'symbol': market["symbol"],
                'src': market["src"],
                'dataUrl': market["dataUrl"],
                'correlations': {}
            }
        print(market_dict)

        for key in market_dict:
            for correlation_key in market_dict:
                print('calc {key} and {correlation_key} correlation'.format(key=key, correlation_key=correlation_key))
                with open(
                        market_folder_path / (base64.b64encode(key.encode('ascii')).decode('ascii') + '.json'),
                        'r', encoding='utf-8') as f:
                    key_data = json.loads(f.read())
                with open(
                        market_folder_path / (base64.b64encode(correlation_key.encode('ascii')).decode('ascii') + '.json'),
                        'r', encoding='utf-8') as f:
                    correlation_key_data = json.loads(f.read())

                key_data_val = {}
                for d in key_data["data"]:
                    v = d["Close"]
                    if type(v) is str and "%" in v:
                        v = v.replace("%", "")
                    key_data_val[d["Date"]] = v

                correlation_key_data_val = {}
                for d in correlation_key_data["data"]:
                    v = d["Close"]
                    if type(v) is str and "%" in v:
                        v = v.replace("%", "")
                    correlation_key_data_val[d["Date"]] = v

                intersection_key_data_val = {x: key_data_val[x] for x in key_data_val if x in correlation_key_data_val}
                intersection_correlation_key_data_val = {x: correlation_key_data_val[x] for x in intersection_key_data_val}
                
                data1 = np.array(list(intersection_key_data_val.values())).astype(np.float64)
                data2 = np.array(list(intersection_correlation_key_data_val.values())).astype(np.float64)

                if len(data1) > 2 and len(data2) > 2:
                    val, p_value = stats.pearsonr(data1, data2)
                    market_dict[key]['correlations'][market_dict[correlation_key]['symbol']] = {'value': val, 'p_value': p_value}
                else:
                    market_dict[key]['correlations'][market_dict[correlation_key]['symbol']] = {'value': 'NaN',
                                                                                                'p_value': 'NaN'}
            table.append(market_dict[key])

        output = {'update_time': str(datetime.now()), 'table': table}
        with open(correlation_config_path, 'w',
                  encoding='utf-8') as f_it:
            f_it.write(json.dumps(output, separators=(',', ':')))

    except Exception as ex:
        print('Generated an exception: {ex}'.format(ex=ex))
        sys.exit(1)

    print('calc_market_correlation done')

if __name__ == "__main__":
    root = pathlib.Path(__file__).parent.resolve()
    plugin_react_folder_path = root / ".." / ".." / "plugin-react"
    market_config_path = plugin_react_folder_path / "market_config.json"
    market_folder_path = plugin_react_folder_path / "markets"
    correlation_config_path = plugin_react_folder_path / "market-correlation-matrix.json"

    with open(market_config_path, 'r', encoding='utf-8') as f:
        config = json.loads(f.read())
        calc_market_correlation(config, market_folder_path, correlation_config_path)

    print('all task done')

