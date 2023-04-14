import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer, gql } from 'apollo-server';
import { users, quotes } from './db/fakeData.js';


// tag template literals format...
// Blueprints || Schema
// form client side what we can query at server...
// client query is 'greet' & server response back as 'String'... from "resolvers"
// so every query has a dedicated "resolver"...
const typeDefs = gql`
    type Query{
        # greet: String,
        # userName: String
        users:[User]
    }

    type User{
        id:ID
        fName:String
        lName:String
        email:String
        password:String
    }
`;


const resolvers = {
    Query: {
        // greet: () => 'Hello World...',
        // userName: () => 'Taiseen',
        users: () => users
    }
};



// server instance...
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        // like REST Api PostMan, its called PlayGround
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
});


// Default Port 4000
apolloServer.listen().then(({ url }) => console.log(url));