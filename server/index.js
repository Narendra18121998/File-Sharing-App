import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
const app=express();
import ConnectDB from './database/db.js';
ConnectDB();
import cors from 'cors'
app.use(cors());
import router from './routes/route.js'
app.use('/',router)




const port=8000;
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})

