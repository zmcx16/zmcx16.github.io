import React, { useState, useEffect, useRef } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import SearchIcon from '@mui/icons-material/Search'
import IconButton from '@mui/material/IconButton'
import BarChartSharpIcon from '@mui/icons-material/BarChartSharp'
import { blue } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/styles'
import Link from '@mui/material/Link'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import shortid from 'shortid'
import useFetch from 'use-http'
import moment from 'moment'
import Cookies from 'universal-cookie'

import DefaultDataGridTable from '../defaultDataGridTable'
import LinearProgressWithLabel from '../linearProgressWithLabel'
import { NornFinanceAPIServerDomain, Options_Def, Option_Config, ExDividend_Path, COOKIE_KEY_SECRET } from '../../common/def'
import { getRedLevel, getBlueLevel, workdayCount, decryptECB } from '../../common/utils'
import { useInterval, GetDataByFetchObj, SymbolNameField, PureFieldWithValueCheck, PercentField, ColorPercentField, ColorPosGreenNegRedField, NameWithLinkField } from '../../common/reactUtils'
import ModalWindow from '../modalWindow'
import MonteCarloChart from '../monteCarloChart'

import commonStyle from '../common.module.scss'
import optionsStyle from './options.module.scss'

const cookies = new Cookies()
const secret = cookies.get(COOKIE_KEY_SECRET)

const FetchNornFinanceAPIServer = ({FetchNornFinanceAPIServerRef}) => {
  const useFetchNornFinanceAPIServer = useFetch("https://" + NornFinanceAPIServerDomain, { cachePolicy: 'no-cache' })
  FetchNornFinanceAPIServerRef.current.server = useFetchNornFinanceAPIServer
  return <></>
}

function buildQuoteValuationAPI(symbol, specific_contract_args) {
  return specific_contract_args != "" ? 
  "/ws/option/quote-valuation?symbol=" + symbol + "&max_next_days=252&min_volume=0&last_trade_days=252&calc_kelly_iv=true&specific_contract=" + specific_contract_args : 
  "/ws/option/quote-valuation?symbol=" + symbol + "&calc_kelly_iv=true&only_otm=true"
}

const SyncData = ({ OptionsRef, ControlPannelRef, SyncDataRef}) => {
  const [ws, setWs] = useState(null)

  const queryDataRef = useRef({
    apiArgs: [],
    now: 0,
    data: [],
  })

  const syncData = (apiArgs) => {
    if (apiArgs.length > 0){
      queryDataRef.current.apiArgs = apiArgs
    }
    if (queryDataRef.current.apiArgs.length == 0) {
      console.error("No apiArgs data")
      return
    }

    let args = queryDataRef.current.apiArgs[queryDataRef.current.now]
    let query_string = buildQuoteValuationAPI(args.symbol, args.specific_contract_args)
    setWs(new WebSocket("wss://" + NornFinanceAPIServerDomain + query_string))
    let val = queryDataRef.current.now * 100 / queryDataRef.current.apiArgs.length
    let text = `${Math.round(val)}% - Querying ${args.symbol} (${queryDataRef.current.now + 1}/${queryDataRef.current.apiArgs.length})`
    ControlPannelRef.current.updateProgress(val, text)
  }

  SyncDataRef.current = {
    syncData: syncData,
  }

  useInterval(() => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send("") // heartbeat
      console.log("heartbeat")
    } else if (queryDataRef.current.now < queryDataRef.current.apiArgs.length) {
      console.warn("unexpected disconnected, do syncData again")
      syncData([])
    }
  }, ws ? 3000 : null)

  useEffect(() => {
    if (ws) {
      ws.onopen = () => {
        console.log('WebSocket Connected')
      }
      ws.onmessage = (e) => {
        const message = JSON.parse(e.data)
        console.log(message)
        queryDataRef.current.data.push(message)
        queryDataRef.current.now += 1
        if (queryDataRef.current.apiArgs.length !== 0){
          if (queryDataRef.current.now >= queryDataRef.current.apiArgs.length) {
            OptionsRef.current.renderTable(queryDataRef.current.data)
            queryDataRef.current.now = 0
            queryDataRef.current.data = []
            setWs(null)
            ControlPannelRef.current.updateProgress(100, `100%`)
          } else {
            let args = queryDataRef.current.apiArgs[queryDataRef.current.now]
            let query_string = buildQuoteValuationAPI(args.symbol, args.specific_contract_args)
            setWs(new WebSocket("wss://" + NornFinanceAPIServerDomain + query_string))
            let val = queryDataRef.current.now * 100 / queryDataRef.current.apiArgs.length
            let text = `${Math.round(val)}% - Querying ${args.symbol} (${queryDataRef.current.now+1}/${queryDataRef.current.apiArgs.length})`
            ControlPannelRef.current.updateProgress(val, text)
          }
        }
      }
    }
    return () => {
    }
  }, [ws])
  return <></>
}

