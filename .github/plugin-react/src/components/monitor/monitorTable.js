import React, { useState, useRef, useEffect } from 'react'
import { DataGrid, GridOverlay } from '@material-ui/data-grid'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { makeStyles } from '@material-ui/core/styles'
import Cookies from 'universal-cookie'

import { tryConvertFloat, convert2KMBTFloat } from '../../common/utils'
import { colorPosGreenNegRedPercentField, PercentField, KMBTField, SymbolNameField, IndustryNameField } from '../../common/reactUtils'
import DefaultDataGridTable from '../defaultDataGridTable'

import monitorTableStyle from './monitorTable.module.scss'
import '../muiTablePagination.css'


const MonitorTableObj = ({ headerKey, headerList, data}) => {
  const cookies = new Cookies()
  // console.log(data)
  const tableColList = {}
  const initTableColList = (headerEnableList)=>{
    headerList.forEach((key, index) => {
      const show = headerEnableList.includes(index)
      if (key !== 'id' && key !== 'Url' ) {
        tableColList[key] = { show: show, text: key }
      }
    })
  }
  let headerKeyVal = cookies.get(headerKey)
  if (headerKeyVal) {
    initTableColList(headerKeyVal.split`,`.map(x => +x))
  }
  else {
    initTableColList(headerList.map((v,i)=>{return i}))
  }

  const showColListRef = useRef(Object.keys(tableColList).reduce((accumulator, currentValue) => {
    accumulator[currentValue] = tableColList[currentValue].show
    return accumulator
  }, {}))

  const getTableColTemplate = (showColList) => {
    return Object.keys(showColList).map((key) => {
      if (key === 'Change' || key === 'EPS Q/Q' || key === 'EPS next 5Y' || key === 'EPS next Y' || key === 'EPS past 5Y' || 
        key === 'EPS this Y' || key === 'Insider Trans' || key === 'Inst Trans' || key === 'ROA' || key === 'ROE' || 
        key === 'ROI' || key === 'SMA20' || key === 'SMA200' || key.indexOf('Perf ')!=-1) {
        return colorPosGreenNegRedPercentField(tableColList[key].text, tableColList[key].text, 120, showColList[key])
      } else if (key === 'Dividend' || key === 'Sales Q/Q' || key === 'Sales past 5Y' || key === 'Insider Own' || 
        key === 'Inst Own' || key === 'Gross Margin' || key === 'Oper. Margin' || key === 'Profit Margin' || key === 'Float Short' || 
        key === '52W High' || key === '52W Low' || key === '50D High' || key === '50D Low'){
        return PercentField(tableColList[key].text, tableColList[key].text, 120, showColList[key])
      } else if (key === 'Market Cap' || key === 'Volume' || key === 'Avg Volume') {
        return KMBTField(tableColList[key].text, tableColList[key].text, 120, showColList[key])
      } else if (key === 'Ticker') {
        return SymbolNameField(tableColList[key].text, tableColList[key].text, 130, showColList[key])
      } else if (key === 'Name') {
        return IndustryNameField(tableColList[key].text, tableColList[key].text, 250, showColList[key])
      } else {
        return {
          field: tableColList[key].text, headerName: tableColList[key].text, width: 110, colShow: showColList[key]
        }
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

  const setHeaderCookie = ()=>{
    let output = []
    Object.keys(showColListRef.current).map((key, index) => {
      if (showColListRef.current[key]) {
        output.push(index)
      }
    })
    let val = output.join(',')
    cookies.set(headerKey, val, { path: '/' })
  }

  const renderCheckbox = (key) => {
    return <FormControlLabel
      key={key}
      control={
        <Checkbox
          onChange={() => {
            showColListRef.current[key] = !showColListRef.current[key]
            setHeaderCookie()
            setTableCol(getTableCol())
          }}
          name={tableColList[key].text}
          color="primary"
          checked={tableColList[key].show}
        />
      }
      label={
        <div>{tableColList[key].text}</div>
      }
    />
  }

  return (
    <>
      <div className={monitorTableStyle.container}>
        <div className={monitorTableStyle.showColumn}>
          {Object.keys(showColListRef.current).map((key) => {
            return renderCheckbox(key)
          })}
        </div>
        <div className={monitorTableStyle.table}>
          <DataGrid rows={data} columns={tableCol} scrollbarSize={17} pageSize={50} components={{ noRowsOverlay: DefaultDataGridTable, }} disableSelectionOnClick />
        </div>
      </div>
    </>
  )
}

const MonitorTable = ({tableID, name, monitorTableRef}) => {
  const config = require('../../common/config')
  const monitorConfig = config.getMonitorConfig() // config.js also used on nodejs

  monitorTableRef.current = {
    setTable: (data, lastUpdateTime)=>{
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

      const genOrderedHeaderList = (row)=>{
        let headerList = [] 
        monitorConfig.header_order.forEach((item) => {
          if (item in row) {
            headerList.push(item)
          }
        })

        Object.keys(row).forEach((key) => {
          if (!monitorConfig.header_order.includes(key)) {
            headerList.push(key)
          }
        })  
        return headerList
      }

      setMonitorTable(<MonitorTableObj headerKey={tableID + '_header'} headerList={genOrderedHeaderList(data[0])} data={appendIdAndTryConvertFloat(data)}/>)
      setLastUpdateTime('Last Update Time: ' + lastUpdateTime)
    }
  }

  const [monitorTable, setMonitorTable] = useState()
  const [lastUpdateTime, setLastUpdateTime] = useState('Last Update Time: None')

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography className={monitorTableStyle.monitorTableTitle} variant="h6">
            {name}
          </Typography>
        </Grid>
        <Grid container item xs={6} justify="flex-end">
          <Typography className={monitorTableStyle.monitorTableLastUpdateTime} variant="h6">
            {lastUpdateTime}
          </Typography>
        </Grid>
      </Grid>
      {monitorTable}
    </>
  )
}

export default MonitorTable
