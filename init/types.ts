// Core
import { Dispatch } from 'react'

export type chartTypes = {
  date: number | string;
  label: number;
}

export type chartDataTypes = chartTypes[]

export type InitialStateTypes = {
  sidebar: boolean;
  maxProceeds: number;
}

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export type toggleSidebarActionTypes = {
  type: typeof TOGGLE_SIDEBAR,
  payload: boolean;
}

export type RootReducerActionsTypes = 
  toggleSidebarActionTypes

export type ContextAppTypes = {
  state: InitialStateTypes,
  dispatch : Dispatch<RootReducerActionsTypes>,
}