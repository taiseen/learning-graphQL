import { gql } from 'apollo-server';

// tag template literals format...
// Blueprints || Schema
// form client side what we can query at server...
// client query is 'greet' & server response back as 'String'... from "resolvers"
// so every query has a dedicated "resolver"...
const typeDefs = gql`
    type Query{
        # greet: String,
        # userName: String
        user(id:ID!):User
        users:[User]
        quotes:[Quote]
        userQuotes(userId:ID!):[Quote]
    }

    type User{
        id:ID
        fName:String
        lName:String
        email:String
        password:String
        quotes:[Quote]
    }

    type Quote{
        userId:ID
        quote:String
    }
`;

export default typeDefs;