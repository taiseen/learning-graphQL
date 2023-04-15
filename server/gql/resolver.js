import { users, quotes } from '../db/fakeData.js';

const resolvers = {
    Query: {
        // greet: () => 'Hello World...',
        // userName: () => 'Taiseen',
        user: (_, { id }) => users.find(user => user.id === id),
        users: () => users,
        quotes: () => quotes,
        userQuotes: (_, { userId }) => quotes.filter(user => user.userId === userId),
    },
    User: {
        // in this (arg) we get parent object...
        quotes: (user) => quotes.filter(quote => quote.userId === user.id)
    }
};

export default resolvers;