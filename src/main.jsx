
import React from 'react';
import { Ripple } from 'react-preloaders';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ripple />
    <App />
  </StrictMode>
)
