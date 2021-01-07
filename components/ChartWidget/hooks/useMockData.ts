// Core
import {  useContext } from 'react'

// Actions
import {
  fetchYandexChartDayData,
  fetchYandexChartWeekData,
  fetchYandexChartMonthData,
  fetchPaypalChartDayData,
  fetchPaypalChartWeekData,
  fetchPaypalChartMonthData
} from '../../../init/actions'

// Utils
import { mockChartData, getCurrentMonthLength } from '../../../utils'

// Types
import { TypeTypes } from './useChartData'
import { ContextApp } from '../../../init/reducer'

export function useMockData() {
  const { dispatch } = useContext(ContextApp);

  function mockDataHandler(type: TypeTypes = 'yandex') {
    switch(type) {
      case 'yandex':
        dispatch(fetchYandexChartDayData(mockChartData(7)))
        dispatch(fetchYandexChartWeekData(mockChartData(7, 'week')))
        dispatch(fetchYandexChartMonthData(mockChartData(getCurrentMonthLength())))
        break;

      case 'paypal':
        dispatch(fetchPaypalChartDayData(mockChartData(7)))
        dispatch(fetchPaypalChartWeekData(mockChartData(7, 'week')))
        dispatch(fetchPaypalChartMonthData(mockChartData(getCurrentMonthLength())))
        break;
    }
  }

  return {
    mockDataHandler
  };
}