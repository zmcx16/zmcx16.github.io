import os
import pathlib
import json
import requests


def send_request(url):
    try:
        res = requests.get(url)
        res.raise_for_status()
    except Exception as exc:
        print('Generated an exception: %s' % exc)
        return -1, exc

    return 0, res.text


if __name__ == "__main__":
    root_path = pathlib.Path(__file__).parent.resolve()
    print(root_path)
