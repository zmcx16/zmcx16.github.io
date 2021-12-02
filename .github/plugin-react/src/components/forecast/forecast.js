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

const Forecast = () => {

  const fetchStockData = useFetch({ cachePolicy: 'no-cache' })
  const fetchForecastData = useFetch({ cachePolicy: 'no-cache' })

  const refreshForecastData = (forecast_name) => {
    Promise.all([
      GetDataByFetchObj("/stock-data/stat.json", fetchStockData),
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
            ChartUrl: '/forecast-data/' + forecast_name + '/' + symbol +'.json',
          }

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

          return o
        })

        const tableColList = {
          Symbol: { show: true, text: 'Symbol' },
          Close: { show: true, text: 'Price' },
          FCST: { show: true, text: 'FCST' },
          FCST_Upper30: { show: true, text: 'FCST_Upper30' },
          FCST_Lower30: { show: true, text: 'FCST_Lower30' },
          PE: { show: true, text: 'P/E' },
          PB: { show: true, text: 'P/B' },
          Dividend: { show: true, text: 'Dividend %' },
          High52: { show: true, text: '52W High' },
          Low52: { show: true, text: '52W Low' },
          PerfWeek: { show: true, text: 'Perf Week' },
          PerfMonth: { show: true, text: 'Perf Month' },
          PerfQuarter: { show: true, text: 'Perf Quarter' },
          PerfHalfY: { show: true, text: 'Perf Half Y' },
          PerfYear: { show: true, text: 'Perf Year' },
          PerfYTD: { show: true, text: 'Perf YTD' },
          Chart: { show: true, text: 'Chart' },
        }

        setLastUpdateTime('Last Update Time: ' + new Date(update_time).toLocaleString('en-US'))
        setForecastTable(<ForecastTable tableColList={tableColList} data={output}/>)
      } else {
        alert("Get some data failed...")
        console.error("refreshForecastData some data failed")
      }
    }).catch(() => {
      alert("Get data failed...")
      console.error("refreshForecastData failed")
    })
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
