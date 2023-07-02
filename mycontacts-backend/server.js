// console.log("asdsakb");

const express = require("express");
const dotenv = require("dotenv").config();


const app = express();

const port = process.env.PORT || 5001;



app.use("/api/contacts",require("./routes/contactsRoutes"));

app.listen(port,()=>{
    console.log(`server is listening at ${port} `);
});