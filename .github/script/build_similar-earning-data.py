import os
import pathlib
import json
import sys
import time
import shutil
import logging
import argparse
import requests
import traceback
import base64
from selenium import webdriver
from selenium.webdriver.firefox.service import Service as FirefoxService
from webdriver_manager.firefox import GeckoDriverManager


DELAY_TIME_SEC = 10
RETRY_SEND_REQUEST = 5
RETRY_FAILED_DELAY = 60

def send_request(url, retry):
    for r in range(retry):
        try:
            headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"}
            res = requests.get(url, headers=headers)
            res.raise_for_status()
        except Exception as ex:
            logging.error(traceback.format_exc())
            logging.info(f'retry = {r}')
            continue
        
        if res.status_code == 200:
            return 0, res.text
        
        time.sleep(RETRY_FAILED_DELAY)

    return -2, "exceed retry cnt"


def get_stock_data(symbol):
    ret, resp = send_request("https://hk.finance.yahoo.com/quote/" + symbol + "?p=" + symbol, RETRY_SEND_REQUEST)
    if ret != 0:
        logging.error('get yahoo data failed')
        exit(-1)

    # logging.info(resp)
    root_app_main = None
    for line in resp.splitlines():
        if "root.App.main" in line:
            temp = line.replace("root.App.main = ", "")
            temp = temp[:len(temp) - 1]
            root_app_main = json.loads(temp)
            break
    if root_app_main is None:
        logging.error('parse yahoo data failed')
        exit(-1)

    return root_app_main


def get_stock_data_by_browser(symbol, retry):
    for r in range(retry):
        try:
            driver.get("https://hk.finance.yahoo.com/quote/" + symbol + "?p=" + symbol)
            time.sleep(DELAY_TIME_SEC)
            root_app_main = driver.execute_script("return App.main")
            stores = root_app_main['context']['dispatcher']['stores']
            if "QuoteSummaryStore" not in stores:
                logging.warning('may occur encrypted data, retry it')
            else:
                return root_app_main
        except Exception as ex:
            logging.error(traceback.format_exc())
            logging.info(f'retry = {r}')

        time.sleep(RETRY_FAILED_DELAY)

    sys.exit(1)


if __name__ == "__main__":

    logging.basicConfig(level=logging.DEBUG)

    options = webdriver.FirefoxOptions()
    options.headless = True
    driver = webdriver.Firefox(service=FirefoxService(GeckoDriverManager().install()), options=options)

    root = pathlib.Path(__file__).parent.resolve()
    earnings_data_path = root / '..' / '..' / 'earnings_data.json'
    earnings_data_readable_path = root / '..' / '..' / 'earnings_data_readable.json'
    input_path = root / ".." / ".." / 'trade-data.json'
    with open(input_path, 'r', encoding='utf-8') as f:
        config = json.loads(f.read())

    output = {}
    for symbol in config["hold_stock_list"]:
        logging.info(f'get {symbol} data')
        data = get_stock_data_by_browser(symbol, RETRY_SEND_REQUEST)

        earningsDate = []
        stores = data['context']['dispatcher']['stores']
        if "QuoteSummaryStore" not in stores:
            logging.warning('may occur encrypted data, skip going')
            exit(-3)

        for d in stores["QuoteSummaryStore"]['calendarEvents']['earnings']['earningsDate']:
            earningsDate.append(d['fmt'])

        if len(earningsDate) > 0:
            output[symbol] = {'earningsDate':  earningsDate, "similar": "-"}

        for similar in stores['RecommendationStore']['recommendedSimilarSymbols'][symbol]:
            logging.info(f'get similar {similar["symbol"]} for {symbol}')
            similar_data = get_stock_data_by_browser(similar["symbol"], RETRY_SEND_REQUEST)
            similar_stores = similar_data['context']['dispatcher']['stores']
            if "QuoteSummaryStore" not in similar_stores:
                logging.warning('may occur encrypted data, skip going')
                exit(-3)

            earningsDate = []
            for d in similar_stores['QuoteSummaryStore']['calendarEvents']['earnings']['earningsDate']:
                earningsDate.append(d['fmt'])
            if len(earningsDate) > 0 and similar["symbol"] not in output:
                output[similar["symbol"]] = {'earningsDate': earningsDate, "similar": symbol}

    logging.info(f'output = {output}')
    with open(earnings_data_path, 'w', encoding='utf-8') as f:
        f.write(json.dumps(output, separators=(',', ':')))
    with open(earnings_data_readable_path, 'w', encoding='utf-8') as f:
        f.write(json.dumps(output, indent=4, sort_keys=True))
    logging.info('all task done')
