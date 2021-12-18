import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import shortid from 'shortid'
import useFetch from 'use-http'

import ForecastTable from './forecastTable'
import { DAF_Def } from '../../common/def'
import { GetDataByFetchObj } from '../../common/reactUtils'

import commonStyle from '../common.module.scss'
import forecastStyle from './forecast.module.scss'

const calcFCST = (o) => {
  if (o.Close == -Number.MAX_VALUE) {
    o.FCST = -Number.MAX_VALUE
    o.FCST_Upper30 = -Number.MAX_VALUE
    o.FCST_Lower30 = -Number.MAX_VALUE
  } else {
    if (o.FCST == -Number.MAX_VALUE) {
      o.FCST = -Number.MAX_VALUE
    } else {
      o.FCST = (o.FCST - o.Close) / o.Close
    }
    if (o.FCST_Upper30 == -Number.MAX_VALUE) {
      o.FCST_Upper30 = -Number.MAX_VALUE
    } else {
      o.FCST_Upper30 = (o.FCST_Upper30 - o.Close) / o.Close
    }
    if (o.FCST_Lower30 == -Number.MAX_VALUE) {
      o.FCST_Lower30 = -Number.MAX_VALUE
    } else {
      o.FCST_Lower30 = (o.FCST_Lower30 - o.Close) / o.Close
    }
  }
}

