import express from 'express';
import *  as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mobgo db/connect.js';

dotenv.config();
    
const app=express();
app.use(cors());
app.use(express.json({limit:'50mb'}));

app.get('/',async(reg,res)=>{
    res.send('Hello from Ajay');
});

const startserver = async () => {
    try{
        connectDB(process.env.MONGODB_URL);
        app.listen(8080,()=>console.log('server has started on port http://localhost:8080 '))

    } catch (error){
        console.log(error);

    }
    
}

startserver();