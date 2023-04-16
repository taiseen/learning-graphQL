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
    },
    Mutation: {
        createNewUser: (_, { newUser }) => {
            const id = (users.length + 1).toString();
            console.log(newUser);
            console.log(id);
            users.push({ id, ...newUser });
            return users.find(user => user.id === id);
        }
    }
};

export default resolvers;