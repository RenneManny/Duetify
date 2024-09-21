require('dotenv').config()
const express = require('express');
const  mongoose  = require('mongoose');
const PORT=process.env.PORT||5000
// const mongourl=process.env.MONGODBURL 

const app=express();
app.use(express.json())
// app.use(express)
app.get("/",(req,res)=>{
    res.send("AM LISTENING !")
    // console.log()
})
app.listen(PORT,()=>{
    console.log(`Duetify is listening atport ${PORT}`)
})