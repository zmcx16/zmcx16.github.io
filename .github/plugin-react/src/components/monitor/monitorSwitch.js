import React, { useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'

import { IOSSwitch } from '../iOSSwitch'
import { useInterval } from '../../common/reactUtils'

import monitorSwitchStyle from './monitorSwitch.module.scss'

const MonitorSwitch = ({ monitorSwitchRef }) => {

  const [switchVal, setSwitchVal] = useState(false)

  useInterval(() => {
    monitorSwitchRef.current.doTasks()
  }, switchVal ? monitorSwitchRef.current.getTaskCycleTime() : null)

  return (
    <FormControlLabel
      className={monitorSwitchStyle.ControlToggle}
      control={
        <IOSSwitch
          onChange={() => { 
            if (monitorSwitchRef.current.canEnable()) {
              let val = !switchVal
              if (val) {
                monitorSwitchRef.current.doTasks() // do task first time immediately
              }
              setSwitchVal(val) 
            }
          }}
          checked={switchVal}
        />
      }
      labelPlacement='start'
      label={'Monitor'}
    />
  )
}

export default MonitorSwitch
