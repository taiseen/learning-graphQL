import { ApolloClient, InMemoryCache } from '@apollo/client';
import { getToken } from './helper/localStorage';
import { serverUrl } from './helper/serverUrl';


const client = new ApolloClient({
    uri: serverUrl,
    cache: new InMemoryCache(),
    headers: {
        authorization: getToken() || '',
    }
});


export default client;