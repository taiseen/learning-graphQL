import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server';
import mongoDB from './connection/mongoDB.js';
import resolvers from './gql/resolver.js';
import typeDefs from './gql/schema.js';


// MongoDB Connection Start...
mongoDB();


// server instance...
const apolloServer = new ApolloServer({
    typeDefs, // Query & Mutation - type definitions...
    resolvers, // Resolver functions to resolve this Query & Mutation... through DB
    plugins: [
        // like REST Api PostMan, its called PlayGround
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
});


// Default Port 4000
apolloServer.listen().then(({ url }) => { console.log(url) });