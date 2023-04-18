import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { JWT_SECRET } from './utils/config.js';
import { ApolloServer } from 'apollo-server';
import mongoDB from './connection/mongoDB.js';
import resolvers from './gql/resolver.js';
import typeDefs from './gql/schema.js';
import jwt from 'jsonwebtoken'


// MongoDB Connection Start...
mongoDB();


// server instance...
const apolloServer = new ApolloServer({
    // middleware...
    context: ({ req }) => {
        const { authorization } = req.headers;
        if (authorization) {
            // by token decryption get userId
            const { userId } = jwt.verify(authorization, JWT_SECRET);
            return { userId };
        }
    },
    typeDefs, // Query & Mutation - type definitions...
    resolvers, // Resolver functions to resolve this Query & Mutation... through DB
    plugins: [
        // like REST Api PostMan, its called PlayGround
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
});


// Default Port 4000
apolloServer.listen().then(({ url }) => { console.log(url) });