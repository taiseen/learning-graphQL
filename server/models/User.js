import mongoose from "mongoose";

// user | object model for MongoDB
const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    }
);

// register user schema at mongoose...
const User = mongoose.model("User", UserSchema);

export default User;