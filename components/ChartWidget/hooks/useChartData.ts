// Core
import {  useState, useEffect, useContext } from 'react'

// Utils
import { proceedsFormatter } from '../proceedsFormatter'

// Types
import { ContextApp } from '../../../init/reducer'
import { ChartTypes } from '../../../init/types'

export type TypeTypes = 'yandex' | 'paypal';

type DataTypeTypes = 'day' | 'week' | 'month';

export function useChartData(type: TypeTypes, value: string) {
  const { state: { chartData } } = useContext(ContextApp);
  const [data, setData] = useState<ChartTypes []>([]);
  
  const proceeds = proceedsFormatter(data);
  
  const switchData = (type: TypeTypes, dataType: DataTypeTypes) => {
    setData(chartData[type][dataType]);
  }

  useEffect(() => {
    switch(value) {
      case 'День':
        switchData(type, 'day');
        break;

      case 'Неделя':
        switchData(type, 'week');
        break;

      case 'Месяц':
        switchData(type, 'month');
        break;

      default:
        switchData(type, 'day');
        break;
    }
  }, [value, chartData[type]])

  return {
    ...proceeds,
    data,
  }
}
