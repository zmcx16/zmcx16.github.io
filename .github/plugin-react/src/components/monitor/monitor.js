import React, { useEffect, useRef, createRef } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import shortid from 'shortid'
import Cookies from 'universal-cookie'

import { MonitorURL, COOKIE_KEY_API_TOKEN, COOKIE_KEY_REFRESH_TIME } from '../../common/def'
import { isPositiveInteger } from '../../common/utils'
import { QueryData } from '../../common/reactUtils'

import MonitorSwitch from './monitorSwitch'
import MonitorTable from './monitorTable'

import commonStyle from '../common.module.scss'
import monitorStyle from './monitor.module.scss'

const Monitor = () => {

  const config = require('../../common/config')
  const monitorConfig = config.getMonitorConfig() // config.js also used on nodejs
  const cookies = new Cookies()

  if (!cookies.get(COOKIE_KEY_API_TOKEN)){
    cookies.set(COOKIE_KEY_API_TOKEN, 'None', { path: '/' })
  }

  if (!cookies.get(COOKIE_KEY_REFRESH_TIME)) {
    cookies.set(COOKIE_KEY_REFRESH_TIME, '5', { path: '/' })
  }

  const apiTokenRef = useRef("None")
  const refreshTimeMinutesRef = useRef(5)

  const refreshMonitorData = async (monitor_index) => {
    const { resp, ok, err } = await queryMonitorDataRef.current.doPost('/api/StockMineHunterFunc?code=' + apiTokenRef.current.value + '&api=get-monitor-data', {
      monitor_url: monitorConfig.monitor_data[monitor_index].monitor_url,
      max_count: monitorConfig.monitor_data[monitor_index].max_count,
    })
    if (ok && Object.keys(resp).length > 0) {
      monitorTablesRef.current[monitor_index].current.setTable(resp.data, new Date().toLocaleString('en-US'))
    }
    else {
      console.error("refreshMonitorData failed")
    }
  }

  const setDefaultMonitorData = async () => {
    const { resp, ok, err } = await queryLocalDataRef.current.doGet('/plugin-react/monitor_data.json')
    if (ok && Object.keys(resp).length > 0) {
      resp.forEach((value, index) => {
        monitorTablesRef.current[index].current.setTable(value.data, new Date(value.timestamp*1000).toLocaleString('en-US'))
      })
    }
    else {
      alert("Get default monitor data failed...")
      console.error("setDefaultMonitorData failed")
    }
  }

  const monitorTablesRef = useRef([])
  monitorConfig.monitor_data.forEach((value, index) => {
    monitorTablesRef.current[index] = createRef()
    monitorTablesRef.current[index].current = {
      setTable: null
    }
  })

  const monitorSwitchRef = useRef()
  monitorSwitchRef.current = {
    canEnable: () => {
      if (!isPositiveInteger(refreshTimeMinutesRef.current.value)) {
        alert("The refresh time is invalid...")
        return false
      } else if (parseInt(refreshTimeMinutesRef.current.value) < 5) {
        alert("The refresh time must greater than or equal to 5...")
        return false
      }
      return true
    }, 
    getTaskCycleTime: () => {
      return parseInt(refreshTimeMinutesRef.current.value) * 60 * 1000
    }, 
    doTasks: () => {
      monitorConfig.monitor_data.forEach((value, index) => {
        setTimeout(() => {
          refreshMonitorData(index)
        }, 5000 * index)
      })
    }
  }

  const queryLocalDataRef = useRef()
  queryLocalDataRef.current = {
    doGet: null
  }
  const queryMonitorDataRef = useRef()
  queryMonitorDataRef.current = {
    doGet: null
  }

  useEffect(() => {
    // componentDidMount is here!
    // componentDidUpdate is here!
    setDefaultMonitorData()

    return () => {
      // componentWillUnmount is here!
    }
  }, [])

  return (
    <div className={commonStyle.defaultFont + ' ' + monitorStyle.container}>
      <div className={monitorStyle.controlPannel}>
        <Grid container spacing={3}>
          <Grid item xs={5} md={8}>
            <form noValidate autoComplete="off" key={shortid.generate()}>
              <TextField className={monitorStyle.valueText} label={'API Token'} variant="outlined" defaultValue={cookies.get(COOKIE_KEY_API_TOKEN)} size="small" inputRef={apiTokenRef} onChange={(e) => {
                cookies.set(COOKIE_KEY_API_TOKEN, apiTokenRef.current.value, { path: '/' })
              }} />
            </form>
          </Grid>
          <Grid item xs={5} md={2}>
            <form noValidate autoComplete="off" key={shortid.generate()}>
              <TextField className={monitorStyle.valueText} label={'Refresh Time (min)'} variant="outlined" defaultValue={cookies.get(COOKIE_KEY_REFRESH_TIME)} size="small" inputRef={refreshTimeMinutesRef} onChange={(e) => {
                cookies.set(COOKIE_KEY_REFRESH_TIME, refreshTimeMinutesRef.current.value, { path: '/' })
              }} />
            </form>
          </Grid>
          <Grid container item xs={2} md={2} justifyContent="flex-end">
            <div className={monitorStyle.controlToggleContainer} >
              <MonitorSwitch monitorSwitchRef={monitorSwitchRef}/>
            </div>
          </Grid>
        </Grid>
      </div>
      <div>
        {monitorConfig.monitor_data.map((value, index) => {
          return (
            <div key={shortid.generate()} className={monitorStyle.monitorTable} >
              <MonitorTable tableID={value.id} name={value.name} monitorTableRef={monitorTablesRef.current[index]} />
            </div>
          )
        })}
      </div>
      <QueryData serverUrl={''} queryDataRef={queryLocalDataRef} />
      <QueryData serverUrl={MonitorURL} queryDataRef={queryMonitorDataRef}/>
    </div>
  )
}

export default Monitor
