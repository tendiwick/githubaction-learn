import express from 'express';

const app= express();

app.get('/',(req,res)=>{
    res.end("Hi this is runnig ON vercel Mode")
})

const port= 3000;

app.listen(port, ()=>{
    console.log("server is running on port "+port)
})