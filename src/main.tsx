import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { createServer } from 'miragejs'
import NewsData from './services/NewsData.json'
createServer({
  routes() {
    this.namespace = 'api';

    this.get('/news', () => {
      return NewsData
    })
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
