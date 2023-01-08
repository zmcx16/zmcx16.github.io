const MonitorConfig = {
  monitor_data: [
    {
      id: 'all-stock-change-order-200',
      name: 'All Stock, Change Order 200',
      monitor_url: 'https://finviz.com/screener.ashx?v=152&o=-change&c=1,4,6,7,8,10,11,12,14,17,18,19,20,21,22,23,26,27,28,29,30,31,32,33,34,35,36,37,38,42,43,44,45,46,47,52,54,55,56,57,58,62,63,65,66,67,69',
      max_count: 200
    },
    {
      id: 'pb2-tpc-change-order-200',
      name: 'P/B < 2 & Target Price > Current, Change Order 200',
      monitor_url: 'https://finviz.com/screener.ashx?v=151&f=fa_pb_u2,targetprice_above&ft=4&o=-change&c=1,4,6,7,8,10,11,12,14,17,18,19,20,21,22,23,26,27,28,29,30,31,32,33,34,35,36,37,38,42,43,44,45,46,47,52,54,55,56,57,58,62,63,65,66,67,69',
      max_count: 200
    },
    {
      id: 'all-industry-change-order',
      name: 'All Industry, Change Order',
      monitor_url: 'https://finviz.com/groups.ashx?g=industry&v=152&o=-change&c=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26',
      max_count: 200
    },
  ],
  header_order: [
    'Ticker',
    'Name',
    'Price',
    'Change',
    'Target Price',
    'P/E',
    'P/B',
    'Perf Week',
    'Perf Month',
    'Perf Quart',
    'Perf Half',
    'Perf Year',
    'Perf YTD',
    'Insider Own',
    'Insider Trans',
    'Inst Own',
    'Inst Trans',
    '50D High',
    '50D Low',
    '52W High',
    '52W Low',
    'Industry',
    'Market Cap',
    'P/S',
    'P/C',
    'Dividend',
    'EPS this Y',
    'EPS next Y',
    'EPS past 5Y',
    'EPS next 5Y',
    'Sales past 5Y',
    'EPS Q/Q',
    'Sales Q/Q',
    'Float Short',
    'Short Ratio',
    'ROA',
    'ROE',
    'ROI',
    'Curr R',
    'Quick R',
    'LTDebt/Eq',
    'Debt/Eq',
    'SMA20',
    'SMA200',
    'Recom',
    'Avg Volume',
    'Volume'
  ]
}

