const express = require('express')
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require("cors");
const router = require('./src/routes/inmaterial.router');

dotenv.config();

mongoose.connect(
    process.env.DB_CONNECT,
    {useUnifiedTopology : true, useNewUrlParser : true},
    ()=>console.log("Mongo Connected")

);

app.use(express.json());
app.use(cors());

app.use("/api/inmaterials", router);


app.get('/', (req,res)=>(
    res.send("Docker Working and Git also ....")));
app.listen(3000,()=>console.log("Server Working"));


