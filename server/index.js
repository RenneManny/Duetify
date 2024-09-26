import dotenv from 'dotenv';
dotenv.config(); 
import cookieParser from 'cookie-parser';
import express from 'express';
import connectDb from './database/db.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(express.json()); 
app.use(cookieParser())
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDb();

// Using userRoutes
app.use("/api/user", userRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
