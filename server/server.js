import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { JWT_SECRET } from './utils/config.js';
import { ApolloServer } from 'apollo-server';
import mongoDB from './connection/mongoDB.js';
import resolvers from './gql/resolver.js';
import typeDefs from './gql/schema.js';
import jwt from 'jsonwebtoken'


// MongoDB Connection Start...
mongoDB();


// common middleware for all resolvers...
const context = ({ req }) => {
    const { authorization } = req.headers;
    console.log(req.headers);
    if (authorization) {
        // by token decryption get userId
        const { userId } = jwt.verify(authorization, JWT_SECRET);
        return { userId };
    }
}


// server instance...
const apolloServer = new ApolloServer({
    context,   // middleware...
    typeDefs,  // Query & Mutation - type definitions...
    resolvers, // Resolver functions to resolve this Query & Mutation... through DB
    plugins: [
        // like REST Api PostMan, its called PlayGround
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
});


// Default Port 4000
apolloServer.listen().then(({ url }) => { console.log(url) });