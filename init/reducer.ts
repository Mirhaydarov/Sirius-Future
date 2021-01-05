// Core
import { createContext } from 'react';

// Types 
import {
  TOGGLE_SIDEBAR,
  InitialStateTypes,
  ContextAppTypes,
  RootReducerActionsTypes
} from './types';

export const initialState: InitialStateTypes = {
  sidebar: true,
  maxProceeds: 80000,
};

export const ContextApp = createContext<ContextAppTypes>({ state: initialState, dispatch: () => {} });

export const rootReducer = (state = initialState, action: RootReducerActionsTypes): InitialStateTypes => {
  switch(action.type) {
    case TOGGLE_SIDEBAR: 
      return {
        ...state,
        sidebar: action.payload,
      }

    default:
      return state;
  }
};