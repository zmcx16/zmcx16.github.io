import React, { useEffect, useState, useRef } from 'react'
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

const STOCK_LIST_OPTIONS = [
  { value: 'hold_stock_list', label: 'Hold Stock List' },
  { value: 'watch_stock_list', label: 'Watch Stock List' }
]

const AIAnalysis = () => {
  const [prompts, setPrompts] = useState([])
  const [symbols, setSymbols] = useState([])
  const [selectedPrompt, setSelectedPrompt] = useState('')
  const [selectedSymbol, setSelectedSymbol] = useState('')
  const [analysisContent, setAnalysisContent] = useState('')
  const [lastUpdateTime, setLastUpdateTime] = useState('')
  const [loading, setLoading] = useState(false)
  const [statData, setStatData] = useState({})
  const [selectedStockList, setSelectedStockList] = useState('hold_stock_list')
  const [error, setError] = useState('')

  // Use ref to always have access to latest state values
  const tradeDataRef = useRef({})
  const statDataRef = useRef({})

  // Load trade-data.json to get stock lists
  const loadTradeData = async () => {
    try {
      const response = await fetch('/trade-data.json')
      if (response.ok) {
        const resp = await response.json()
        tradeDataRef.current = resp
        return resp
      } else {
        setError('Failed to load trade data')
        return null
      }
    } catch (err) {
      setError(`Error loading trade data: ${err.message}`)
      return null
    }
  }

  // Load stat.json to get available prompts and symbols
  const loadStatData = async (tradeDataParam, stockListKey = 'hold_stock_list') => {
    try {
      const response = await fetch('/plugin-react/ai-analysis/stat.json')
      if (response.ok) {
        const resp = await response.json()
        setStatData(resp)
        statDataRef.current = resp
        const promptKeys = Object.keys(resp)
        setPrompts(promptKeys)
        
        if (promptKeys.length > 0) {
          setSelectedPrompt(promptKeys[0])
          const stockListSymbols = tradeDataParam?.[stockListKey] || []
          const allSymbolKeys = Object.keys(resp[promptKeys[0]] || {})
          const filteredSymbols = stockListSymbols.length > 0 
            ? allSymbolKeys.filter(s => stockListSymbols.includes(s))
            : allSymbolKeys
          setSymbols(filteredSymbols)
          if (filteredSymbols.length > 0) {
            setSelectedSymbol(filteredSymbols[0])
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

  // Helper function to update symbols based on prompt and stock list
  const updateSymbols = (prompt, stockList, currentSymbol, shouldLoadContent = true) => {
    const td = tradeDataRef.current
    const sd = statDataRef.current
    const stockListSymbols = td?.[stockList] || []
    const allSymbolKeys = Object.keys(sd[prompt] || {})
    const filteredSymbols = stockListSymbols.length > 0
      ? allSymbolKeys.filter(s => stockListSymbols.includes(s))
      : allSymbolKeys
    setSymbols(filteredSymbols)
    
    if (filteredSymbols.length > 0) {
      // Preserve current symbol if it's still in the filtered list
      const symbolToSelect = filteredSymbols.includes(currentSymbol) ? currentSymbol : filteredSymbols[0]
      setSelectedSymbol(symbolToSelect)
      if (shouldLoadContent) {
        loadAnalysisContent(prompt, symbolToSelect)
      }
    } else {
      setSelectedSymbol('')
      setAnalysisContent('')
    }
  }

  // Handle prompt selection change
  const handlePromptChange = (event) => {
    const newPrompt = event.target.value
    setSelectedPrompt(newPrompt)
    updateSymbols(newPrompt, selectedStockList, selectedSymbol)
  }

  // Handle stock list selection change
  const handleStockListChange = (event) => {
    const newStockList = event.target.value
    setSelectedStockList(newStockList)
    updateSymbols(selectedPrompt, newStockList, selectedSymbol)
  }

  // Handle symbol selection change
  const handleSymbolChange = (event) => {
    const newSymbol = event.target.value
    setSelectedSymbol(newSymbol)
    loadAnalysisContent(selectedPrompt, newSymbol)
  }

  // Load initial data
  useEffect(() => {
    const initData = async () => {
      const td = await loadTradeData()
      await loadStatData(td, 'hold_stock_list')
    }
    initData()
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
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth variant="outlined" size="small">
              <InputLabel id="stock-list-select-label">Stock List</InputLabel>
              <Select
                labelId="stock-list-select-label"
                id="stock-list-select"
                value={selectedStockList}
                onChange={handleStockListChange}
                label="Stock List"
              >
                {STOCK_LIST_OPTIONS.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
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
          <Grid item xs={12} sm={6} md={3}>
            <FormControl 
              key={`symbol-form-${selectedStockList}-${selectedPrompt}-${symbols.join(',')}`}
              fullWidth 
              variant="outlined" 
              size="small"
            >
              <InputLabel id="symbol-select-label">Symbol</InputLabel>
              <Select
                labelId="symbol-select-label"
                id="symbol-select"
                value={symbols.includes(selectedSymbol) ? selectedSymbol : ''}
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
          <Grid item xs={12} sm={6} md={3}>
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
