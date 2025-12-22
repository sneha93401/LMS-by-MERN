import express from "express";
import cors from 'cors'
import 'dotenv/config'

// intialize express 

const app = express();

// Middlewares
app.use(cors())

// routes

app.get('/',(req,res)=> res.send('Api working'))

// port

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log('server is running on ', PORT)
})