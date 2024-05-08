import express from 'express';
import mongoose from 'mongoose';
import Router from './routes/route.js';
import cors from "cors";
import bodyParser from 'body-parser';

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, ()=>{console.log(`server listening on port ${PORT}`)});
app.use('/', Router);

//Connection
const connection = async()=>{
    const URL = `mongodb+srv://arpit:1234@hotel.so0jawe.mongodb.net/?retryWrites=true&w=majority&appName=Hotel`;
    try{
        console.log("Connecting to mongodb");
        await mongoose.connect(URL);
        console.log("Connected to mongodb");

    }
    catch(error){
        console.log("Error connecting to mongodb", error);
    }
}

connection();

