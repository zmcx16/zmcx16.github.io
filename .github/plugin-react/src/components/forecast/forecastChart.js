import React from 'react'
import {
  ComposedChart,
  Line,
  Area,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts'

import moment from 'moment'

const ForecastChart = ({ stockData, trendData, info}) => {
  return (  
    <div style={{ width: (window.innerWidth - 100) + 'px', height: (window.innerHeight - 100) + 'px', maxWidth: '1200px', maxHeight: '800px' }}>
      <ResponsiveContainer width="100%" height="57%">
        <ComposedChart
          data={stockData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" tickFormatter={(tickItem) => {
            return moment(tickItem).format('MM/DD/YYYY')
          }}/>
          <YAxis domain={['auto', 'auto']}/>
          <Tooltip />
          <Legend wrapperStyle={{ bottom: -10 }}/>
          <Line type="monotone" name={`Close of Stock (${info.symbol})`}  strokeWidth={2} dataKey="Close" stroke="#ff7300" dot={false} />
          <Line type="monotone" name={`Predict`} strokeWidth={2} dataKey="Predict" stroke="#00cc00" dot={false} />
          <Area name={`Predict Upper & Lower`} dataKey="PredictUpperAndLower" stroke="#e0b5ff" fill="#e8c9ff" />
        </ComposedChart>
      </ResponsiveContainer>
      <div style={{height:"6%"}}></div>
      <ResponsiveContainer width="100%" height="37%">
        <ComposedChart
          data={trendData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" tickFormatter={(tickItem) => {
            return moment(tickItem).format('MM/DD/YYYY')
          }} />
          <YAxis domain={['auto', 'auto']}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" name={`Trend of Stock (${info.symbol})`} strokeWidth={2} dataKey="Trend" stroke="#00cc00" dot={false} />
          <Area name={`Trend Upper & Lower`} dataKey="TrendUpperAndLower" stroke="#e0b5ff" fill="#e8c9ff" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}


export default ForecastChart
