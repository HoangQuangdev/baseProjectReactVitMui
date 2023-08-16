import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme.js'
import AppProvider from './contexts/AppProvider'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <Suspense fallback={<div>loading...</div>}><App />
          </Suspense>
        </ThemeProvider>
      </CssBaseline>
    </AppProvider>
  </React.StrictMode>
)
