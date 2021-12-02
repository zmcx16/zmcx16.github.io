import React, { useState, useRef } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import BarChartSharpIcon from '@material-ui/icons/BarChartSharp'
import useFetch from 'use-http'

import ForecastChart from './forecastChart'
import ModalWindow from '../modalWindow'
import { GetDataByFetchObj } from '../../common/reactUtils'
import { tryConvertFloat, convert2KMBTFloat } from '../../common/utils'
import { colorPosGreenNegRedPercentField, PercentField, KMBTField, SymbolNameField, PureFieldWithValueCheck } from '../../common/reactUtils'
import DefaultDataGridTable from '../defaultDataGridTable'

import forecastTableStyle from './forecastTable.module.scss'
import '../muiTablePagination.css'


const ForecastTableObj = ({ tableColList, data }) => {

  const modalWindowRef = useRef({
    popModalWindow: null,
  })

  const fetchForecastQuoteData = useFetch({ cachePolicy: 'no-cache' })

  const showColListRef = useRef(Object.keys(tableColList).reduce((accumulator, currentValue) => {
    accumulator[currentValue] = tableColList[currentValue].show
    return accumulator
  }, {}))

  const getTableColTemplate = (showColList) => {
    return Object.keys(showColList).map((key) => {
      if (key === 'Symbol') {
        return SymbolNameField(key, tableColList[key].text, 110, showColList[key])
      } else if (key === 'Close' || key === 'PE' || key === 'PB') {
        return PureFieldWithValueCheck(key, tableColList[key].text, 110, 2, showColList[key])
      } else if (key.indexOf('Perf') != -1 || key.indexOf('FCST') != -1) {
        let w = 120
        if (key.indexOf('FCST_') != -1) {
          w = 140
        }
        return colorPosGreenNegRedPercentField(key, tableColList[key].text, w, showColList[key])
      } else if (key === 'Dividend' || key === 'High52' || key === 'Low52') {
        return PercentField(key, tableColList[key].text, 110, showColList[key])
      } else if (key === 'Chart') {
        return {
          field: 'Chart',
          headerName: tableColList[key].text,
          width: 90,
          renderCell: (params) => (
            <IconButton
              size="small"
              aria-haspopup="true"
              onClick={ async () => {
                const resp_data = await GetDataByFetchObj(params.row['ChartUrl'], fetchForecastQuoteData)
                console.log(resp_data)
                if (resp_data.length > 0) {
                  let stockData = []
                  let trendData = []
                  let info = { symbol: params.row['Symbol']}
                  // {"Date":"12/26/2021","Close":"-","Predict":16.228974118231985,"Predict_Upper":17.094573558273776,"Predict_Lower":15.283983613772198,"Trend":2.7869199587015787,"Trend_Upper":2.8005154366707754,"Trend_Lower":2.7728914911786458}
                  resp_data.forEach((value, index) => {
                    let s = { "Date": value.Date, "PredictUpperAndLower": [value.Predict_Lower.toFixed(3), value.Predict_Upper.toFixed(3)], "Predict": value.Predict.toFixed(3) }
                    if (value.Close !== "-") {
                      s["Close"] = value.Close
                    }
                    stockData.push(s)
                    let t = { "Date": value.Date, "TrendUpperAndLower": [value.Trend_Lower.toFixed(3), value.Trend_Upper.toFixed(3)], "Trend": value.Trend.toFixed(3) }
                    trendData.push(t)
                  })
                  stockData.reverse()
                  trendData.reverse()
                  modalWindowRef.current.popModalWindow(<ForecastChart stockData={stockData} trendData={trendData} info={info} />)
                } else {
                  alert("Get chart data failed...")
                  console.error("Get chart data failed...")
                }
              }}
            >
              <BarChartSharpIcon color="primary" style={{ fontSize: 40 }} />
            </IconButton>
          ),
          colShow: showColList['Chart']
        }
      } else {
        return KMBTField(key, tableColList[key].text, 130, 2, showColList[key])
      }
    })
  }

  const getTableCol = ()=>{
    return getTableColTemplate(showColListRef.current).reduce((accumulator, currentValue) => {
      if (currentValue.colShow) {
        accumulator.push(currentValue)
      }
      return accumulator
    }, [])
  }
  const [tableCol, setTableCol] = useState(getTableCol())

  const renderCheckbox = (key) => {
    return <FormControlLabel
      key={key}
      control={
        <Checkbox
          onChange={() => {
            showColListRef.current[key] = !showColListRef.current[key]
            setTableCol(getTableCol())
          }}
          name={tableColList[key].text}
          color="primary"
          checked={showColListRef.current[key]}
        />
      }
      label={
        <div>{tableColList[key].text}</div>
      }
    />
  }

  return (
    <>
      <div className={forecastTableStyle.container}>
        <div className={forecastTableStyle.showColumn}>
          {Object.keys(showColListRef.current).map((key) => {
            return renderCheckbox(key)
          })}
        </div>
        <div className={forecastTableStyle.table}>
          <DataGrid rows={data} columns={tableCol} scrollbarSize={17} pageSize={50} components={{ noRowsOverlay: DefaultDataGridTable, }} disableSelectionOnClick />
        </div>
      </div>
      <ModalWindow modalWindowRef={modalWindowRef} />
    </>
  )
}

const ForecastTable = ({ tableColList, data, modalWindowRef }) => {
  const appendIdAndTryConvertFloat = (src) => {
    // console.log(src)
    return src.map((value, index) => {
      value.id = index
      //tryConvertFloat
      Object.keys(value).forEach((key) => {
        if (key === 'Market Cap' || key === 'Avg Volume') {
          value[key] = convert2KMBTFloat(value[key])
        } else {
          value[key] = tryConvertFloat(value[key])
        }
      })
      return value
    })
  }
  return (
    <ForecastTableObj tableColList={tableColList} data={appendIdAndTryConvertFloat(data)} />
  )
}

export default ForecastTable