const ControlPannel = ({ selectArg, SyncDataRef, modalWindowRef, ControlPannelRef }) => {

  const [progress, setProgress] = useState({val:0, text:'0%'});
  const fetchOptionsData = useFetch({ cachePolicy: 'no-cache' })

  const refreshQueryOptionsData = (argValue) => {
    Promise.all([
      GetDataByFetchObj(Option_Config, fetchOptionsData),
    ]).then((allResponses) => {
      if (allResponses.length === 1 && allResponses[0] !== null) {
        if (!secret) {
          console.error("Verify Authentication Failed, this page is private use only")
          modalWindowRef.current.popModalWindow(<div>Verify Authentication Failed, this page is private use only</div>)   
          return     
        }
        let trade_data = JSON.parse(decryptECB(allResponses[0], secret))
        console.log(trade_data)
        let apiArgs = []
        if (argValue==0) {
          let symbols = trade_data['hold_stock_list'].concat(trade_data['star_option_list'])
          symbols.forEach((symbol) => {
            apiArgs.push({"symbol": symbol, "specific_contract_args": ""})
          })
        } else {
          trade_data['hold_option_list'].forEach((data) => {
            apiArgs.push({"symbol": data.symbol, "specific_contract_args": data.type + "_" + data.expiry + "_" + data.strike})
          })
        }
        SyncDataRef.current.syncData(apiArgs)
      } else {
        console.error("refreshQueryOptionsData some data failed")
        modalWindowRef.current.popModalWindow(<div>Get some data failed...</div>)
      }
    }).catch(() => {
      console.error("refreshQueryOptionsData failed")
      modalWindowRef.current.popModalWindow(<div>Get data failed...</div>)
    })
  }

  ControlPannelRef.current = {
    updateProgress: (val, text) => {
      setProgress({val:val, text:text})
    },
  }

  return (
    <div className={optionsStyle.queryPannel} >
      <Grid container spacing={2} alignItems="center">
        <Grid item md={10} xs={7} >
          <LinearProgressWithLabel progress={progress}/>
        </Grid>
        <Grid item md={2} xs={5}>
          <Box display="flex" justifyContent="flex-end">
            <ThemeProvider theme={createTheme({ palette: { primary: blue } })}>
              <Button className={optionsStyle.queryBtn} variant="contained" color="primary" startIcon={<SearchIcon />} onClick={() => {
                refreshQueryOptionsData(selectArg)
              }}>{'Query Now'}</Button>
            </ThemeProvider>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

const Options = () => {

  const modalWindowRef = useRef({
    popModalWindow: null,
    popPureModal: null,
  })
    
  const FetchNornFinanceAPIServerRef = useRef({
    server: null
  })

  const SyncDataRef = useRef({
    syncData: null,
  })

  const ControlPannelRef = useRef({
    updateProgress: null
  })

  const tableColList = {
    Symbol: { hide: false, text: 'Symbol' },
    StockPrice: { hide: false, text: 'Price (Stock)' },
    ExpiryDate: { hide: false, text: 'Expiry' },
    Strike: { hide: false, text: 'Strike' },
    LastPrice: { hide: false, text: 'Last Price' },
    AvgEWMA: { hide: false, text: 'Valuation (Avg)' },
    PriceBias: { hide: false, text: 'Bias (Price)', description: '| Last Price - Valuation (Avg) | / Last Price' },
    VolBias: { hide: false, text: 'Bias (Vol.)' },
    PriceStrikeRatio: { hide: false, text: 'P/S (%)', description: 'Last Price / Strike' },
    PriceStrikeYearRatio: { hide: false, text: 'P/S (Y%)', description: 'Last Price / Strike (Year)' },
    DistanceRatio: { hide: false, text: 'Dist (%)', description: '| Price (Stock) - Strike | / Strike' },
    KellyCriterion_buy: { hide: true, text: 'Kelly (Buy)', description: 'Kelly Criterion' },
    KellyCriterion_sell: { hide: true, text: 'Kelly (Sell)', description: 'Kelly Criterion' },
    KellyCriterion_MU_0_buy: { hide: false, text: 'Kelly (Buy, MU0)', description: 'Kelly Criterion, MU=0' },
    KellyCriterion_MU_0_sell: { hide: false, text: 'Kelly (Sell, MU0)', description: 'Kelly Criterion, MU=0' },
    KellyCriterion_IV_buy: { hide: false, text: 'Kelly (Buy, IV)', description: 'Kelly Criterion (IV)' },
    KellyCriterion_IV_sell: { hide: false, text: 'Kelly (Sell, IV)', description: 'Kelly Criterion (IV)' },
    EarningDate: { hide: false, text: 'Earning Date' },
    ExDividendDate: { hide: false, text: 'Ex-Dividend Date' }, 
    ExerciseProbability: { hide: false, text: 'Exercise Probability' }, 
    Delta: { hide: false, text: 'δ (Delta)' },
    Gamma: { hide: false, text: 'γ (Gamma)' },
    Rho: { hide: false, text: 'ρ (Rho)' },
    Theta: { hide: false, text: 'θ (Theta)' },
    Vega: { hide: false, text: 'ν (Vega)' },
    LastTradeDate: { hide: false, text: 'Last Trade Date' },
    Bid: { hide: false, text: 'Bid' },
    Ask: { hide: false, text: 'Ask' },
    Change: { hide: true, text: 'Change' },
    PercentChange: { hide: false, text: 'Change (%)' },
    Volume: { hide: false, text: 'Volume' },
    OpenInterest: { hide: false, text: 'Open Interest' },
    ImpliedVolatility: { hide: false, text: 'Implied Volatility' },
    EWMAHisVol: { hide: false, text: 'EWMA Historical Volatility' },
    BSM_EWMAHisVol: { hide: false, text: 'Black Scholes Merton' },
    MC_EWMAHisVol: { hide: false, text: 'Monte Carlo' },
    BT_EWMAHisVol: { hide: false, text: 'Binomial Tree' },
    MCChart: { hide: false, text: 'MC Chart' },
  }

  const genTableColTemplate = () => {
    return [
      SymbolNameField('symbol', 'Symbol', 115, 'symbol' in hideColState ? hideColState['symbol'] : false),
      PureFieldWithValueCheck("stockPrice", tableColList.StockPrice.text, 125, 2, "stockPrice" in hideColState ? hideColState["stockPrice"] : tableColList['StockPrice'].hide),
      {
        field: 'expiryDate',
        headerName: tableColList.ExpiryDate.text,
        width: 120,
        type: 'date',
        renderCell: (params) => (
          <span>{moment(params.row['expiryDate']).format('YYYY-MM-DD')}</span>
        ),
        hide: 'expiryDate' in hideColState ? hideColState['expiryDate'] : tableColList['ExpiryDate'].hide
      },
      PureFieldWithValueCheck("strike", tableColList.Strike.text, 110, 2, "strike" in hideColState ? hideColState["strike"] : tableColList['Strike'].hide),
      PureFieldWithValueCheck("lastPrice", tableColList.LastPrice.text, 140, 2, "lastPrice" in hideColState ? hideColState["lastPrice"] : tableColList['LastPrice'].hide),
      PureFieldWithValueCheck("avgEWMA", tableColList.AvgEWMA.text, 150, 2, "avgEWMA" in hideColState ? hideColState["avgEWMA"] : tableColList['AvgEWMA'].hide),
      {
        field: "priceBias",
        headerName: tableColList.PriceBias.text,
        width: 120,
        type: 'number',
        description: tableColList.PriceBias.description,
        renderCell: (params) => (
          params.value === "-" || params.value === -Number.MAX_VALUE || params.value === Number.MAX_VALUE || params.value === null || params.value === undefined || params.value === "Infinity" || params.value === 'NaN' ?
            <span>-</span> :
            <span style={{ fontWeight: 500, color: params.row['lastPrice'] > params.row['avgEWMA'] ? getRedLevel(params.value) : params.row['lastPrice'] < params.row['avgEWMA'] ? getBlueLevel(params.value) : '' }}>{params.value.toFixed(2)}</span>
        ),
        hide: "priceBias" in hideColState ? hideColState["priceBias"] : tableColList['PriceBias'].hide
      },
      PercentField("priceStrikeRatio", tableColList.PriceStrikeRatio.text, 90, "priceStrikeRatio" in hideColState ? hideColState["priceStrikeRatio"] : tableColList['PriceStrikeRatio'].hide, tableColList.PriceStrikeRatio.description),
      PercentField("priceStrikeYearRatio", tableColList.PriceStrikeYearRatio.text, 90, "priceStrikeYearRatio" in hideColState ? hideColState["priceStrikeRatio"] : tableColList['PriceStrikeYearRatio'].hide, tableColList.PriceStrikeYearRatio.description),
      PercentField("distanceRatio", tableColList.DistanceRatio.text, 90, "distanceRatio" in hideColState ? hideColState["distanceRatio"] : tableColList['DistanceRatio'].hide, tableColList.DistanceRatio.description),
      ColorPercentField("KellyCriterion_buy", tableColList.KellyCriterion_buy.text, 130, 2, "KellyCriterion_buy" in hideColState ? hideColState["KellyCriterion_buy"] : tableColList['KellyCriterion_buy'].hide, 500, tableColList.KellyCriterion_buy.description),
      ColorPercentField("KellyCriterion_sell", tableColList.KellyCriterion_sell.text, 130, 2, "KellyCriterion_sell" in hideColState ? hideColState["KellyCriterion_sell"] : tableColList['KellyCriterion_sell'].hide, 500, tableColList.KellyCriterion_sell.description),
      ColorPercentField("KellyCriterion_MU_0_buy", tableColList.KellyCriterion_MU_0_buy.text, 130, 2, "KellyCriterion_MU_0_buy" in hideColState ? hideColState["kellyCriterion_MU_0_buy"] : tableColList['KellyCriterion_MU_0_buy'].hide, 500, tableColList.KellyCriterion_MU_0_buy.description),
      ColorPercentField("KellyCriterion_MU_0_sell", tableColList.KellyCriterion_MU_0_sell.text, 130, 2, "KellyCriterion_MU_0_sell" in hideColState ? hideColState["KellyCriterion_MU_0_sell"] : tableColList['KellyCriterion_MU_0_sell'].hide, 500, tableColList.KellyCriterion_MU_0_sell.description),
      ColorPercentField("KellyCriterion_IV_buy", tableColList.KellyCriterion_IV_buy.text, 130, 2, "KellyCriterion_IV_buy" in hideColState ? hideColState["kellyCriterion_IV_buy"] : tableColList['KellyCriterion_IV_buy'].hide, 500, tableColList.KellyCriterion_IV_buy.description),
      ColorPercentField("KellyCriterion_IV_sell", tableColList.KellyCriterion_IV_sell.text, 130, 2, "KellyCriterion_IV_sell" in hideColState ? hideColState["KellyCriterion_IV_sell"] : tableColList['KellyCriterion_IV_sell'].hide, 500, tableColList.KellyCriterion_IV_sell.description),
      {
        field: "earningDate",
        headerName: tableColList.EarningDate.text,
        width: 120,
        renderCell: (params) => (
          <span style={{ whiteSpace: 'normal', wordWrap: 'break-word', color: params.row['earningDateColor']}}>
            {params.value}
          </span>
        ),
        hide: "earningDate" in hideColState ? hideColState["earningDate"] : tableColList['EarningDate'].hide
      },
      {
        field: 'exDividendDate',
        headerName: tableColList.ExDividendDate.text,
        width: 120,
        renderCell: (params) => (
          'exDividendLink' in params.row && params.row['exDividendLink'] != "" && params.row['exDividendLink'] != "-" ?       
          <Link href={params.row['exDividendLink']} target="_blank" rel="noreferrer noopener">
            <span style={{color: params.row['exDividendDateColor']}}>{params.value}</span>
          </Link> : <span>{params.value}</span>
        ),
        hide: 'exDividendDate' in hideColState ? hideColState['exDividendDate'] : tableColList['ExDividendDate'].hide
      },
      PercentField("exerciseProbability", tableColList.ExerciseProbability.text, 90, "exerciseProbability" in hideColState ? hideColState["exerciseProbability"] : tableColList['ExerciseProbability'].hide),
      PureFieldWithValueCheck("delta", tableColList.Delta.text, 90, 2, "delta" in hideColState ? hideColState["delta"] : tableColList['Delta'].hide),
      PureFieldWithValueCheck("gamma", tableColList.Gamma.text, 90, 2, "gamma" in hideColState ? hideColState["gamma"] : tableColList['Gamma'].hide),
      PureFieldWithValueCheck("rho", tableColList.Rho.text, 90, 2, "rho" in hideColState ? hideColState["rho"] : tableColList['Rho'].hide),
      PureFieldWithValueCheck("theta", tableColList.Theta.text, 90, 2, "theta" in hideColState ? hideColState["theta"] : tableColList['Theta'].hide),
      PureFieldWithValueCheck("vega", tableColList.Vega.text, 90, 2, "vega" in hideColState ? hideColState["vega"] : tableColList['Vega'].hide),
      {
        field: 'lastTradeDate',
        headerName: tableColList.LastTradeDate.text,
        width: 145,
        type: 'date',
        renderCell: (params) => (
          <span>{moment(params.row['lastTradeDate']).format('YYYY-MM-DD')}</span>
        ),
        hide: 'lastTradeDate' in hideColState ? hideColState['lastTradeDate'] : tableColList['LastTradeDate'].hide
      },
      PureFieldWithValueCheck("bid", tableColList.Bid.text, 105, 2, "bid" in hideColState ? hideColState["bid"] : tableColList['Bid'].hide),
      PureFieldWithValueCheck("ask", tableColList.Ask.text, 105, 2, "ask" in hideColState ? hideColState["ask"] : tableColList['Ask'].hide),
      ColorPosGreenNegRedField("change", tableColList.Change.text, 130, "change" in hideColState ? hideColState["change"] : tableColList['Change'].hide, 500),
      ColorPercentField("percentChange", tableColList.PercentChange.text, 140, 2, "percentChange" in hideColState ? hideColState["percentChange"] : tableColList['PercentChange'].hide, 500),
      PureFieldWithValueCheck("volume", tableColList.Volume.text, 140, 0, "volume" in hideColState ? hideColState["volume"] : tableColList['Volume'].hide),
      PureFieldWithValueCheck("openInterest", tableColList.OpenInterest.text, 140, 0, "openInterest" in hideColState ? hideColState["openInterest"] : tableColList['OpenInterest'].hide),
      PercentField("impliedVolatility", tableColList.ImpliedVolatility.text, 140, "impliedVolatility" in hideColState ? hideColState["impliedVolatility"] : tableColList['ImpliedVolatility'].hide),
      PercentField("EWMAHisVol", tableColList.EWMAHisVol.text, 140, "EWMAHisVol" in hideColState ? hideColState["EWMAHisVol"] : tableColList['EWMAHisVol'].hide),
      PureFieldWithValueCheck("BSM_EWMAHisVol", tableColList.BSM_EWMAHisVol.text, 140, 2, "BSM_EWMAHisVol" in hideColState ? hideColState["BSM_EWMAHisVol"] : tableColList['BSM_EWMAHisVol'].hide),
      PureFieldWithValueCheck("MC_EWMAHisVol", tableColList.MC_EWMAHisVol.text, 140, 2, "MC_EWMAHisVol" in hideColState ? hideColState["MC_EWMAHisVol"] : tableColList['MC_EWMAHisVol'].hide),
      PureFieldWithValueCheck("BT_EWMAHisVol", tableColList.BT_EWMAHisVol.text, 140, 2, "BT_EWMAHisVol" in hideColState ? hideColState["BT_EWMAHisVol"] : tableColList['BT_EWMAHisVol'].hide),
      {
        field: 'MCChart',
        headerName: tableColList.MCChart.text,
        width: 120,
        renderCell: (params) => (
          <IconButton
            size="small"
            aria-haspopup="true"
            onClick={() => {
              let iteration = 50
              const query_string = '/stock/price-simulation-by-mc?symbol=' + params.row['symbol'] + '&iteration=' + iteration + '&mu=0&vol=' + 
              params.row['EWMAHisVol'] + '&days=' + workdayCount(moment(new Date().toISOString().split('T')[0]), moment(params.row['expiryDate']))
              Promise.all([
                GetDataByFetchObj(query_string, FetchNornFinanceAPIServerRef.current.server),
              ]).then((allResponses) => {
                console.log(allResponses)
                if (allResponses.length === 1 && allResponses[0] !== null) {
                  let chartData = []
                  let cost = params.row['kind'] === 1 ? params.row['strike'] + params.row['lastPrice'] : params.row['strike'] - params.row['lastPrice']
                  let info = {'symbol': params.row['symbol'], 'strike': params.row['strike'], 'cost': cost}
                  allResponses[0]['mean'].forEach((mean_point, mean_index) => {
                    let d = {'Mean': parseInt(mean_point * 100, 10) / 100.0, 'Name': 'Day' + mean_index}
                    allResponses[0]['data'].forEach((data_points, data_i) => {
                      d['Path-'+String(data_i).padStart(2, '0')] =  parseInt(data_points[mean_index] * 100, 10) / 100.0
                    })
                    chartData.push(d)
                  })
                  console.log(chartData)
                  modalWindowRef.current.popModalWindow(<MonteCarloChart data={chartData} iteration={iteration} info={info}/>)
                } else {
                  console.error("Call simulation api failed")
                  modalWindowRef.current.popModalWindow(<div>Call simulation api failed</div>)
                }
              }).catch(() => {
                console.error("Call simulation api failed...")
                modalWindowRef.current.popModalWindow(<div>Call simulation api failed...</div>)
              })
            }}
          >
            <BarChartSharpIcon color="primary" style={{ fontSize: 40 }} />
          </IconButton>
        ),
        hide: 'MCChart' in  hideColState? hideColState['MCChart'] : tableColList['MCChart'].hide
      },
    ]
  }


  const fetchOptionsData = useFetch({ cachePolicy: 'no-cache' })
  const exDividendDictRef = useRef({}) 
  const fetchExDividendData = useFetch({ cachePolicy: 'no-cache' })

  const renderTable = (resp) => {
    console.log(resp)
    // [{"symbol":"A","stockPrice":149.50999450683594,"EWMA_historicalVolatility":0.2519420533670158,"contracts":[{"expiryDate":"2022-01-21","calls":[{"lastTradeDate":"2022-01-12","strike":155.0,"lastPrice":0.32,"bid":0.35,"ask":0.5,"change":0.049999982,"percentChange":18.51851,"volume":30,"openInterest":721,"impliedVolatility":0.22461712890624996,"valuationData":{"BSM_EWMAHisVol":0.7042894690005248,"MC_EWMAHisVol":0.70279983534146,"BT_EWMAHisVol":0.7046023394736802}}],"puts":[]}]}
    var calls = []
    var puts = []
    resp.forEach((data) => {
      let symbol = data["symbol"]
      let stock_price = data["stockPrice"]
      let stock_extra_info = data["stockExtraInfo"]
      let earningDate = 'No Data'
      let min_earnings_date = 0
      if (stock_extra_info != null && stock_extra_info["earningsDate"] !== undefined && stock_extra_info["earningsDate"] !== null && stock_extra_info["earningsDate"] !== '') {
        let temp = stock_extra_info["earningsDate"].split(' - ')
        temp.forEach((d, i) => {
          temp[i] = temp[i].split(' ')[0]
          if (i === 0) {
            min_earnings_date = new Date(temp[i]).getTime()
          }
        })
        earningDate = temp.join(" - ")
      }
      let ex_dividend_date = ''
      let ex_dividend_link = ''
      if (symbol in exDividendDictRef.current) {
        ex_dividend_date = exDividendDictRef.current[symbol]['ex_dividend_date']
        ex_dividend_link = exDividendDictRef.current[symbol]['link']
      }

      let today = new Date(new Date().toISOString().split('T')[0]);

      let ewma_his_vol = data["EWMA_historicalVolatility"]
      data["contracts"].forEach((contracts) => {
        let expiry_date = contracts["expiryDate"]
        let extra_data_func = (calls_puts) => {
          let output = calls_puts.map((cp, index) => {
            let v = cp["valuationData"]
            let o = {
              id: index,
              symbol: symbol,
              stockPrice: stock_price,
              EWMAHisVol: ewma_his_vol,
              expiryDate: expiry_date,
              lastTradeDate: cp["lastTradeDate"] !== undefined && cp["lastTradeDate"] !== null && cp["lastTradeDate"] !== '-' ? cp["lastTradeDate"] : 0,
              strike: cp["strike"] !== undefined && cp["strike"] !== null && cp["strike"] !== '-' ? cp["strike"] : -Number.MAX_VALUE,
              lastPrice: cp["lastPrice"] !== undefined && cp["lastPrice"] !== null && cp["lastPrice"] !== '-' ? cp["lastPrice"] : -Number.MAX_VALUE,
              bid: cp["bid"] !== undefined && cp["bid"] !== null && cp["bid"] !== '-' ? cp["bid"] : -Number.MAX_VALUE,
              ask: cp["ask"] !== undefined && cp["ask"] !== null && cp["ask"] !== '-' ? cp["ask"] : -Number.MAX_VALUE,
              change: cp["change"] !== undefined && cp["change"] !== null && cp["change"] !== '-' ? cp["change"] : -Number.MAX_VALUE,
              percentChange: cp["percentChange"] !== undefined && cp["percentChange"] !== null && cp["percentChange"] !== '-' ? cp["percentChange"] / 100.0 : -Number.MAX_VALUE,
              volume: cp["volume"] !== undefined && cp["volume"] !== null && cp["volume"] !== '-' ? cp["volume"] : -Number.MAX_VALUE,
              openInterest: cp["openInterest"] !== undefined && cp["openInterest"] !== null && cp["openInterest"] !== '-' ? cp["openInterest"] : -Number.MAX_VALUE,
              impliedVolatility: cp["impliedVolatility"] !== undefined && cp["impliedVolatility"] !== null && cp["impliedVolatility"] !== '-' ? cp["impliedVolatility"] : -Number.MAX_VALUE,
              BSM_EWMAHisVol: v["BSM_EWMAHisVol"] !== undefined && v["BSM_EWMAHisVol"] !== null && v["BSM_EWMAHisVol"] > 0 ? v["BSM_EWMAHisVol"] : -Number.MAX_VALUE,
              MC_EWMAHisVol: v["MC_EWMAHisVol"] !== undefined && v["MC_EWMAHisVol"] !== null && v["MC_EWMAHisVol"] > 0 ? v["MC_EWMAHisVol"] : -Number.MAX_VALUE,
              BT_EWMAHisVol: v["BT_EWMAHisVol"] !== undefined && v["BT_EWMAHisVol"] !== null && v["BT_EWMAHisVol"] > 0 ? v["BT_EWMAHisVol"] : -Number.MAX_VALUE,
              delta: v["delta"] !== undefined && v["delta"] !== null ? v["delta"] : -Number.MAX_VALUE,
              gamma: v["gamma"] !== undefined && v["gamma"] !== null ? v["gamma"] : -Number.MAX_VALUE,
              rho: v["rho"] !== undefined && v["rho"] !== null ? v["rho"] : -Number.MAX_VALUE,
              theta: v["theta"] !== undefined && v["theta"] !== null ? v["theta"] : -Number.MAX_VALUE,
              vega: v["vega"] !== undefined && v["vega"] !== null ? v["vega"] : -Number.MAX_VALUE,
              KellyCriterion_buy: v["KellyCriterion_buy"] !== undefined && v["KellyCriterion_buy"] !== null ? v["KellyCriterion_buy"] : -Number.MAX_VALUE,
              KellyCriterion_sell: v["KellyCriterion_sell"] !== undefined && v["KellyCriterion_sell"] !== null ? v["KellyCriterion_sell"] : -Number.MAX_VALUE,
              KellyCriterion_MU_0_buy: v["KellyCriterion_MU_0_buy"] !== undefined && v["KellyCriterion_MU_0_buy"] !== null ? v["KellyCriterion_MU_0_buy"] : -Number.MAX_VALUE,
              KellyCriterion_MU_0_sell: v["KellyCriterion_MU_0_sell"] !== undefined && v["KellyCriterion_MU_0_sell"] !== null ? v["KellyCriterion_MU_0_sell"] : -Number.MAX_VALUE,
              KellyCriterion_IV_buy: v["KellyCriterion_IV_buy"] !== undefined && v["KellyCriterion_IV_buy"] !== null ? v["KellyCriterion_IV_buy"] : -Number.MAX_VALUE,
              KellyCriterion_IV_sell: v["KellyCriterion_IV_sell"] !== undefined && v["KellyCriterion_IV_sell"] !== null ? v["KellyCriterion_IV_sell"] : -Number.MAX_VALUE,
              earningDate: earningDate,
              earningDateColor: min_earnings_date > 0 && new Date(expiry_date).getTime() >= min_earnings_date && min_earnings_date >= today.getTime() ? 'red':'',
              exDividendDate: ex_dividend_date != '' ? ex_dividend_date : 'No Data',
              exDividendLink: ex_dividend_link,
              exDividendDateColor:ex_dividend_date != '' && new Date(expiry_date).getTime() >= new Date(ex_dividend_date).getTime() && new Date(ex_dividend_date).getTime() >= today.getTime() ? 'red':'',
              exerciseProbability: v["exerciseProbability"] !== undefined && v["exerciseProbability"] !== null ? v["exerciseProbability"] : -Number.MAX_VALUE,
            }
            let cnt = 0
            let sum = 0
            if (o.BSM_EWMAHisVol > 0) {
              cnt += 1
              sum += o.BSM_EWMAHisVol
            }
            if (o.MC_EWMAHisVol > 0) {
              cnt += 1
              sum += o.MC_EWMAHisVol
            }
            if (o.BT_EWMAHisVol > 0) {
              cnt += 1
              sum += o.BT_EWMAHisVol
            }
            o["avgEWMA"] = sum / cnt

            o["priceBias"] = -Number.MAX_VALUE
            if (o.lastPrice != -Number.MAX_VALUE) {
              o["priceBias"] = Math.abs(o.lastPrice - o["avgEWMA"]) / o.lastPrice
            }

            o["priceStrikeRatio"] = -Number.MAX_VALUE
            if (o.strike != -Number.MAX_VALUE && o.lastPrice != -Number.MAX_VALUE) {
              o["priceStrikeRatio"] = o.lastPrice / o.strike
            }

            o["priceStrikeYearRatio"] = -Number.MAX_VALUE
            if (o["priceStrikeRatio"] != -Number.MAX_VALUE) {
              let day_diff = Math.floor((Date.parse(expiry_date) - Date.parse(new Date().toISOString().slice(0, 10))) / 86400000)
              o["priceStrikeYearRatio"] = o["priceStrikeRatio"] * 365.0 / day_diff
            }

            o["distanceRatio"] = -Number.MAX_VALUE
            if (o.strike != -Number.MAX_VALUE && o.stockPrice != -Number.MAX_VALUE) {
              o["distanceRatio"] = Math.abs(o.stockPrice - o.strike) / o.stockPrice
            }
            return o
          })
          return output
        }
        calls = calls.concat(extra_data_func(contracts["calls"]))
        puts = puts.concat(extra_data_func(contracts["puts"]))
      })
    })

    // reset id
    calls.forEach((d, i) => {
      calls[i].id = i
    });
    puts.forEach((d, i) => {
      puts[i].id = i
    });

    console.log(calls)
    setCallsData(calls)
    console.log(puts)
    setPutsData(puts)
  }

  const refreshData = (local_path) => {
    Promise.all([
      GetDataByFetchObj(ExDividend_Path, fetchExDividendData),
      GetDataByFetchObj(local_path, fetchOptionsData),
    ]).then((allResponses) => {
      if (allResponses.length === 2 && allResponses[0] !== null && allResponses[1] !== null) {
        if (!secret) {
          console.error("Verify Authentication Failed, this page is private use only")
          modalWindowRef.current.popModalWindow(<div>Verify Authentication Failed, this page is private use only</div>)   
          return     
        }
        exDividendDictRef.current = Object.assign({}, ...JSON.parse(decryptECB(allResponses[0], secret))['data'].map((x) => ({[x['symbol']]: x})))
        console.log(exDividendDictRef.current)
        renderTable(JSON.parse(decryptECB(allResponses[1], secret)))
      } else {
        console.error("refreshData some data failed")
        modalWindowRef.current.popModalWindow(<div>Get some data failed...</div>)
      }
    }).catch(() => {
      console.error("refreshData failed")
      modalWindowRef.current.popModalWindow(<div>Get data failed...</div>)
    })
  }

  const OptionsRef = useRef({
    renderTable: renderTable,
  })

  const [callsData, setCallsData] = useState([])
  const [putsData, setPutsData] = useState([])
  const [hideColState, setHideColState] = useState({})
  const [arg, setArg] = useState(0)

  useEffect(() => {
    // componentDidMount is here!
    // componentDidUpdate is here!
    refreshData(Options_Def[0].local_path)

    return () => {
      // componentWillUnmount is here!
    }
  }, [])

  return (
    <div className={commonStyle.defaultFont + ' ' + optionsStyle.container}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <FormControl size="small" variant="outlined" className={optionsStyle.optionsTableSelect}>
            <InputLabel htmlFor="arg-select">{'Options Valuation'}</InputLabel>
            <Select
              native
              value={arg}
              displayEmpty
              onChange={(event) => {
                setArg(parseInt(event.target.value))
                refreshData(Options_Def[event.target.value].local_path)
              }}
              label={'Options Valuation'}
            >
              {
                Options_Def.map((value, index) => {
                  return <option key={shortid.generate()} index={index} value={index}>{value.display_name}</option>
                })
              }
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <ControlPannel selectArg={arg} SyncDataRef={SyncDataRef} modalWindowRef={modalWindowRef} ControlPannelRef={ControlPannelRef}/>
      <div key={shortid.generate()} >
        <div className={optionsStyle.table}>
          <DataGrid rows={callsData} columns={genTableColTemplate()} rowsPerPageOptions={[]} autoPageSize={true} components={{ NoRowsOverlay: DefaultDataGridTable, }} disableSelectionOnClick onColumnVisibilityChange={(param) => {
            let tempHideColState = hideColState
            tempHideColState[param['field']] = !param['isVisible']
            setHideColState(tempHideColState)
          }} initialState={{
            filter: {
              filterModel: {
                items: Options_Def[arg].name === 'star_list' ? [{ columnField: 'lastPrice', operatorValue: '>', value: 0.1 }] : [],
              },
            },
            sorting: {
              sortModel: [{ field: 'priceBias', sort: 'desc' }],
            },
          }}/>
        </div>
        <div className={optionsStyle.table}>
          <DataGrid rows={putsData} columns={genTableColTemplate()} rowsPerPageOptions={[]} autoPageSize={true} components={{ NoRowsOverlay: DefaultDataGridTable, }} disableSelectionOnClick onColumnVisibilityChange={(param) => {
            let tempHideColState = hideColState
            tempHideColState[param['field']] = !param['isVisible']
            setHideColState(tempHideColState)
          }} initialState={{
            filter: {
              filterModel: {
                items: Options_Def[arg].name === 'star_list' ? [{ columnField: 'lastPrice', operatorValue: '>', value: 0.1 }] : [],
              },
            },
            sorting: {
              sortModel: [{ field: 'priceBias', sort: 'desc' }],
            },
          }}/>
        </div>
      </div>
      <ModalWindow modalWindowRef={modalWindowRef} />
      <SyncData OptionsRef={OptionsRef} ControlPannelRef={ControlPannelRef} SyncDataRef={SyncDataRef}/>
      <FetchNornFinanceAPIServer FetchNornFinanceAPIServerRef={FetchNornFinanceAPIServerRef}/>
    </div>
  )
}

export default Options
