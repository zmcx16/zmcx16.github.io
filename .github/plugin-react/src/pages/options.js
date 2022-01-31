import React from 'react'
import { StylesProvider } from '@mui/styles'

import Options from '../components/options/options'

const OptionsPage = () => {
  return (
    <StylesProvider injectFirst>
      <Options />
    </StylesProvider>
  )
}

export default OptionsPage
