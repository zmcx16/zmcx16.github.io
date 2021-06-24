import React, { useState, useRef, useEffect } from 'react'
import { DataGrid, GridOverlay } from '@material-ui/data-grid'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { makeStyles } from '@material-ui/core/styles'
import Cookies from 'universal-cookie'

import { tryConvertFloat, convert2KMBTFloat, convert2KMBTString } from '../common/utils'
import { colorPosGreenNegRedPercentField, percentField, KMBTField } from '../common/reactUtils'

import monitorTableStyle from './monitorTable.module.scss'
import './monitorTable.css'

const useNoDataStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
    '& .ant-empty-img-1': {
      fill: theme.palette.type === 'light' ? '#aeb8c2' : '#262626',
    },
    '& .ant-empty-img-2': {
      fill: theme.palette.type === 'light' ? '#f5f5f7' : '#595959',
    },
    '& .ant-empty-img-3': {
      fill: theme.palette.type === 'light' ? '#dce0e6' : '#434343',
    },
    '& .ant-empty-img-4': {
      fill: theme.palette.type === 'light' ? '#fff' : '#1c1c1c',
    },
    '& .ant-empty-img-5': {
      fillOpacity: theme.palette.type === 'light' ? '0.8' : '0.08',
      fill: theme.palette.type === 'light' ? '#f5f5f5' : '#fff',
    },
  },
  label: {
    marginTop: theme.spacing(1),
  },
}))

function NoDataInTable() {
  const classes = useNoDataStyles()

  return (
    <GridOverlay className={classes.root}>
      <svg
        width="120"
        height="100"
        viewBox="0 0 184 152"
        aria-hidden
        focusable="false"
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(24 31.67)">
            <ellipse
              className="ant-empty-img-5"
              cx="67.797"
              cy="106.89"
              rx="67.797"
              ry="12.668"
            />
            <path
              className="ant-empty-img-1"
              d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
            />
            <path
              className="ant-empty-img-2"
              d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
            />
            <path
              className="ant-empty-img-3"
              d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
            />
          </g>
          <path
            className="ant-empty-img-3"
            d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
          />
          <g className="ant-empty-img-4" transform="translate(149.65 15.383)">
            <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
            <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
          </g>
        </g>
      </svg>
      <div className={classes.label}>No Data</div>
    </GridOverlay>
  )
}

const MonitorTableObj = ({ headerKey, headerList, data}) => {
  const cookies = new Cookies()
  // console.log(data)
  const tableColList = {}
  const initTableColList = (headerEnableList)=>{
    headerList.forEach((key, index) => {
      const show = headerEnableList.includes(index)
      if (key !== 'id') {
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
        return colorPosGreenNegRedPercentField(tableColList[key].text, tableColList[key].text, 110, showColList[key])
      } else if (key === 'Dividend' || key === 'Sales Q/Q' || key === 'Sales past 5Y' || key === 'Insider Own' || 
        key === 'Inst Own' || key === 'Gross Margin' || key === 'Oper. Margin' || key === 'Profit Margin' || key === 'Float Short' || 
        key === '52W High' || key === '52W Low' || key === '50D High' || key === '50D Low'){
        return percentField(tableColList[key].text, tableColList[key].text, 110, showColList[key])
      } else if (key === 'Market Cap' || key === 'Volume' || key === 'Avg Volume') {
        return KMBTField(tableColList[key].text, tableColList[key].text, 110, showColList[key])
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
          <DataGrid rows={data} columns={tableCol} scrollbarSize={17} pageSize={50} components={{ noRowsOverlay: NoDataInTable, }} disableSelectionOnClick />
        </div>
      </div>
    </>
  )
}

const MonitorTable = ({tableID, name, monitorTableRef}) => {
  const config = require('../common/config')
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
