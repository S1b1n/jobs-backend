const express = require("express")
const router = express.Router()
const profile= require("../model/profileModel")
var jwt=require('jsonwebtoken');
const user=require("../model/userModel");

router.get("/",async(req,res) =>{
    try{
        const profile1 = await profile.find(req.query)
        res.json(profile1)
    }catch(err){
        res.send("profile not found"+err)
    }
})

function authorizeUser(req,res,next){
    const authorizationstring = req.headers.authorization
    if(!authorizationstring){
        res.send("login first")
    }
    const stringtoArray=authorizationstring.split(" ")
    const token=stringtoArray[1]
    if(token){
        jwt.verify(token,process.env.TOKEN_SECRET,function(err,decoded){
            if (err){
                res.send(err)
            }
            if(decoded){
                req.user=decoded
                next()
            }
        })
    }}

router.post("/",authorizeUser, async(req,res) =>{
    const profile3 = new profile({...req.body,user:req.user._id})
    try{
        const newProfile=await profile3.save()
        res.json(newProfile)
    }catch(err){
        res.send("Error"+err)
    }
})

module.exports=router;