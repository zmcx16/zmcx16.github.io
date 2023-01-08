import pathlib
import json
import logging
import argparse
import traceback
import copy


def build_template(config, plugin_path):
    try:
        # generate forecast_config
        forecast_config_path = plugin_path / "forecast_config.json"
        with open(forecast_config_path, 'r', encoding='utf-8') as f:
            forecast_config = json.loads(f.read())

        hold_stock_list = config["hold_stock_list"]
        watch_stock_list = config["watch_stock_list"]
        forecast_template = config["forecast_template"]
        symbol_list = list(dict.fromkeys(hold_stock_list + watch_stock_list))
        for symbol in symbol_list:
            forecast_config[symbol] = copy.deepcopy(forecast_template)
            for d in forecast_config[symbol]:
                d["target_data"]["name"] = d["target_data"]["name"].replace("{symbol}", symbol)
                d["target_data"]["file_path"] = d["target_data"]["file_path"].replace("{symbol}", symbol)

        logging.info(forecast_config)
        with open(forecast_config_path, 'w', encoding='utf-8') as f:
            f.write(json.dumps(forecast_config, separators=(',', ':')))

        # generate market_config
        market_config_path = plugin_path / "market_config.json"
        with open(market_config_path, 'r', encoding='utf-8') as f:
            market_config = json.loads(f.read())

        hold_stock_list = config["hold_stock_list"]
        market_template = config["market_template"]
        for symbol in hold_stock_list:
            v = copy.deepcopy(market_template)
            v["symbol"] = v["symbol"].replace("{symbol}", symbol)
            v["api"] = v["api"].replace("{symbol}", symbol)
            market_config["data"].append(v)

        logging.info(market_config)
        with open(market_config_path, 'w', encoding='utf-8') as f:
            f.write(json.dumps(market_config, separators=(',', ':')))

    except Exception:
        logging.error(traceback.format_exc())

    logging.info('build_template done')


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("-l", "-log-level", dest="log_level", default="DEBUG")
    args = parser.parse_args()

    logging.basicConfig(level=args.log_level)

    root = pathlib.Path(__file__).parent.resolve()
    plugin_react_folder_path = root / ".." / ".." / "plugin-react"

    input_path = root / ".." / ".." / 'trade-data.json'
    with open(input_path, 'r', encoding='utf-8') as f:
        public_config = json.loads(f.read())
        build_template(public_config, plugin_react_folder_path)

    logging.info('all task done')
