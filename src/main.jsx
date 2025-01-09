import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Component.useState/App.jsx'
import AppReducer from './Component.useReducer/App.jsx'
import UseMemoAndUseCallback from './Component.useMemoAndusecallbck/app.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <AppReducer />
    <UseMemoAndUseCallback />
  </StrictMode>,
)
