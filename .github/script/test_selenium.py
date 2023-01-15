import logging

from selenium import webdriver
from selenium.webdriver.firefox.service import Service as FirefoxService
from webdriver_manager.firefox import GeckoDriverManager


options = webdriver.FirefoxOptions()
options.headless = True
driver = webdriver.Firefox(service=FirefoxService(GeckoDriverManager().install()), options=options)

driver.get('https://hk.finance.yahoo.com/quote/BIO?p=BIO')
logging.info(f'title = {driver.title}')
