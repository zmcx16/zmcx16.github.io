import React, { useState, useEffect, useRef, createRef } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import shortid from 'shortid'
import useFetch from 'use-http'

import MonitorSwitch from './monitorSwitch'
import MonitorTable from './monitorTable'

import commonStyle from './common.module.scss'
import monitorStyle from './monitor.module.scss'

const QueryData = ({ serverUrl, queryDataRef }) => {
  const { get, post, response, error } = useFetch(serverUrl, { cachePolicy: 'no-cache' })

  queryDataRef.current = {
    doGet: async (api) => {
      const resp_data = await get(api)
      if (error) {
        console.error(error)
      }
      return { resp: resp_data, ok: response.ok, err: error}
    },
    doPost: async (api, body) => {
      const resp_data = await post(api, body)
      if (error) {
        console.error(error)
      }
      return { resp: resp_data, ok: response.ok, err: error }
    },
  }

  return <></>
}

const Monitor = () => {

  const config = require('../common/config')
  const monitorConfig = config.getMonitorConfig() // config.js also used on nodejs
  const apiTokenRef = useRef("None")
  const refreshTimeMinutesRef = useRef(5)

  const monitoring = useRef(false) 

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
    onChange: (val) => {
      monitoring.current = val
      if (monitoring.current) {
        monitorConfig.monitor_data.forEach((value, index) => {
          setTimeout(() => {
            refreshMonitorData(index)
          }, 5000 * index)
        })
      }
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
          <Grid item xs={8}>
            <form noValidate autoComplete="off" key={shortid.generate()}>
              <TextField className={monitorStyle.valueText} label={'API Token'} variant="outlined" defaultValue={'None'} size="small" inputRef={apiTokenRef} />
            </form>
          </Grid>
          <Grid item xs={2}>
            <form noValidate autoComplete="off" key={shortid.generate()}>
              <TextField className={monitorStyle.valueText} label={'Refresh Time (min)'} variant="outlined" defaultValue={'5'} size="small" inputRef={refreshTimeMinutesRef} />
            </form>
          </Grid>
          <Grid container item xs={2} justify="flex-end">
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
              <MonitorTable name={value.name} monitorTableRef={monitorTablesRef.current[index]} />
            </div>
          )
        })}
      </div>
      <QueryData serverUrl={''} queryDataRef={queryLocalDataRef} />
      <QueryData serverUrl={config.getMonitorURL()} queryDataRef={queryMonitorDataRef}/>
    </div>
  )
}

export default Monitor
