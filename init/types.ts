// Core
import { Dispatch } from 'react'

export type ChartTypes = {
  date: number | string;
  label: number;
}

export type ChartDataTypes = {
  yandex: {
    day: ChartTypes[],
    week: ChartTypes[],
    month: ChartTypes[]
  },
  paypal: {
    day: ChartTypes[],
    week: ChartTypes[],
    month: ChartTypes[]
  }
}

export type InitialStateTypes = {
  sidebar: boolean;
  maxProceeds: number;
  chartData: {
    yandex: {
      day: ChartTypes[],
      week: ChartTypes[],
      month: ChartTypes[]
    },
    paypal: {
      day: ChartTypes[],
      week: ChartTypes[],
      month: ChartTypes[]
    }
  }
}

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export type toggleSidebarActionTypes = {
  type: typeof TOGGLE_SIDEBAR,
  payload: boolean;
}

export const FETCH_CHART_DATA = 'FETCH_CHART_DATA';
export type fetchChartDataActionTypes = {
  type: typeof FETCH_CHART_DATA,
  payload: ChartDataTypes;
}

export const FETCH_YANDEX_CHART_DAY_DATA = 'FETCH_YANDEX_CHART_DAY_DATA';
export type fetchYandexChartDayDataActionTypes = {
  type: typeof FETCH_YANDEX_CHART_DAY_DATA,
  payload: ChartTypes[];
}

export const FETCH_YANDEX_CHART_WEEK_DATA = 'FETCH_YANDEX_CHART_WEEK_DATA';
export type fetchYandexChartWeekDataActionTypes = {
  type: typeof FETCH_YANDEX_CHART_WEEK_DATA,
  payload: ChartTypes[];
}

export const FETCH_YANDEX_CHART_MONTH_DATA = 'FETCH_YANDEX_CHART_MONTH_DATA';
export type fetchYandexChartMonthDataActionTypes = {
  type: typeof FETCH_YANDEX_CHART_MONTH_DATA,
  payload: ChartTypes[];
}

export const FETCH_PAYPAL_CHART_DAY_DATA = 'FETCH_PAYPAL_CHART_DAY_DATA';
export type fetchPaypalChartDayDataActionTypes = {
  type: typeof FETCH_PAYPAL_CHART_DAY_DATA,
  payload: ChartTypes[];
}

export const FETCH_PAYPAL_CHART_WEEK_DATA = 'FETCH_PAYPAL_CHART_WEEK_DATA';
export type fetchPaypalChartWeekDataActionTypes = {
  type: typeof FETCH_PAYPAL_CHART_WEEK_DATA,
  payload: ChartTypes[];
}

export const FETCH_PAYPAL_CHART_MONTH_DATA = 'FETCH_PAYPAL_CHART_MONTH_DATA';
export type fetchPaypalChartMonthDataActionTypes = {
  type: typeof FETCH_PAYPAL_CHART_MONTH_DATA,
  payload: ChartTypes[];
}

export type RootReducerActionsTypes = 
  toggleSidebarActionTypes
  | fetchChartDataActionTypes
  | fetchYandexChartDayDataActionTypes
  | fetchYandexChartWeekDataActionTypes
  | fetchYandexChartMonthDataActionTypes
  | fetchPaypalChartDayDataActionTypes
  | fetchPaypalChartWeekDataActionTypes
  | fetchPaypalChartMonthDataActionTypes

export type ContextAppTypes = {
  state: InitialStateTypes,
  dispatch : Dispatch<RootReducerActionsTypes>,
}