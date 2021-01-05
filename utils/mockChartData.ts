// Utils
import { getDate, setRandomProceeds } from './index'

function setDate(number: number) {
  return getDate(number).toLocaleDateString('ru', { day: 'numeric' });
}

export function mockChartData(chartLength: number, type = 'default') {
  const data = [];

  if (type === 'week') {
    for(let i = 0; i < chartLength; i++) {
      data.push({ date: (chartLength - 1) - i, label: setRandomProceeds(9999)});
    }
  }

  if (type === 'default') {
    for(let i = 0; i < chartLength; i++) {
      data.push({ date: setDate(i), label: setRandomProceeds(9999)});
    }
  }

  return data;
}