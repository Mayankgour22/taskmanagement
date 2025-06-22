const express = require("express");
const app= express();
const UserRoutes = require("./routes/userRoutes")
const AdminRotes = require("./routes/adminRoute")
const cors = require("cors");
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
Port = 8000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
mongoose.connect("mongodb://127.0.0.1:27017/admindb").then(() => {
  console.log("database connected successfully");
});

app.use("/user" , UserRoutes )
app.use("/admin" , AdminRotes )
app.listen( Port, ()=>{
    console.log(`server run on ${Port} port`)
})