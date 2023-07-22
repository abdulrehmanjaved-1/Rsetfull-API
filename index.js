const mongoose = require('mongoose');
const express = require("express");
const app = express();
// mongoose.connect('mongodb+srv://abdulrehmanjaved:BnvH11joVIWwyvbC@cluster1.jywhpnb.mongodb.net/');
const authentiation = require("./Authentication/auth");
const connectbyurl = require("./connection");
// const { Schema } = mongoose;
const userroutes=require("./routes/user");
require('dotenv').config();
const port = process.env.PORT || 3002;


//connection by url
connectbyurl('mongodb+srv://<password>@cluster1.jywhpnb.mongodb.net/')


//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(authentiation);
app.use('/user',userroutes);

//port  
app.listen(port,()=>{
    console.log(`your app is listening at port ${port}`)
})
