import React, { useState, useRef, useEffect } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import { IOSSwitch } from './iOSSwitch'

import monitorSwitchStyle from './monitorSwitch.module.scss'

const MonitorSwitch = ({ monitorSwitchRef }) => {

  const [switchVal, setSwitchVal] = useState(false)

  return (
    <FormControlLabel
      className={monitorSwitchStyle.ControlToggle}
      control={
        <IOSSwitch
          onChange={() => { 
            let val = !switchVal
            monitorSwitchRef.current.onChange(val)
            setSwitchVal(val) 
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
