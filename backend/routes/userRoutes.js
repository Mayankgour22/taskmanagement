const express = require("express")
const route = express.Router();
const UserController = require("../controllers/userController");
const userModel = require("../models/userModel");
 route.post("/login" , UserController.loginData)
 route.post("/loginuser" , UserController.loginuser)
 route.post("/createuser" , UserController.createuser)
 route.get("/showuserdata" , UserController.showUserData);
 route.post("/assigntask" ,  UserController.assigntask)
 route.get("/taskdetailes", UserController.showtaskdetailes);
 route.get("/changetaskstatus", UserController.changetaskstatus);
 module.exports=route;