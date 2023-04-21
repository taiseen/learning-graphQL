import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { serverUrl } from './helper/serverUrl';
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import './style/index.css'


const client = new ApolloClient({
  uri: serverUrl,
  cache: new InMemoryCache(),
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>

  </React.StrictMode>,
)
