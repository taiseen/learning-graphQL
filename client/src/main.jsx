import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom/client'
import client from './apollo';
import React from 'react'
import App from './App'
import './style/index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>

  </React.StrictMode>,
)
