const UserModel = require("../models/userModel");
const UserPass = require("../middlewares/randomPassward");
var nodemailer = require("nodemailer");
const adminModel = require("../models/adminModel");
const TaskModel = require("../models/taskModel")
const loginData = async (req, res) => {
  const { name, contact, email, password } = req.body;
  try {
    const user = await UserModel.create({
      name: name,
      contact: contact,
      email: email,
      password: password,
    });
    res.status(200).send({ msg: "user succesfully Created!!!" });
  } catch (error) {
    console.log(error);
  }
};
const loginuser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      res.status(401).send({ msg: "invalid email!!!" });
    }
    if (user.password != password) {
      res.status(401).send({ msg: "invalid passward!!!" });
    }
    res.status(200).send({ user, msg: "login success!!!!" });
  } catch (error) {
    console.log(error);
  }
};
const createuser = async (req, res) => {
  const { name, department, email } = req.body;
  const userPassward = UserPass();
  console.log(userPassward);
  const User = await adminModel.create({
    name: name,
    email: email,
    designation: department,
    password: userPassward,
  });
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "gourmayank54@gmail.com",
      pass: "fgjv xtth tzoy ikvg",
    },
  });

  var mailOptions = {
    from: "gourmayank54@gmail.com",
    to: email,
    subject: "Sending Email by Admin",
    text: `Welcome :  ${name}!\n
           Your Password : ${userPassward} \n You can Login With This Password `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email Succ sent: " + info.response);
      res.send(info.response);
    }
  });
};
const showUserData=async(req,res)=>{
  try {
    const user = await adminModel.find();
    res.send(user)
  } catch (error) {
    console.log(error)
  }
  
}
const assigntask=async(req,res)=>{
  const {title,description,complday,uid} = (req.body)
  try {
    const task = await TaskModel.create({
      title: title,
      description: description,
      complday: complday,
      uid: uid
    });
    res.status(201).send({ msg: "User Task Succesfully Assign!" });
  } catch (error) {
    console.log(error)
  }
}
const showtaskdetailes=async(req,res)=>{
   try {
    const task = await TaskModel.find().populate("uid");
    res.status(200).send(task)
   } catch (error) {
    console.log(error)
   }
}
const changetaskstatus=async(req,res)=>{
  const { id } = req.query;
  console.log(req.query);
  try {
    const Task = await TaskModel.findByIdAndUpdate(id, {
      taskstatus: false,
    });
    res.status(201).send("Succesfully updated!!!");
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  loginData,
  loginuser,
  createuser,
  showUserData,
  assigntask,
  showtaskdetailes,
  changetaskstatus
};
