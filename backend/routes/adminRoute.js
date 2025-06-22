const express = require("express")
const route = express.Router();
const AdminController = require("../controllers/adminController")
 route.post("/userlogin", AdminController.loginData);
 route. get("/showtaskData", AdminController.showtaskData);
 route.get("/uplodetask", AdminController.uplodetask);
 module.exports=route;