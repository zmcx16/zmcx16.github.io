export const MonitorURL = 'https://stockminehunterfuncmonitor0.azurewebsites.net'
export const NornFinanceAPIServerDomain = "norn-finance.zmcx16.moe"

// cookie
export const COOKIE_KEY_API_TOKEN = 'api_token'
export const COOKIE_KEY_REFRESH_TIME = 'refresh_time'
export const COOKIE_KEY_SECRET = 'secret'
export const COOKIE_KEY_OPTIONS_FILTER = 'options_filter'

// const
export const rollingCorrelationWindowDays = 90

// forecast
export const DAF_Def = [
  {
    name: 'stock_fbprophet_empty',
    display_name: 'Stock-FBProphet-Empty'
  },
  {
    name: 'stock_fbprophet_ohlv',
    display_name: 'Stock-FBProphet-OHLV'
  },
  {
    name: 'stock_fbprophet_v',
    display_name: 'Stock-FBProphet-Volume'
  },
  {
    name: 'stock_fbprophet_empty_CL_1_NG00',
    display_name: 'Stock-FBProphet-Empty-CL.1&NG00'
  },
  {
    name: 'stock_fbprophet_empty_GC00',
    display_name: 'Stock-FBProphet-Empty-GC00'
  },
  {
    name: 'stock_fbprophet_empty_TIOc1_HRN00',
    display_name: 'Stock-FBProphet-Empty-TIOc1&HRN00'
  },
  {
    name: 'stock_fbprophet_empty_bdi',
    display_name: 'Stock-FBProphet-Empty-BDI'
  },
  {
    name: 'stock_fbprophet_empty_bdi_fbx',
    display_name: 'Stock-FBProphet-Empty-BDI&FBX'
  },
  {
    name: 'market_fbprophet_empty',
    display_name: 'Market-FBProphet-Empty'
  },
]

// option
export const Option_Config = "/plugin-react/option-valuation/config.json"
export const OptionPCR_Stat = "/plugin-react/option-pcr.json"
export const ExDividend_Path = "/plugin-react/option-valuation/star/ex_dividend_date_list.json"
export const StockData_Path = "/stock-data/stat.json"
export const Options_Def = [
  {
    name: 'star_all_list',
    display_name: 'Option Star (All) List',
    local_path: '/plugin-react/option-valuation/star/output.json',
  },
  {
    name: 'star_hold_list',
    display_name: 'Option Star (Hold) List',
    local_path: '/plugin-react/option-valuation/star/output.json',
  },
  {
    name: 'hold_list',
    display_name: 'Option Hold List',
    local_path: '/plugin-react/option-valuation/hold/output.json',
  },
]