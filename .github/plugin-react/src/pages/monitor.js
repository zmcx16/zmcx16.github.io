import React from 'react'
import { StylesProvider } from '@mui/styles'

import Monitor from '../components/monitor/monitor'

const MonitorPage = () => {
  return (
    <StylesProvider injectFirst>
      <Monitor />
    </StylesProvider>
  )
}

export default MonitorPage
