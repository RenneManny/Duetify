import mongoose from 'mongoose';

const mongodb = process.env.MONGODBURL;

const connectDb = async () => {
    try {
        await mongoose.connect(mongodb);
        console.log("Connected to db");
    } catch (error) {
        console.log(`Database connection failed:`, error);
    }
};

export default connectDb;
