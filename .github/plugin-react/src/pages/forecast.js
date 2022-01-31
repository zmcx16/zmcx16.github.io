import React from 'react'
import { StylesProvider } from '@mui/styles'

import Forecast from '../components/forecast/forecast'

const ForecastPage = () => {
  return (
    <StylesProvider injectFirst>
      <Forecast />
    </StylesProvider>
  )
}

export default ForecastPage
