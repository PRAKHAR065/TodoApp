const express=require('express');
const app=express();

// load conf from .env file
require("dotenv").config();
const PORT=process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());

// import route todo api
const todoRoutes=require("./routes/todo");

// mount todo ASPI routes
app.use("/api/v1",todoRoutes);

app.listen(PORT,()=>{
    console.log(`Server started sucessfully at ${PORT} `);
});

const dbConnect=require("./config/Database");
dbConnect();

app.get("/",(req,res)=>{
    res.send(`<h1>Welcome To HomePage</h1>`);
})