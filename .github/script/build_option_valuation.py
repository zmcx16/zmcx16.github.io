import os
import pathlib
import json
import shutil
import logging
import argparse
import requests
import traceback
import base64
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad,unpad
from Crypto.Random import get_random_bytes


private_config_url = os.environ.get("CONFIG_URL", "")
encry_pass = os.environ.get("ENCRY_PASS", "")


def encrypt(raw, key):
    raw = pad(raw.encode(), 16)
    cipher = AES.new(key.encode('utf-8'), AES.MODE_ECB)
    return base64.b64encode(cipher.encrypt(raw))


def decrypt(enc, key):
    enc = base64.b64decode(enc)
    cipher = AES.new(key.encode('utf-8'), AES.MODE_ECB)
    return unpad(cipher.decrypt(enc), 16)


def encry_all_files(folder_path):
    for cur, folders, files in os.walk(folder_path):
        for file in files:
            file_path = os.path.join(cur, file)
            with open(file_path, "r+") as f:
                output = encrypt(f.read(), encry_pass)
                f.seek(0)
                f.write(output.decode("utf-8", "ignore"))
                f.truncate()


def send_request(url):
    try:
        res = requests.get(url)
        res.raise_for_status()
    except Exception as ex:
        logging.error(traceback.format_exc())
        return -1, ex

    return 0, res.text


def get_option_data(public_config, private_config, option_folder_path, log_level, data_source, calc_kelly_iv):
    try:
        calc_kelly_iv_param = ""
        if calc_kelly_iv:
            calc_kelly_iv_param = " -c"

        nfas_output_path = './.github/script/Norn-Finance-API-Server/output'

        option_config = {
            "hold_stock_list": public_config["hold_stock_list"],
            "watch_stock_list": public_config["watch_stock_list"],
            "hold_option_list": public_config["hold_option_list"],
            "star_option_list": private_config["star_option_list"]
        }

        option_star_folder_path = option_folder_path / 'star'
        if not os.path.exists(option_star_folder_path):
            os.makedirs(option_star_folder_path)

        option_hold_folder_path = option_folder_path / 'hold'
        if not os.path.exists(option_hold_folder_path):
            os.makedirs(option_hold_folder_path)

        hold_stock_list = option_config["hold_stock_list"]
        star_options = option_config["star_option_list"]
        watch_stock_list = option_config["watch_stock_list"]
        star_list_str = ",".join(list(dict.fromkeys(hold_stock_list+star_options+watch_stock_list)))
        os.system("python ./.github/script/Norn-Finance-API-Server/option_cron_job.py -l " + log_level +
                  " -d " + data_source + " -i " + star_list_str + calc_kelly_iv_param)
        shutil.copytree(nfas_output_path, option_star_folder_path, dirs_exist_ok=True)

        shutil.rmtree('./.github/script/Norn-Finance-API-Server/output')

        hold_options = option_config["hold_option_list"]
        specific_contracts = []
        for sc in hold_options:
            specific_contracts.append(sc["symbol"] + "_" + sc["type"] + "_" + sc["expiry"] + "_" + str(sc["strike"]))

        os.system("python ./.github/script/Norn-Finance-API-Server/option_cron_job.py -l " + log_level +
                  " -d " + data_source + " -s " + ",".join(specific_contracts) + calc_kelly_iv_param)
        shutil.copytree(nfas_output_path, option_hold_folder_path, dirs_exist_ok=True)

        with open(option_folder_path / 'config.json', 'w', encoding='utf-8') as f:
            f.write(json.dumps(option_config, separators=(',', ':')))

        encry_all_files(option_folder_path)

    except Exception:
        logging.error(traceback.format_exc())

    logging.info('get_option_data done')


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("-l", "-log-level", dest="log_level", default="DEBUG")
    parser.add_argument("-d", "-data-source", dest="data_source", default="marketwatch")
    parser.add_argument("-c", "-calc-kelly-iv", dest="calc_kelly_iv", action="store_true")
    args = parser.parse_args()

    logging.basicConfig(level=args.log_level)

    root = pathlib.Path(__file__).parent.resolve()
    plugin_react_folder_path = root / ".." / ".." / "plugin-react"

    input_path = root / ".." / ".." / 'trade-data.json'
    with open(input_path, 'r', encoding='utf-8') as f:
        public_config = json.loads(f.read())
        ret, resp = send_request(private_config_url)
        if ret != 0:
            logging.error('get private config failed')
            exit(-1)

        private_config = json.loads(resp)
        get_option_data(public_config, private_config, plugin_react_folder_path / 'option-valuation', args.log_level,
                        args.data_source, args.calc_kelly_iv)

    logging.info('all task done')
