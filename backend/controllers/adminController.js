const adminModel = require("../models/adminModel")
const TaskModel = require("../models/taskModel")
const loginData=async(req,res)=>{
    const { email, password}=req.body
    try {
        const user = await adminModel.findOne({email:email}) 
        if(!user){
            res.status(400).send({msg:"invalid email"})
        }
        if(user.password!=password){
            res.status(400).send({ msg: "invalid passward" });
        }
        res.status(200).send({msg:"login success" , user})
    } catch (error) {
        console.log(error)
    }
    
}
const showtaskData=async(req,res)=>{
   const  {id}=req.query
   try {
    const task = await TaskModel.find({ uid: id });
    console.log(task);
    res.status(200).send(task);
   } catch (error) {
    console.log(error)
   }
    
}
const uplodetask=async(req,res)=>{
    const { id } = req.query;
    try {
        const task = await TaskModel.findByIdAndUpdate( id , {taskstatus:true});
        res.status(201).send({task : task, msg:"Data successfully updated"})   
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
  loginData,
  showtaskData,
  uplodetask
};