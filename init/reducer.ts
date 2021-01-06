// Core
import { createContext } from 'react'

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
  InitialStateTypes,
  ContextAppTypes,
  RootReducerActionsTypes
} from './types'

export const initialState: InitialStateTypes = {
  sidebar: true,
  maxProceeds: 80000,
  chartData: {
    yandex: {
      day: [],
      week: [],
      month: []
    },
    paypal: {
      day: [],
      week: [],
      month: []
    }
  }
};

export const ContextApp = createContext<ContextAppTypes>({ state: initialState, dispatch: () => {} });

export const rootReducer = (state = initialState, action: RootReducerActionsTypes): InitialStateTypes => {
  switch(action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebar: action.payload,
      }

    case FETCH_CHART_DATA:
      return {
        ...state,
        chartData: action.payload,
      }

    case FETCH_YANDEX_CHART_DAY_DATA:
      return {
        ...state,
        chartData: {
          ...state.chartData,
          yandex : {
            ...state.chartData.yandex,
            day: action.payload,
          },
        }
      }

    case FETCH_YANDEX_CHART_WEEK_DATA:
      return {
        ...state,
        chartData: {
          ...state.chartData,
          yandex : {
            ...state.chartData.yandex,
            week: action.payload,
          },
        }
      }

    case FETCH_YANDEX_CHART_MONTH_DATA:
      return {
        ...state,
        chartData: {
          ...state.chartData,
          yandex : {
            ...state.chartData.yandex,
            month: action.payload,
          },
        }
      }

      case FETCH_PAYPAL_CHART_DAY_DATA:
      return {
        ...state,
        chartData: {
          ...state.chartData,
          paypal : {
            ...state.chartData.paypal,
            day: action.payload,
          },
        }
      }

    case FETCH_PAYPAL_CHART_WEEK_DATA:
      return {
        ...state,
        chartData: {
          ...state.chartData,
          paypal : {
            ...state.chartData.paypal,
            week: action.payload,
          },
        }
      }

    case FETCH_PAYPAL_CHART_MONTH_DATA:
      return {
        ...state,
        chartData: {
          ...state.chartData,
          paypal : {
            ...state.chartData.paypal,
            month: action.payload,
          },
        }
      }

    default:
      return state;
  }
};