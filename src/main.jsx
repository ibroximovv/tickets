import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { GlobalContext } from './context/Context.jsx'
import LazyLoading from './components/LazyLoading.jsx'
import './App.css'

createRoot(document.getElementById('root')).render(
  <GlobalContext>
    <BrowserRouter>
      <Suspense fallback={<LazyLoading />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </GlobalContext>
)
