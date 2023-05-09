const express = require("express")
const router = express.Router()
const user= require("../model/profileModel")
const bcrypt=require('bcrypt');

const saltRounds=10;
router.get("/", async(req,res) =>{
  try{
      const user1 = await user.find()
      res.json(user1)
  }catch(err){
      res.send("Error"+err)
  }
})

router.post("/login", async(req,res) =>{
   
    try{

              const userName=req.body.userName;
              const user=awaituser.find({userName:userName});
              const password=req.body.password
              const hashedpassword=user[0].password;
              const comparisonResult=await bcrypt.compare(password,hashedpassword);
          
              
              res.json(comparisonResult);
        
          }catch(err){
        console.log(err);
          }
          });

  
    

    module.exports.router 