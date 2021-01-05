// Utils
import { weekChartFormatter, setMonth } from './index';

export function chartFormatter(value: string | number, dateFormatType: string = 'short') {
  if (typeof value === 'string') {
    return `${value} ${setMonth(dateFormatType, value)}`
  }

  if (typeof value === 'number') {
    return `${weekChartFormatter(value, dateFormatType)}`
  }

  return 'Incorrect value';
}