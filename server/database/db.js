
import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose';

const mongodb = process.env.MONGODBURL;

const connectDb = async () => {
    try {
        await mongoose.connect(mongodb).then(()=>{
            console.log(`Databse connected successfully!!`)
        })
       
    } catch (error) {
        console.log(`Database connection failed:`, error);
    }
};

export default connectDb;
