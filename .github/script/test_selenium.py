import logging

from selenium import webdriver
from selenium.webdriver.firefox.service import Service as FirefoxService
from webdriver_manager.firefox import GeckoDriverManager


driver = webdriver.Firefox(service=FirefoxService(GeckoDriverManager().install()))

driver.get('https://hk.finance.yahoo.com/quote/BIO?p=BIO')
logging.info(f'title = {driver.title}')
