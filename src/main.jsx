import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MoviesContextProvider } from './contexts/MoviesContext.jsx'
import { BrowserRouter} from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MoviesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MoviesContextProvider>
  </React.StrictMode>,
)
