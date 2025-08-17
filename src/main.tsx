import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
