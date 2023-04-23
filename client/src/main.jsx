import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { getToken } from './helper/localStorage';
import { serverUrl } from './helper/serverUrl';
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import './style/index.css'


const token = getToken();
console.log('token: ' + token);

const client = new ApolloClient({
  uri: serverUrl,
  cache: new InMemoryCache(),
  headers: {
    authorization: token,
  }
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
