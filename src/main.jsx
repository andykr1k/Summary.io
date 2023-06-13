import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from './contexts/ThemeContext'
import { Background } from './components'
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
      <Background>
        <App />
      </Background>
  </ThemeProvider>
)
