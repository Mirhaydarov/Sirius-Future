// Core
import { useReducer } from 'react'
import { AppProps } from 'next/app';

// Instruments
import { ContextApp, initialState, rootReducer } from '../init/reducer'

// Styles
import '../styles/globals.css'

// Component
function MyApp({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <ContextApp.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />
    </ContextApp.Provider>
  );
}

export default MyApp
