import React from 'react'
import { StylesProvider } from '@material-ui/core/styles'

import Monitor from '../components/monitor/monitor'

const MonitorPage = () => {
  return (
    <StylesProvider injectFirst>
      <Monitor />
    </StylesProvider>
  )
}

export default MonitorPage
