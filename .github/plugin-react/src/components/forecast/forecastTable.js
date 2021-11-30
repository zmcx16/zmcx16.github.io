import React, { useState, useRef } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

import { tryConvertFloat, convert2KMBTFloat } from '../../common/utils'
import { colorPosGreenNegRedPercentField, PercentField, KMBTField, SymbolNameField, PureFieldWithValueCheck } from '../../common/reactUtils'
import DefaultDataGridTable from '../defaultDataGridTable'

import forecastTableStyle from './forecastTable.module.scss'
import '../muiTablePagination.css'


const ForecastTableObj = ({ tableColList, data }) => {

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
    </>
  )
}

const ForecastTable = ({ tableColList, data }) => {
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
