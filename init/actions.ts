// Types
import { 
  TOGGLE_SIDEBAR,
  FETCH_CHART_DATA,
  FETCH_YANDEX_CHART_DAY_DATA,
  FETCH_YANDEX_CHART_WEEK_DATA,
  FETCH_YANDEX_CHART_MONTH_DATA,
  FETCH_PAYPAL_CHART_DAY_DATA,
  FETCH_PAYPAL_CHART_WEEK_DATA,
  FETCH_PAYPAL_CHART_MONTH_DATA,
  ChartTypes,
  ChartDataTypes,
  toggleSidebarActionTypes,
  fetchChartDataActionTypes,
  fetchYandexChartDayDataActionTypes,
  fetchYandexChartWeekDataActionTypes,
  fetchYandexChartMonthDataActionTypes,
  fetchPaypalChartDayDataActionTypes,
  fetchPaypalChartWeekDataActionTypes,
  fetchPaypalChartMonthDataActionTypes
} from './types';

export const toggleSidebar = (payload: boolean): toggleSidebarActionTypes => {
  return {
    type: TOGGLE_SIDEBAR,
    payload,
  };
};

export const fetchChartData = (payload: ChartDataTypes): fetchChartDataActionTypes => {
  return {
    type: FETCH_CHART_DATA,
    payload,
  };
};

export const fetchYandexChartDayData = (payload: ChartTypes[]): fetchYandexChartDayDataActionTypes => {
  return {
    type: FETCH_YANDEX_CHART_DAY_DATA,
    payload,
  };
};

export const fetchYandexChartWeekData = (payload: ChartTypes[]): fetchYandexChartWeekDataActionTypes => {
  return {
    type: FETCH_YANDEX_CHART_WEEK_DATA,
    payload,
  };
};

export const fetchYandexChartMonthData = (payload: ChartTypes[]): fetchYandexChartMonthDataActionTypes => {
  return {
    type: FETCH_YANDEX_CHART_MONTH_DATA,
    payload,
  };
};

export const fetchPaypalChartDayData = (payload: ChartTypes[]): fetchPaypalChartDayDataActionTypes => {
  return {
    type: FETCH_PAYPAL_CHART_DAY_DATA,
    payload,
  };
};

export const fetchPaypalChartWeekData = (payload: ChartTypes[]): fetchPaypalChartWeekDataActionTypes => {
  return {
    type: FETCH_PAYPAL_CHART_WEEK_DATA,
    payload,
  };
};

export const fetchPaypalChartMonthData = (payload: ChartTypes[]): fetchPaypalChartMonthDataActionTypes => {
  return {
    type: FETCH_PAYPAL_CHART_MONTH_DATA,
    payload,
  };
};