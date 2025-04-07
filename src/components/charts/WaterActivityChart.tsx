
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { TestResult } from '@/types';
import { WA_WARNING_THRESHOLD, WA_CRITICAL_THRESHOLD } from '@/types';

interface WaterActivityChartProps {
  data: TestResult[];
  height?: number;
}

const WaterActivityChart: React.FC<WaterActivityChartProps> = ({ data, height = 300 }) => {
  // Sort data by date
  const sortedData = [...data].sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  
  // Map data for the chart
  const chartData = sortedData.map(result => ({
    date: new Date(result.createdAt).toLocaleDateString(),
    wa: result.waterActivity,
  }));
  
  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={height}>
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="date"
            tick={{ fontSize: 12 }}
            tickMargin={10}
          />
          <YAxis 
            domain={[0, Math.max(0.8, Math.ceil(Math.max(...data.map(d => d.waterActivity)) * 10) / 10)]}
            tick={{ fontSize: 12 }}
            tickMargin={10}
          />
          <Tooltip 
            formatter={(value: number) => [`${value}`, 'Water Activity']}
            labelFormatter={(label) => `Date: ${label}`}
          />
          <ReferenceLine 
            y={WA_WARNING_THRESHOLD} 
            stroke="#f59e0b" 
            strokeDasharray="3 3"
            label={{ value: 'Warning', position: 'left', fill: '#f59e0b', fontSize: 12 }} 
          />
          <ReferenceLine 
            y={WA_CRITICAL_THRESHOLD} 
            stroke="#ef4444" 
            strokeDasharray="3 3"
            label={{ value: 'Critical', position: 'left', fill: '#ef4444', fontSize: 12 }} 
          />
          <Line 
            type="monotone" 
            dataKey="wa" 
            stroke="#0284c7"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6, stroke: '#0284c7', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WaterActivityChart;
