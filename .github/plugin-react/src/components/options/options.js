import React, { useState, useEffect, useRef } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import SearchIcon from '@mui/icons-material/Search'
import { blue } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/styles'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import shortid from 'shortid'
import useFetch from 'use-http'
import moment from 'moment'

import DefaultDataGridTable from '../defaultDataGridTable'
import LinearProgressWithLabel from '../linearProgressWithLabel'
import { NornFinanceAPIURL } from '../../common/def'
import { useInterval, GetDataByFetchObj, SymbolNameField, PureFieldWithValueCheck, PercentField, ColorPercentField, ColorPosGreenNegRedField } from '../../common/reactUtils'
import ModalWindow from '../modalWindow'

import commonStyle from '../common.module.scss'
import optionsStyle from './options.module.scss'


const SyncData = ({ OptionsRef, ControlPannelRef, SyncDataRef}) => {
  const [ws, setWs] = useState(null)

  const queryDataRef = useRef({
    symbols: [],
    now: 0,
    data: [],
  })

  const syncData = (symbols) => {
    if (symbols.length > 0){
      queryDataRef.current.symbols = symbols
    }
    if (queryDataRef.current.symbols.length == 0) {
      console.error("No symbols data")
      return
    }

    let symbol = queryDataRef.current.symbols[queryDataRef.current.now]
    let query_string = "/ws/option/quote-valuation?symbol=" + symbol
    setWs(new WebSocket(NornFinanceAPIURL + query_string))
    let val = queryDataRef.current.now * 100 / queryDataRef.current.symbols.length
    let text = `${Math.round(val)}% - Querying ${symbol} (${queryDataRef.current.now + 1}/${queryDataRef.current.symbols.length})`
    ControlPannelRef.current.updateProgress(val, text)
  }

  SyncDataRef.current = {
    syncData: syncData,
  }

  useInterval(() => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send("") // heartbeat
      console.log("heartbeat")
    } else if (queryDataRef.current.now < queryDataRef.current.symbols.length) {
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
        if (queryDataRef.current.symbols.length !== 0){
          if (queryDataRef.current.now >= queryDataRef.current.symbols.length) {
            OptionsRef.current.renderTable(queryDataRef.current.data)
            queryDataRef.current.now = 0
            queryDataRef.current.data = []
            setWs(null)
            ControlPannelRef.current.updateProgress(100, `100%`)
          } else {
            let symbol = queryDataRef.current.symbols[queryDataRef.current.now]
            let query_string = "/ws/option/quote-valuation?symbol=" + symbol
            setWs(new WebSocket(NornFinanceAPIURL + query_string))
            let val = queryDataRef.current.now * 100 / queryDataRef.current.symbols.length
            let text = `${Math.round(val)}% - Querying ${symbol} (${queryDataRef.current.now+1}/${queryDataRef.current.symbols.length})`
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

const ControlPannel = ({ SyncDataRef, modalWindowRef, ControlPannelRef }) => {

  const [progress, setProgress] = useState({val:0, text:'0%'});
  const fetchOptionsData = useFetch({ cachePolicy: 'no-cache' })

  const refreshQueryOptionsData = () => {
    Promise.all([
      GetDataByFetchObj('/trade-data.json', fetchOptionsData),
    ]).then((allResponses) => {
      console.log(allResponses)
      if (allResponses.length === 1 && allResponses[0] !== null) {
        let trade_data = allResponses[0]
        SyncDataRef.current.syncData(trade_data['hold_stock_list'].concat(trade_data['star_option_list']))
      } else {
        console.error("renderDefaultOptionsData some data failed")
        modalWindowRef.current.popModalWindow(<div>Get some data failed...</div>)
      }
    }).catch(() => {
      console.error("renderDefaultOptionsData failed")
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
                refreshQueryOptionsData()
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
    PriceBias: { hide: false, text: 'Bias (Price)' },
    VolBias: { hide: false, text: 'Bias (Vol.)' },
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
  }

  const genTableColTemplate = () => {
    return [
      SymbolNameField('symbol', 'Symbol', 130, 'symbol' in hideColState ? hideColState['symbol'] : false),
      PureFieldWithValueCheck("stockPrice", tableColList.StockPrice.text, 130, 2, "stockPrice" in hideColState ? hideColState["stockPrice"] : tableColList['StockPrice'].hide),
      {
        field: 'expiryDate',
        headerName: tableColList.ExpiryDate.text,
        width: 125,
        type: 'date',
        renderCell: (params) => (
          <span>{moment(params.row['expiryDate']).format('YYYY-MM-DD')}</span>
        ),
        hide: 'expiryDate' in hideColState ? hideColState['expiryDate'] : tableColList['ExpiryDate'].hide
      },
      PureFieldWithValueCheck("strike", tableColList.Strike.text, 120, 2, "strike" in hideColState ? hideColState["strike"] : tableColList['Strike'].hide),
      PureFieldWithValueCheck("lastPrice", tableColList.LastPrice.text, 140, 2, "lastPrice" in hideColState ? hideColState["lastPrice"] : tableColList['LastPrice'].hide),
      PureFieldWithValueCheck("avgEWMA", tableColList.AvgEWMA.text, 150, 2, "avgEWMA" in hideColState ? hideColState["avgEWMA"] : tableColList['AvgEWMA'].hide),
      PureFieldWithValueCheck("priceBias", tableColList.PriceBias.text, 120, 2, "priceBias" in hideColState ? hideColState["priceBias"] : tableColList['PriceBias'].hide),
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
    ]
  }


  const fetchOptionsData = useFetch({ cachePolicy: 'no-cache' })

  const renderTable = (resp) => {
    // [{"symbol":"A","stockPrice":149.50999450683594,"EWMA_historicalVolatility":0.2519420533670158,"contracts":[{"expiryDate":"2022-01-21","calls":[{"lastTradeDate":"2022-01-12","strike":155.0,"lastPrice":0.32,"bid":0.35,"ask":0.5,"change":0.049999982,"percentChange":18.51851,"volume":30,"openInterest":721,"impliedVolatility":0.22461712890624996,"valuationData":{"BSM_EWMAHisVol":0.7042894690005248,"MC_EWMAHisVol":0.70279983534146,"BT_EWMAHisVol":0.7046023394736802}}],"puts":[]}]}
    var calls = []
    var puts = []
    resp.forEach((data) => {
      let symbol = data["symbol"]
      let stock_price = data["stockPrice"]
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
            o["priceBias"] = Math.abs(o.lastPrice - o["avgEWMA"]) / o.lastPrice
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

  const renderDefaultOptionsData = () => {
    Promise.all([
      GetDataByFetchObj('/plugin-react/option-valuation/output.json', fetchOptionsData),
    ]).then((allResponses) => {
      console.log(allResponses)
      if (allResponses.length === 1 && allResponses[0] !== null) {
        renderTable(allResponses[0])
      } else {
        console.error("renderDefaultOptionsData some data failed")
        modalWindowRef.current.popModalWindow(<div>Get some data failed...</div>)
      }
    }).catch(() => {
      console.error("renderDefaultOptionsData failed")
      modalWindowRef.current.popModalWindow(<div>Get data failed...</div>)
    })
  }


  const OptionsRef = useRef({
    renderTable: renderTable,
  })

  const [callsData, setCallsData] = useState([])
  const [putsData, setPutsData] = useState([])
  const [hideColState, setHideColState] = useState({})

  useEffect(() => {
    // componentDidMount is here!
    // componentDidUpdate is here!
    renderDefaultOptionsData()
    return () => {
      // componentWillUnmount is here!
    }
  }, [])

  return (
    <div className={commonStyle.defaultFont + ' ' + optionsStyle.container}>
      <ControlPannel SyncDataRef={SyncDataRef} modalWindowRef={modalWindowRef} ControlPannelRef={ControlPannelRef}/>
      <div key={shortid.generate()} >
        <div className={optionsStyle.table}>
          <DataGrid rows={callsData} columns={genTableColTemplate()} rowsPerPageOptions={[]} autoPageSize={true} components={{ NoRowsOverlay: DefaultDataGridTable, }} disableSelectionOnClick onColumnVisibilityChange={(param) => {
            let tempHideColState = hideColState
            tempHideColState[param['field']] = !param['isVisible']
            setHideColState(tempHideColState)
          }} initialState={{
            filter: {
              filterModel: {
                items: [{ columnField: 'lastPrice', operatorValue: '>', value: 0.1 }],
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
                items: [{ columnField: 'lastPrice', operatorValue: '>', value: 0.1 }],
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
    </div>
  )
}

export default Options
