import { gql } from 'apollo-server';

// tag template literals format...
// Blueprints || Schema
// form client side what we can query at server...
// client query is 'greet' & server response back as 'String'... from "resolvers"
// so every query has a dedicated "resolver"...
const typeDefs = gql`

    # Query Type Schema
    # just Read operation...
    type Query{
        # greet: String,
        # userName: String
        user(_id:ID!):User
        users:[User]
        quotes:[QuoteWithIdName]
        userQuotes(userId:ID!):[Quote]
        userProfile:User
    }

    type QuoteWithIdName{
        quote: String
        userId: IdName    
    }

    type IdName{
        _id: String
        firstName: String
    }

    # Object Type Schema
    type User{
        _id:ID!
        firstName:String!
        lastName:String!
        email:String!
        password:String!
        quotes:[Quote]
    }

    # Object Type Schema
    type Quote{
        userId:ID!
        quote:String!
    }

    type Token{
        token:String!
    }

    # Mutation Type Schema
    # just Write operation...
    # Create + Update + Delete... (all together)
    type Mutation{
        # method name + parameter input with type + return value
        createNewUser(newUser:UserInfoInput!):User
        loginExistingUser(existingUser:LoginUserInput!):Token
        createQuote(quote:String!):String
    }

    # Input Type Schema
    input UserInfoInput{
        firstName:String!
        lastName:String!
        email:String!
        password:String!
    }

    # Input Type Schema
    input LoginUserInput{
        email:String!
        password:String!
    }

`

export default typeDefs;