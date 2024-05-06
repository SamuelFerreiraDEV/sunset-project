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
      // return [
      //   {
      //     id: 0,
      //     letter: 'a'
      //   },
      //   {
      //     id: 1,
      //     letter: 'b'
      //   },
      //   {
      //     id: 2,
      //     letter: 'c'
      //   },
      // ]
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
