import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './app/ui/styles/global.css'
import './app/ui/styles/variables.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
