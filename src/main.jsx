import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Bundle big shoulders and outfit fonts:
import '@fontsource-variable/big-shoulders-display';
import '@fontsource-variable/outfit';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
