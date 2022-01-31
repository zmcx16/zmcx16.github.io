import os
import pathlib
import json
import shutil
import logging
import traceback


def get_option_data(config, option_folder_path):
    try:
        hold_list = config["hold_stock_list"]
        hold_list_str = ",".join(hold_list)
        os.system("python ./.github/script/Norn-Finance-API-Server/option_cron_job.py -i " + hold_list_str)
        shutil.copytree('./.github/script/Norn-Finance-API-Server/output', option_folder_path, dirs_exist_ok=True)

    except Exception:
        logging.error(traceback.format_exc())

    logging.info('get_option_data done')


if __name__ == "__main__":
    logging.basicConfig(level=logging.DEBUG)
    root = pathlib.Path(__file__).parent.resolve()
    plugin_react_folder_path = root / ".." / ".." / "plugin-react"

    input_path = root / ".." / ".." / 'trade-data.json'
    option_folder_path = plugin_react_folder_path / 'option-valuation'
    if not os.path.exists(option_folder_path):
        os.makedirs(option_folder_path)

    with open(input_path, 'r', encoding='utf-8') as f:
        config = json.loads(f.read())
        get_option_data(config, option_folder_path)

    logging.info('all task done')

