import React, { useState, useEffect, useRef, createRef } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import shortid from 'shortid'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'
import { IOSSwitch } from './iOSSwitch'

import commonStyle from './common.module.scss'
import monitorStyle from './monitor.module.scss'

const Monitor = () => {

  const apiTokenRef = useRef("None")
  const refreshTimeMinutesRef = useRef(5)
  const monitorUrlRef = useRef("https://")

  const [monitoring, setMonitoring] = useState(false) 

  return (
    <div className={commonStyle.defaultFont + ' ' + monitorStyle.container}>
      <div className={monitorStyle.controlPannel}>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <form noValidate autoComplete="off" key={shortid.generate()}>
              <TextField className={monitorStyle.valueText} label={'API Token'} variant="outlined" defaultValue={'None'} size="small" inputRef={apiTokenRef} />
            </form>
          </Grid>
          <Grid item xs={3}>
            <form noValidate autoComplete="off" key={shortid.generate()}>
              <TextField className={monitorStyle.valueText} label={'Refresh Time (min)'} variant="outlined" defaultValue={'5'} size="small" inputRef={refreshTimeMinutesRef} />
            </form>
          </Grid>
          <Grid container item xs={4} justify="flex-end">
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
          <Grid item xs={10}>
            <form noValidate autoComplete="off" key={shortid.generate()}>
              <TextField className={monitorStyle.valueText} label={'Monitor Url'} variant="outlined" defaultValue={'None'} size="small" inputRef={monitorUrlRef} />
            </form>
          </Grid>
          <Grid item xs={2}>
            <div>
              <Button className={monitorStyle.monitorBtn}  variant="contained" color="primary" startIcon={<SearchIcon />} onClick={() => {
              }}>{'Add Url'}</Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Monitor
