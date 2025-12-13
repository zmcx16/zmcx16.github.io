import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import commonStyle from '../common.module.scss'
import aiAnalysisStyle from './aiAnalysis.module.scss'

const AIAnalysis = () => {
  const [prompts, setPrompts] = useState([])
  const [symbols, setSymbols] = useState([])
  const [selectedPrompt, setSelectedPrompt] = useState('')
  const [selectedSymbol, setSelectedSymbol] = useState('')
  const [analysisContent, setAnalysisContent] = useState('')
  const [lastUpdateTime, setLastUpdateTime] = useState('')
  const [loading, setLoading] = useState(false)
  const [statData, setStatData] = useState({})
  const [error, setError] = useState('')

  // Load stat.json to get available prompts and symbols
  const loadStatData = async () => {
    try {
      const response = await fetch('/plugin-react/ai-analysis/stat.json')
      if (response.ok) {
        const resp = await response.json()
        console.log('Loaded stat data:', resp)
        setStatData(resp)
        const promptKeys = Object.keys(resp)
        setPrompts(promptKeys)
        
        if (promptKeys.length > 0) {
          setSelectedPrompt(promptKeys[0])
          const symbolKeys = Object.keys(resp[promptKeys[0]] || {})
          setSymbols(symbolKeys)
          if (symbolKeys.length > 0) {
            setSelectedSymbol(symbolKeys[0])
          }
        }
      } else {
        setError('Failed to load AI analysis data')
      }
    } catch (err) {
      setError(`Error loading stat data: ${err.message}`)
    }
  }

  // Load analysis content for selected prompt and symbol
  const loadAnalysisContent = async (prompt, symbol) => {
    if (!prompt || !symbol) {
      setAnalysisContent('')
      return
    }

    setLoading(true)
    setError('')
    
    try {
      const response = await fetch(`/plugin-react/ai-analysis/${prompt}/${symbol}.md`)
      if (response.ok) {
        const text = await response.text()
        setAnalysisContent(text)
        
        // Get last update time from stat data
        if (statData[prompt] && statData[prompt][symbol]) {
          const updateTime = statData[prompt][symbol].last_update_time
          if (updateTime) {
            const date = new Date(updateTime)
            setLastUpdateTime(date.toLocaleString())
          }
        }
      } else {
        setError(`Failed to load analysis for ${symbol}`)
        setAnalysisContent('')
      }
    } catch (err) {
      setError(`Error loading analysis: ${err.message}`)
      setAnalysisContent('')
    }
    
    setLoading(false)
  }

  // Handle prompt selection change
  const handlePromptChange = (event) => {
    const newPrompt = event.target.value
    setSelectedPrompt(newPrompt)
    
    // Update available symbols for this prompt
    const symbolKeys = Object.keys(statData[newPrompt] || {})
    setSymbols(symbolKeys)
    
    if (symbolKeys.length > 0) {
      setSelectedSymbol(symbolKeys[0])
      loadAnalysisContent(newPrompt, symbolKeys[0])
    } else {
      setSelectedSymbol('')
      setAnalysisContent('')
    }
  }

  // Handle symbol selection change
  const handleSymbolChange = (event) => {
    const newSymbol = event.target.value
    setSelectedSymbol(newSymbol)
    loadAnalysisContent(selectedPrompt, newSymbol)
  }

  // Load initial data
  useEffect(() => {
    loadStatData()
  }, [])

  // Load content when prompt or symbol changes
  useEffect(() => {
    if (selectedPrompt && selectedSymbol && Object.keys(statData).length > 0) {
      loadAnalysisContent(selectedPrompt, selectedSymbol)
    }
  }, [selectedPrompt, selectedSymbol, statData])

  const formatPromptName = (prompt) => {
    return prompt
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  return (
    <div className={commonStyle.defaultFont + ' ' + aiAnalysisStyle.container}>
      <div className={aiAnalysisStyle.controlPanel}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={5} md={4}>
            <FormControl fullWidth variant="outlined" size="small">
              <InputLabel id="prompt-select-label">Analysis Type</InputLabel>
              <Select
                labelId="prompt-select-label"
                id="prompt-select"
                value={selectedPrompt}
                onChange={handlePromptChange}
                label="Analysis Type"
              >
                {prompts.map((prompt) => (
                  <MenuItem key={prompt} value={prompt}>
                    {formatPromptName(prompt)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={5} md={4}>
            <FormControl fullWidth variant="outlined" size="small">
              <InputLabel id="symbol-select-label">Symbol</InputLabel>
              <Select
                labelId="symbol-select-label"
                id="symbol-select"
                value={selectedSymbol}
                onChange={handleSymbolChange}
                label="Symbol"
              >
                {symbols.map((symbol) => (
                  <MenuItem key={symbol} value={symbol}>
                    {symbol}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={2} md={4}>
            <Typography variant="body2" color="textSecondary">
              {symbols.length} symbols available
            </Typography>
          </Grid>
        </Grid>
      </div>

      <div className={aiAnalysisStyle.contentContainer}>
        {error && (
          <div className={aiAnalysisStyle.errorMessage}>
            {error}
          </div>
        )}
        
        {loading ? (
          <div className={aiAnalysisStyle.loadingContainer}>
            <CircularProgress />
          </div>
        ) : analysisContent ? (
          <>
            <div className={aiAnalysisStyle.header}>
              <h2 className={aiAnalysisStyle.title}>AI Analysis</h2>
              <span className={aiAnalysisStyle.symbolBadge}>{selectedSymbol}</span>
              <span className={aiAnalysisStyle.promptBadge}>{formatPromptName(selectedPrompt)}</span>
              {lastUpdateTime && (
                <span className={aiAnalysisStyle.updateTime}>
                  Updated: {lastUpdateTime}
                </span>
              )}
            </div>
            <div className={aiAnalysisStyle.markdownContent}>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {analysisContent}
              </ReactMarkdown>
            </div>
          </>
        ) : (
          <div className={aiAnalysisStyle.noDataContainer}>
            <div className={aiAnalysisStyle.noDataIcon}>📊</div>
            <Typography variant="body1">
              Select an analysis type and symbol to view AI analysis
            </Typography>
          </div>
        )}
      </div>
    </div>
  )
}

export default AIAnalysis