const Forecast = () => {

  const fetchStatData = useFetch({ cachePolicy: 'no-cache' })
  const fetchForecastData = useFetch({ cachePolicy: 'no-cache' })

  const renderStockData = (forecast_name) => {
    Promise.all([
      GetDataByFetchObj("/stock-data/stat.json", fetchStatData),
      GetDataByFetchObj('/forecast-data/' + forecast_name + '.json', fetchForecastData),
    ]).then((allResponses) => {
      console.log(allResponses)
      if (allResponses.length == 2 && allResponses[0] !== null && allResponses[1] !== null) {
        let update_time = allResponses[1]["update_time"]
        let forecast_data = allResponses[1]["data"]
        let output = Object.keys(forecast_data).map((symbol, index) => {
          let forecastInfo = forecast_data[symbol]
          let stockInfo = allResponses[0][symbol]
          let o = {
            id: index,
            Symbol: symbol,
            Close: stockInfo !== undefined && stockInfo !== null && stockInfo['Close'] !== '-' ? stockInfo['Close'] : -Number.MAX_VALUE,
            FCST: forecastInfo['FCST'] !== undefined && forecastInfo !== null && forecastInfo['FCST'] !== '-' ? forecastInfo['FCST'] : -Number.MAX_VALUE,
            FCST_Upper30: forecastInfo['FCST_Upper30'] !== undefined && forecastInfo !== null && forecastInfo['FCST_Upper30'] !== '-' ? forecastInfo['FCST_Upper30'] : -Number.MAX_VALUE,
            FCST_Lower30: forecastInfo['FCST_Lower30'] !== undefined && forecastInfo !== null && forecastInfo['FCST_Lower30'] !== '-' ? forecastInfo['FCST_Lower30'] : -Number.MAX_VALUE,
            PE: stockInfo !== undefined && stockInfo !== null && stockInfo['P/E'] !== '-' ? stockInfo['P/E'] : Number.MAX_VALUE,
            PB: stockInfo !== undefined && stockInfo !== null && stockInfo['P/B'] !== '-' ? stockInfo['P/B'] : Number.MAX_VALUE,
            Dividend: stockInfo !== undefined && stockInfo !== null && stockInfo['Dividend %'] !== '-' ? stockInfo['Dividend %'] : -Number.MAX_VALUE,
            High52: stockInfo !== undefined && stockInfo !== null && stockInfo['52W High'] !== '-' ? stockInfo['52W High'] : -Number.MAX_VALUE,
            Low52: stockInfo !== undefined && stockInfo !== null && stockInfo['52W Low'] !== '-' ? stockInfo['52W Low'] : -Number.MAX_VALUE,
            PerfWeek: stockInfo !== undefined && stockInfo !== null && stockInfo['Perf Week'] !== '-' ? stockInfo['Perf Week'] : -Number.MAX_VALUE,
            PerfMonth: stockInfo !== undefined && stockInfo !== null && stockInfo['Perf Month'] !== '-' ? stockInfo['Perf Month'] : -Number.MAX_VALUE,
            PerfQuarter: stockInfo !== undefined && stockInfo !== null && stockInfo['Perf Quarter'] !== '-' ? stockInfo['Perf Quarter'] : -Number.MAX_VALUE,
            PerfHalfY: stockInfo !== undefined && stockInfo !== null && stockInfo['Perf Half Y'] !== '-' ? stockInfo['Perf Half Y'] : -Number.MAX_VALUE,
            PerfYear: stockInfo !== undefined && stockInfo !== null && stockInfo['Perf Year'] !== '-' ? stockInfo['Perf Year'] : -Number.MAX_VALUE,
            PerfYTD: stockInfo !== undefined && stockInfo !== null && stockInfo['Perf YTD'] !== '-' ? stockInfo['Perf YTD'] : -Number.MAX_VALUE,
            ChartUrl: '/forecast-data/' + forecast_name + '/' + symbol + '.json',
          }

          calcFCST(o)
          return o
        })

        const tableColList = {
          Symbol: { hide: false, text: 'Symbol' },
          Close: { hide: false, text: 'Price' },
          FCST: { hide: false, text: 'FCST_30' },
          FCST_Upper30: { hide: false, text: 'FCST_Upper30' },
          FCST_Lower30: { hide: false, text: 'FCST_Lower30' },
          PE: { hide: true, text: 'P/E' },
          PB: { hide: true, text: 'P/B' },
          Dividend: { hide: true, text: 'Dividend %' },
          High52: { hide: true, text: '52W High' },
          Low52: { hide: true, text: '52W Low' },
          PerfWeek: { hide: false, text: 'Perf Week' },
          PerfMonth: { hide: false, text: 'Perf Month' },
          PerfQuarter: { hide: false, text: 'Perf Quarter' },
          PerfHalfY: { hide: false, text: 'Perf Half Y' },
          PerfYear: { hide: false, text: 'Perf Year' },
          PerfYTD: { hide: false, text: 'Perf YTD' },
          Chart: { hide: false, text: 'Chart' },
        }

        setLastUpdateTime('Last Update Time: ' + new Date(update_time).toLocaleString('en-US'))
        setForecastTable(<ForecastTable tableColList={tableColList} data={output} />)
      } else {
        alert("Get some data failed...")
        console.error("refreshForecastData some data failed")
      }
    }).catch(() => {
      alert("Get data failed...")
      console.error("refreshForecastData failed")
    })
  }

  const renderMarketData = (forecast_name) => {
    Promise.all([
      GetDataByFetchObj("/indusrty-table.json", fetchStatData),
      GetDataByFetchObj('/forecast-data/' + forecast_name + '.json', fetchForecastData),
    ]).then((allResponses) => {
      console.log(allResponses)
      if (allResponses.length == 2 && allResponses[0] !== null && allResponses[1] !== null) {
        let update_time = allResponses[1]["update_time"]
        let forecast_data = allResponses[1]["data"]
        let output = Object.keys(forecast_data).map((symbol, index) => {

          // get all market dict 
          let all_market_data = {}
          allResponses[0]["data"].forEach((industry) => {
            industry["Market"].forEach((market) => {
              // {"Perf Week":-0.015445719329214538,"Perf Month":-0.04125483455092398,"Perf Quart":-0.1634795650543683,"Perf Half":-0.22989299275112188,"Perf Year":-0.12544100352802834,"Perf YTD":-0.1415929203539823,"src":"marketwatch","symbol":"WSJIXUSPAP","dataUrl":"https://www.marketwatch.com/investing/index/wsjixuspap?countrycode=xx"}
              let key_name = (market["src"] + '_' + market["symbol"]).match(/\w+/gi).join('_')
              all_market_data[key_name] = market
            })
          })

          let forecastInfo = forecast_data[symbol]
          let marketInfo = all_market_data[symbol]
          let o = {
            id: index,
            Market: symbol,
            Close: marketInfo !== undefined && marketInfo !== null && marketInfo['Close'] !== '-' ? marketInfo['Close'] : -Number.MAX_VALUE,
            FCST: forecastInfo['FCST'] !== undefined && forecastInfo !== null && forecastInfo['FCST'] !== '-' ? forecastInfo['FCST'] : -Number.MAX_VALUE,
            FCST_Upper30: forecastInfo['FCST_Upper30'] !== undefined && forecastInfo !== null && forecastInfo['FCST_Upper30'] !== '-' ? forecastInfo['FCST_Upper30'] : -Number.MAX_VALUE,
            FCST_Lower30: forecastInfo['FCST_Lower30'] !== undefined && forecastInfo !== null && forecastInfo['FCST_Lower30'] !== '-' ? forecastInfo['FCST_Lower30'] : -Number.MAX_VALUE,
            PerfWeek: marketInfo !== undefined && marketInfo !== null && marketInfo['Perf Week'] !== '-' ? marketInfo['Perf Week'] : -Number.MAX_VALUE,
            PerfMonth: marketInfo !== undefined && marketInfo !== null && marketInfo['Perf Month'] !== '-' ? marketInfo['Perf Month'] : -Number.MAX_VALUE,
            PerfQuarter: marketInfo !== undefined && marketInfo !== null && marketInfo['Perf Quart'] !== '-' ? marketInfo['Perf Quart'] : -Number.MAX_VALUE,
            PerfHalfY: marketInfo !== undefined && marketInfo !== null && marketInfo['Perf Half'] !== '-' ? marketInfo['Perf Half'] : -Number.MAX_VALUE,
            PerfYear: marketInfo !== undefined && marketInfo !== null && marketInfo['Perf Year'] !== '-' ? marketInfo['Perf Year'] : -Number.MAX_VALUE,
            PerfYTD: marketInfo !== undefined && marketInfo !== null && marketInfo['Perf YTD'] !== '-' ? marketInfo['Perf YTD'] : -Number.MAX_VALUE,
            MarketUrl: marketInfo["dataUrl"],
            ChartUrl: '/forecast-data/' + forecast_name + '/' + symbol + '.json',
          }

          calcFCST(o)
          return o
        })

        const tableColList = {
          Market: { hide: false, text: 'Market' },
          Close: { hide: false, text: 'Price' },
          FCST: { hide: false, text: 'FCST_30' },
          FCST_Upper30: { hide: false, text: 'FCST_Upper30' },
          FCST_Lower30: { hide: false, text: 'FCST_Lower30' },
          PerfWeek: { hide: false, text: 'Perf Week' },
          PerfMonth: { hide: false, text: 'Perf Month' },
          PerfQuarter: { hide: false, text: 'Perf Quarter' },
          PerfHalfY: { hide: false, text: 'Perf Half Y' },
          PerfYear: { hide: false, text: 'Perf Year' },
          PerfYTD: { hide: false, text: 'Perf YTD' },
          Chart: { hide: false, text: 'Chart' },
        }

        setLastUpdateTime('Last Update Time: ' + new Date(update_time).toLocaleString('en-US'))
        setForecastTable(<ForecastTable tableColList={tableColList} data={output} />)
      } else {
        alert("Get some data failed...")
        console.error("refreshForecastData some data failed")
      }
    }).catch(() => {
      alert("Get data failed...")
      console.error("refreshForecastData failed")
    })
  }

  const refreshForecastData = (forecast_name) => {
    if (forecast_name.startsWith('stock')){
      renderStockData(forecast_name)
    } else if (forecast_name.startsWith('market')) {
      renderMarketData(forecast_name)
    }
  }

  const [forecastTable, setForecastTable] = useState()
  const [lastUpdateTime, setLastUpdateTime] = useState('Last Update Time: None')
  const [arg, setArg] = useState(0)

  useEffect(() => {
    // componentDidMount is here!
    // componentDidUpdate is here!
    refreshForecastData(DAF_Def[0].name)

    return () => {
      // componentWillUnmount is here!
    }
  }, [])

  return (
    <div className={commonStyle.defaultFont + ' ' + forecastStyle.container}>
      <div key={shortid.generate()} >
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <FormControl size="small" variant="outlined" className={forecastStyle.argNodesSelect}>
              <InputLabel htmlFor="arg-select">{'Data-Algorithm-Features'}</InputLabel>
              <Select
                native
                value={arg}
                displayEmpty
                onChange={(event) => {
                  setArg(event.target.value)
                  refreshForecastData(DAF_Def[event.target.value].name)
                }}
                label={'Data-Algorithm-Features'}
              >
                {
                  DAF_Def.map((value, index) => {
                    return <option key={shortid.generate()} index={index} value={index}>{value.display_name}</option>
                  })
                }
              </Select>
            </FormControl>
          </Grid>
          <Grid container item xs={6} justify="flex-end">
            <Typography className={forecastStyle.forecastTableLastUpdateTime} variant="h6">
              {lastUpdateTime}
            </Typography>
          </Grid>
        </Grid>
        {forecastTable}
      </div>
    </div>
  )
}

export default Forecast
