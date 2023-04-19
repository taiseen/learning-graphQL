import { JWT_SECRET } from '../utils/config.js';
import Quote from '../models/Quote.js';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


const resolvers = {

    Query: {
        // greet: () => 'Hello World...',
        // userName: () => 'Taiseen',

        // Query from Local Database
        // user: (_, { _id }) => users.find(user => user._id === _id),
        // users: () => users,
        // quotes: () => quotes,
        // userQuotes: (_, { userId }) => quotes.filter(user => user.userId === userId),

        // Query from MongoDB
        users: async () => await User.find({}),
        user: async (_, { _id }) => await User.findOne({ _id }),
        quotes: async () => await Quote.find({}).populate('userId', '_id firstName'),
        userQuotes: async (_, { userId }) => await Quote.findOne({ userId }),
    },

    User: {
        // in this (arg) we get parent object...

        // Local Database Search Query...
        // quotes: (user) => quotes.filter(quote => quote.userId === user._id),

        // MongoDB Search Query...
        // with user + his associated Quote is fetch from here...
        quotes: async (user) => await Quote.find({ userId: user._id })
    },

    Mutation: {
        createNewUser: async (_, { newUser }) => {
            const isUserExist = await User.findOne({ email: newUser.email })
            if (isUserExist) {
                throw new Error(`User ${newUser.email} already exist...`);
            }

            const hashPass = await bcrypt.hash(newUser.password, 12); // salting round --> 12

            const newUserCreated = new User({
                ...newUser, // create a new copy of this newUser object... &
                password: hashPass, // override existing password value by this hashPass value...
            })

            // save at mongo db and return this newly save object to client side...
            return await newUserCreated.save();
        },

        loginExistingUser: async (_, { existingUser }) => {

            const isUserExist = await User.findOne({ email: existingUser.email })
            if (!isUserExist) {
                throw new Error(`User ${existingUser.email} not exist...`);
            }

            const isPassMatch = await bcrypt.compare(existingUser.password, isUserExist.password)
            if (!isPassMatch) {
                throw new Error(`User email & password is invalid...`);
            }

            // encrypting user (_id) with JWT_SECRET & then we called it token...
            // so, token encrypting with userId
            const token = jwt.sign({ userId: isUserExist._id }, JWT_SECRET);

            return { token } // must return token as an object...
        },

        createQuote: async (_, { quote }, { userId }) => {
            if (!userId) throw new Error('You must be logged in...');

            await new Quote({ quote, userId }).save();

            return 'Quote created successfully...'
        }

    }

};

export default resolvers;