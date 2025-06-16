// src/main.tsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// ESTA É A LINHA MAIS IMPORTANTE DO PROJETO.
// ELA CONECTA TODO O CSS (INCLUINDO O TAILWIND) À SUA APLICAÇÃO.
import './index.css' 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)