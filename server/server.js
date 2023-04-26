import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server';
import mongoDB from './connection/mongoDB.js';
import resolvers from './gql/resolver.js';
import typeDefs from './gql/schema.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


// common middleware for all resolvers...
const context = ({ req }) => {
    const { authorization } = req.headers;

    if (authorization) {
        // by token decryption get userId
        const { userId } = jwt.verify(authorization, process.env.JWT_SECRET);
        return { userId };
    }
}


// server instance...
const apolloServer = new ApolloServer({
    typeDefs,  // Query & Mutation - type definitions...
    resolvers, // Resolver functions to resolve this Query & Mutation... through DB
    context,   // middleware...
    plugins: [
        // like REST Api PostMan, its called PlayGround
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
});


// Default Port 4000
apolloServer.listen().then(({ url }) => { console.log(url) });


// MongoDB Connection Start...
mongoDB();