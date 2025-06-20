import express from "express";
import dotenv from 'dotenv'
import { mongodbConnect } from "./config/MongoDb_connect.js";

const app=express();
dotenv.config()




const port =process.env.PORT  || 5000

app.listen(port, ()=>{
    mongodbConnect()
    console.log(`server is running on ${port}`);
    
})