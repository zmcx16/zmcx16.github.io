import React from 'react'
import { StylesProvider } from '@mui/styles'

import App from '../components/app'

const IndexPage = () => {
  return (
    <StylesProvider injectFirst>
      <App/>
    </StylesProvider>
  )
}

export default IndexPage
