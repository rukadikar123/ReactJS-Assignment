import express from "express";
import dotenv from 'dotenv'
import { mongodbConnect } from "./config/MongoDb_connect.js";
import cors from 'cors'
import itemRoutes from './Routes/Item.routes.js'

const app=express();
dotenv.config()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:"https://reactjs-assignment-item-management-l0gc.onrender.com",
    credentials:true
}))


app.use('/api/item',itemRoutes)

const port =process.env.PORT  || 5000
mongodbConnect()
app.listen(port, ()=>{
    
    console.log(`server is running on ${port}`);
    
})