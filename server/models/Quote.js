import mongoose from "mongoose";

// user | object model for MongoDB
const QuoteSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        quote: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

// register user schema at mongoose...
const Quote = mongoose.model("Quote", QuoteSchema);

export default Quote;