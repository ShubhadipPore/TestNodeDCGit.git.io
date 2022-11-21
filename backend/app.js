const express = require('express')
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require("cors");
const router = require('./src/routes/inmaterial.router');

const uri =
  "mongodb+srv://mymongodb:KjnaZ1kwonbdDP25@cluster0.la4tkyv.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(
    uri,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to db")
);


app.use(express.json());
app.use(cors());

app.use("/api/inmaterials", router);


app.get('/', (req,res)=>(
    res.send("Docker Working and Git also ....")));
app.listen(3001,()=>console.log("Server Working"));


