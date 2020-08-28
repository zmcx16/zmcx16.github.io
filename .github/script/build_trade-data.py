import os
import time
import datetime
import pathlib
import json
import requests
from datetime import date, timedelta, datetime
from newsapi import NewsApiClient


def send_post_json(url, req_data):
    try:
        headers = {'content-type': 'application/x-www-form-urlencoded'}
        res = requests.post(url, req_data, headers=headers)
        res.raise_for_status()
    except Exception as ex:
        print('Generated an exception: ex'.format(ex=ex))
        return -1, exc

    return 0, res.json()


if __name__ == "__main__":

    DELAY_TIME_SEC = 60
    SCAN_URL = "https://zmcx16.moe/stock-minehunter/api/task/do-scan"
    NEWS_API_KEY = os.environ.get("NEWS_API_KEY", "")

    script_path = pathlib.Path(__file__).parent.resolve()
    input_path = script_path / '..' / 'trade-data' / 'trade-data.json'
    output_path = script_path / '..' / '..' / 'zmcx16_hobby-trade-data.json'
    output_readable_path = script_path / '..' / '..' / 'zmcx16_hobby-trade-data_readable.json'

    scan_output = {"hold_stock_list": [], "star_stock_list": [], "data": [], "news": {}}

    newsapi = NewsApiClient(api_key=NEWS_API_KEY)

    with open(input_path, 'r', encoding='utf-8') as f:
        data = json.loads(f.read())

        scan_output["hold_stock_list"] = data["hold_stock_list"]
        scan_output["star_stock_list"] = data["star_stock_list"]
        scan_list = data["hold_stock_list"] + data["star_stock_list"]

        # news
        news_latest_days = data["news_config"]["latest_days"]
        news_max_count = data["news_config"]["max_count"]
        news_exclude_domains = data["news_config"]["exclude_domains"]
        news_symbol_keyword = data["news_config"]["symbol_keyword"]

        for symbol in scan_list:
            print("get {symbol} scan output: {now}".format(symbol=symbol, now=datetime.now()))

            scan_list_args = data["tactic_template"].copy()
            for target in scan_list_args:
                target["target"] = [symbol]

            ret, resp = send_post_json(SCAN_URL, "=" + str({"data": scan_list_args}))
            if ret == 0:
                try:
                    if resp["ret"] != 0:
                        print('server err = {err}, msg = {msg}'.format(err=resp["ret"], msg=resp["err_msg"]))
                    else:
                        scan_output["data"] += resp["data"]

                except Exception as ex:
                    print('Generated an exception: {ex}, try next target.'.format(ex=ex))

            # get news
            query = symbol
            if symbol in news_symbol_keyword:
                query= news_symbol_keyword[symbol]

            news = newsapi.get_everything(q=query,
                                            exclude_domains=news_exclude_domains,
                                            from_param=(datetime.now() - timedelta(days=news_latest_days)).strftime("%Y-%m-%d"),
                                            to=date.today().strftime("%Y-%m-%d"),
                                            sort_by='publishedAt')

            if news['status'] == 'ok' and news['totalResults'] > 0:
                scan_output["news"][symbol] = news['articles'][:min(news_max_count, news['totalResults'])]

            time.sleep(DELAY_TIME_SEC)

    if len(scan_output["data"]) > 0 or len(scan_output["news"]) > 0:
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(json.dumps(scan_output, separators=(',', ':')))
        with open(output_readable_path, 'w', encoding='utf-8') as f:
            f.write(json.dumps(scan_output, indent=4, sort_keys=True))

        print("task completed: {now}".format(now=datetime.datetime.now()))

    else:
        print("No scan output data")

