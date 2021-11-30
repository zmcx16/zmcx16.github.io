import React from 'react'
import { StylesProvider } from '@material-ui/core/styles'

import Forecast from '../components/forecast/forecast'

const ForecastPage = () => {
  return (
    <StylesProvider injectFirst>
      <Forecast />
    </StylesProvider>
  )
}

export default ForecastPage
