import React, { useState, useEffect, useRef, createRef } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import shortid from 'shortid'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'
import useFetch from 'use-http'

import { IOSSwitch } from './iOSSwitch'
import { MonitorConfig } from '../common/config'
import MonitorTable from './monitorTable'

import commonStyle from './common.module.scss'
import monitorStyle from './monitor.module.scss'

const Monitor = () => {

  const apiTokenRef = useRef("None")
  const refreshTimeMinutesRef = useRef(5)

  const [monitoring, setMonitoring] = useState(false) 

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

  const monitorTablesRef = useRef([])
  MonitorConfig.monitor_data.forEach((value, index) => {
    monitorTablesRef.current[index] = createRef()
    monitorTablesRef.current[index].current = {
      setTable: null
    }
  })

  useEffect(() => {
    // componentDidMount is here!
    // componentDidUpdate is here!
    if (monitoring) {
      MonitorConfig.monitor_data.forEach((value, index) => {
        refreshMonitorData(index)
      })
    }

    return () => {
      // componentWillUnmount is here!
    }
  }, [monitoring])


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
            <div className={monitorStyle.ControlToggleContainer} >
              <FormControlLabel
                className={monitorStyle.ControlToggle}
                control={
                  <IOSSwitch
                    onChange={() => { setMonitoring(!monitoring) }}
                    checked={monitoring}
                  />
                }
                labelPlacement='start'
                label={'Monitor'}
              />
            </div>
          </Grid>
        </Grid>
      </div>
      <div>
        {monitorTablesRef.current.map((value, index) => {
          return <MonitorTable key={shortid.generate()} MonitorTableRef={monitorTablesRef.current[index]} />
        })}
      </div>
    </div>
  )
}

export default Monitor
