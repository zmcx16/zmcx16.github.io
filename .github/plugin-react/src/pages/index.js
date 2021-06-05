import React from 'react'
import { StylesProvider } from '@material-ui/core/styles'

import App from '../components/app'

const IndexPage = () => {
  return (
    <StylesProvider injectFirst>
      <App/>
    </StylesProvider>
  )
}

export default IndexPage
