import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import NewsData from './services/NewsData.json'
import { Model, createServer } from 'miragejs'
import { BrowserRouter } from 'react-router-dom'

createServer({
  seeds(server) {
    server.db.loadData({
      news: NewsData
    })
  },
  models: {
    news: Model,
  },

  routes() {
    this.namespace = 'api';

    this.get('news', () => {
      return this.schema.all('news').models
    }, {timing: 100})

    this.post('news', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('news', data)
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
