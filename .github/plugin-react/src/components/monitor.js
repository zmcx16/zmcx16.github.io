import React, { useState, useEffect, useRef, createRef } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import shortid from 'shortid'
import useFetch from 'use-http'

import MonitorSwitch from './monitorSwitch'
import MonitorTable from './monitorTable'

import commonStyle from './common.module.scss'
import monitorStyle from './monitor.module.scss'

const Monitor = () => {

  const MonitorConfig = require('../common/config').getMonitorConfig() // config.js also used on nodejs
  const apiTokenRef = useRef("None")
  const refreshTimeMinutesRef = useRef(5)

  const monitoring = useRef(false) 

  const { get, response, error } = useFetch({ cachePolicy: 'no-cache' })

  const refreshMonitorData = async (monitor_index) => {
    const resp_data = await get('/test_data.json')
    if (response.ok) {
      monitorTablesRef.current[monitor_index].current.setTable(resp_data.data)
    }
    else {
      console.error(error)
    }
  }

  const setDefaultMonitorData = async () => {
    const resp_data = await get('/monitor_data.json')
    if (response.ok) {
      resp_data.forEach((value, index) => {
        monitorTablesRef.current[index].current.setTable(value.data)
      })
    }
    else {
      console.error(error)
    }
  }

  const monitorTablesRef = useRef([])
  MonitorConfig.monitor_data.forEach((value, index) => {
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
        MonitorConfig.monitor_data.forEach((value, index) => {
          setTimeout(() => {
            refreshMonitorData(index)
          }, 5000 * index)
        })
      }
    }
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
        {MonitorConfig.monitor_data.map((value, index) => {
          return (
            <div className={monitorStyle.monitorTable} >
              <Typography className={monitorStyle.monitorTableTitle} key={shortid.generate()} variant="h6">
                {value.name}
              </Typography>
              <MonitorTable key={shortid.generate()} monitorTableRef={monitorTablesRef.current[index]} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Monitor
