import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { dot } from 'node:test/reporters';


const Connection =()=>{

    dotenv.config(); // Load environment variables from .env file

    const URL = process.env.MONGODB_URL; // Get the MongoDB URL from environment variables

    mongoose.connect(URL).then(()=>{
        console.log("Database Connected !");
    }).catch((err => {
        console.log("Error while connecting with database" , err);
    }));

}

export default Connection;