const MarketConfig = {
  data:[
    {
      symbol: "BIO",
      src: "marketwatch",
      api: "investing/stock/BIO"
    },
	{
      symbol: "ASML",
      src: "marketwatch",
      api: "investing/stock/ASML"
    },
	{
      symbol: "DIS",
      src: "marketwatch",
      api: "investing/stock/DIS"
    },
	{
      symbol: "NFLX",
      src: "marketwatch",
      api: "investing/stock/NFLX"
    },
	{
      symbol: "NKE",
      src: "marketwatch",
      api: "investing/stock/NKE"
    },
	{
      symbol: "INTC",
      src: "marketwatch",
      api: "investing/stock/INTC"
    },
	{
      symbol: "HIMX",
      src: "marketwatch",
      api: "investing/stock/HIMX"
    },
	{
      symbol: "C",
      src: "marketwatch",
      api: "investing/stock/C"
    },
    {
      symbol: "DAC",
      src: "marketwatch",
      api: "investing/stock/DAC"
    },
    {
      symbol: "EDRY",
      src: "marketwatch",
      api: "investing/stock/EDRY"
    },
    {
      symbol: "PYPL",
      src: "marketwatch",
      api: "investing/stock/PYPL"
    },	
	{
      symbol: "ZIM",
      src: "marketwatch",
      api: "investing/stock/ZIM"
    },
	{
      symbol: "ILPT",
      src: "marketwatch",
      api: "investing/stock/ILPT"
    },
    {
      symbol: "AMZN",
      src: "marketwatch",
      api: "investing/stock/AMZN"
    },
    {
      symbol: "SID",
      src: "marketwatch",
      api: "investing/stock/SID"
    },
    {
      symbol: "TX",
      src: "marketwatch",
      api: "investing/stock/TX"
    },
	{
      symbol: "STC",
      src: "marketwatch",
      api: "investing/stock/STC"
    },
    {
      symbol: "HRN00",
      src: "marketwatch",
      api: "investing/future/hrn00"
    },
    {
      symbol: "STEEL",
      src: "marketwatch",
      api: "investing/index/steel?countryCode=XX"
    },
    {
      symbol: "FBX",
      src: "freightos",
      api: "api/lane/FBX?isDaily=true"
    },
    {
      symbol: "DJUSMT",
      src: "marketwatch",
      api: "investing/index/djusmt?countrycode=xx"
    },
    {
      symbol: "NBI",
      src: "marketwatch",
      api: "investing/index/nbi"
    },
    {
      symbol: "CL.1",
      src: "marketwatch",
      api: "investing/future/cl.1"
    },
    {
      symbol: "U.S. Crude Oil Inventories",
      src: "investing",
      api: "https://sbcharts.investing.com/events_charts/us/75.json;https://www.investing.com/economic-calendar/eia-crude-oil-inventories-75"
    },
    {
      symbol: "TMUBMUSD10Y",
      src: "marketwatch",
      api: "investing/bond/tmubmusd10y?countrycode=bx"
    },
	{
      symbol: "SOX",
      src: "marketwatch",
      api: "investing/index/sox"
    },
    {
      symbol: "COMP",
      src: "marketwatch",
      api: "investing/index/comp"
    },
    {
      symbol: "DJIA",
      src: "marketwatch",
      api: "investing/index/djia"
    },
    {
      symbol: "SPY",
      src: "marketwatch",
      api: "investing/fund/spy"
    },
    {
      symbol: "VTI",
      src: "marketwatch",
      api: "investing/fund/vti"
    }
  ]
}

const ForecastConfig = {
// stocks will be auto generated
// watch market
  freightos_FBX: [
    {
      type: "market_fbprophet_empty",
      algorithm: "fbprophet",
      args: {
        using_regressors: [],
        forecast_periods: 30
      },
      target_data: {
        name: "freightos_FBX",
        file_path: "markets/historical-quotes/freightos_FBX.json",
        type: "market"
      },
      feature_data: [

      ]
    }
  ],
  marketwatch_CL_1: [
    {
      type: "market_fbprophet_empty",
      algorithm: "fbprophet",
      args: {
        using_regressors: [],
        forecast_periods: 30
      },
      target_data: {
        name: "marketwatch_CL_1",
        file_path: "markets/historical-quotes/marketwatch_CL_1.json",
        type: "market"
      },
      feature_data: [

      ]
    }
  ],
  marketwatch_HRN00: [
    {
      type: "market_fbprophet_empty",
      algorithm: "fbprophet",
      args: {
        using_regressors: [],
        forecast_periods: 30
      },
      target_data: {
        name: "marketwatch_HRN00",
        file_path: "markets/historical-quotes/marketwatch_HRN00.json",
        type: "market"
      },
      feature_data: [

      ]
    }
  ],
  marketwatch_NG00: [
    {
      type: "market_fbprophet_empty",
      algorithm: "fbprophet",
      args: {
        using_regressors: [],
        forecast_periods: 30
      },
      target_data: {
        name: "marketwatch_NG00",
        file_path: "markets/historical-quotes/marketwatch_NG00.json",
        type: "market"
      },
      feature_data: [

      ]
    }
  ],
}

module.exports = {
  getMonitorConfig: function () {
    return MonitorConfig
  },
  getMarketConfig: function () {
    return MarketConfig
  },
  getForecastConfig: function () {
    return ForecastConfig
  },
}
