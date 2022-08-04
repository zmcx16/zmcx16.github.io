import os
import pathlib
import json
import shutil
import logging
import argparse
import traceback


def get_option_data(config, option_star_folder_path, option_hold_folder_path, log_level):
    try:
        hold_stock_list = config["hold_stock_list"]
        star_options = config["star_option_list"]
        star_list_str = ",".join(hold_stock_list+star_options)
        # os.system("python ./.github/script/Norn-Finance-API-Server/option_cron_job.py -l " + log_level + " -i " + star_list_str)
        out = os.popen("python ./.github/script/Norn-Finance-API-Server/option_cron_job.py -l " + log_level + " -i " + star_list_str).read()
        logging.info(out)

        shutil.copytree('./.github/script/Norn-Finance-API-Server/output', option_star_folder_path, dirs_exist_ok=True)

        shutil.rmtree('./.github/script/Norn-Finance-API-Server/output')

        hold_options = config["hold_option_list"]
        specific_contracts = []
        for sc in hold_options:
            specific_contracts.append(sc["symbol"] + "_" + sc["type"] + "_" + sc["expiry"] + "_" + str(sc["strike"]))

        # os.system("python ./.github/script/Norn-Finance-API-Server/option_cron_job.py -l " + log_level + " -s " + ",".join(specific_contracts))
        out = os.popen("python ./.github/script/Norn-Finance-API-Server/option_cron_job.py -l " + log_level + " -s " + ",".join(specific_contracts))
        logging.info(out)
        shutil.copytree('./.github/script/Norn-Finance-API-Server/output', option_hold_folder_path, dirs_exist_ok=True)

    except Exception:
        logging.error(traceback.format_exc())

    logging.info('get_option_data done')


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("-l", "-log-level", dest="log_level", default="DEBUG")
    args = parser.parse_args()

    logging.basicConfig(level=args.log_level)

    root = pathlib.Path(__file__).parent.resolve()
    plugin_react_folder_path = root / ".." / ".." / "plugin-react"

    input_path = root / ".." / ".." / 'trade-data.json'
    option_star_folder_path = plugin_react_folder_path / 'option-valuation' / 'star'
    if not os.path.exists(option_star_folder_path):
        os.makedirs(option_star_folder_path)

    option_hold_folder_path = plugin_react_folder_path / 'option-valuation' / 'hold'
    if not os.path.exists(option_hold_folder_path):
        os.makedirs(option_hold_folder_path)

    with open(input_path, 'r', encoding='utf-8') as f:
        config = json.loads(f.read())
        get_option_data(config, option_star_folder_path, option_hold_folder_path, args.log_level)

    logging.info('all task done')

