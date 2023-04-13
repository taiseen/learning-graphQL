import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer, gql } from 'apollo-server';

// tag template literals format...
// Blueprints || Schema
// form client side what we can query at server...
// client query is 'greet' & server response back as 'String'... from "resolvers"
// so every query has a dedicated "resolver"...
const typeDefs = gql`
    type Query{
        greet: String,
        userName: String
    }
`;


const resolvers = {
    Query: {
        greet: () => 'Hello World...',
        userName: () => 'Taiseen',
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