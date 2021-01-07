// Core
import { AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Area } from 'recharts'
import styled from '@emotion/styled'

// Utils
import { chartFormatter, chartSumFormatter } from '../../utils'

// Types
import { ChartTypes } from '../../init/types'

type ChartPropsTypes = {
  data: ChartTypes[]
}

// Styles components
const AreaChartWrap = styled(AreaChart)`
  font-size: 0.72rem;
  color: #6F6F6F;
`

// Component
export function Chart({ data }: ChartPropsTypes) {
  return (
    <ResponsiveContainer
      width='100%'
      height={160}
      >
      <AreaChartWrap
        data={data}
        margin={{ top: 7, right: 17, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.2}/>
            <stop offset="100%" stopColor="#8884d8" stopOpacity={0.1}/>
          </linearGradient>
        </defs>
        <XAxis
          dataKey='date'
          interval="preserveStartEnd"
          reversed
          axisLine={false}
          tickLine={false}
          tickMargin={14}
          tickFormatter={(value: string | number) => chartFormatter(value)}
          />
        <YAxis 
          type="number"
          unit=" &#x20bd;"
          axisLine={false}
          width={80}
          tickLine={false}
          tickMargin={10}
          tickCount={10}
          minTickGap={1}
          interval="preserveStartEnd"
          domain={["dataMin", "dataMax"]}
          tickFormatter={chartSumFormatter}
        />
        <CartesianGrid vertical={false} />
        <Tooltip
          separator=" "
          offset={5}
          contentStyle={{
            padding: 15,
            border: 'none',
            boxShadow: '0px 5px 50px rgba(0, 0, 0, 0.15)'
          }}
          labelStyle={{ color: '#6F6F6F', fontSize: '1rem' }}
          itemStyle={{ color: '#000000', fontSize: '1rem' }}
          cursor={false}
          labelFormatter={(value) => [`Выручка за ${chartFormatter(value, 'long')}`]}
          formatter={(value) => [`${value} ₽`] }
        />
        <Area
          type="monotone"
          dataKey="label"
          stroke="#2E71F3"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorUv)"
          dot={{ strokeWidth: 10, r: 2 }}
          activeDot={{ stroke: 'red', strokeWidth: 10, r: 2 }}
        />
      </AreaChartWrap>
    </ResponsiveContainer>
  );
}