import React from 'react'
import { StylesProvider } from '@mui/styles'

import AIAnalysis from '../components/ai-analysis/aiAnalysis'

const AIAnalysisPage = () => {
  return (
    <StylesProvider injectFirst>
      <AIAnalysis />
    </StylesProvider>
  )
}

export default AIAnalysisPage
