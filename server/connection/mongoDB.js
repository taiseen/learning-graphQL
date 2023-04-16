import { MONGODB_URI } from "../utils/config.js";
import mongoose from "mongoose";

const mongoDB = () => {

    try {
        // Remove console warning...
        mongoose.set('strictQuery', true);
        mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

        console.log("Connected To MongoDB ==> OK ✅");
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default mongoDB;

// mongoose.connection.on('disconnected', () => {
//     console.log('[Listener] ==> MongoDB Disconnected... 🟥');
// })

// mongoose.connection.on('connected', () => {
//     console.log('[Listener] ==> MongoDB Connected... ✅');
// })