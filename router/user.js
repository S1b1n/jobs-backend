const express = require("express")
const dotenv=require("dotenv")
const router = express.Router()
const user= require("../model/userModel")
const bcrypt=require('bcrypt');
var jwt=require('jsonwebtoken');
const profile=require("../model/profileModel");
// const crypto=require("crypto")
 
dotenv.config(); 

const saltRounds=10;

// TO GET USER

router.get("/", async(req,res) =>{
    try{
        const user1 = await user.find()
        res.json(user1)
    }catch(err){
        res.send("Error"+err)
    }
})

// TO GET USER FROM USERNAME

// router.get("/:userName",async(req,res)=>{
//     try{
//         const userName=req.params.userName
//         const userName1=await user.find({userName:userName},"-password")
//         res.json(userName1[0])
//     }
//     catch(err){
//         console.log(err)
//     }

// })

// TO ADD USER

router.post("/", async(req,res) =>{
  
    try{
        const user3= new user(req.body)
        const password =req.body.password
        const hashPassword=await bcrypt.hash(password,saltRounds)
        user3["password"]=hashPassword
        const newUser=await user3.save()
        res.status(201).send("signup success");
        res.json(newUser)
     
    }catch(err){
        res.status(400).send("sign up failed");
        return;
    }
})
// TO ACCESS TOKEN

function generateAccessToken(userName){
    const token=jwt.sign(userName,process.env.TOKEN_SECRET,{expiresIn:'1800s'});
    return token;
}

// LOGIN ROUTE

router.post("/login", async(req,res) =>{
  try{
    const userName=req.body.userName;
    const user6 = await user.find({userName:userName});
    const password=req.body.password
    const hashedpassword=user6[0].password
    const comparisonResult=await bcrypt.compare(password,hashedpassword);


    if(comparisonResult){
        const token=generateAccessToken({
            userName:userName,
            _id:user6[0]._id
        })
        res.json({
            token:token,
        })
    }else{
        throw"login failed"
    }
    
  }catch(err){
    console.log('cannot find user'+err);
    res.status(404).send("user not found")
    return;
  }
})

router.get("/random",(req,res)=>{
    const secret= crypto.randomBytes(64).toString('hex')
    res.send(secret)
});

module.exports=router;