const express = require("express")
const router = express.Router()
const profile= require("../model/profileModel")
var jwt=require('jsonwebtoken');
const dotenv=require("dotenv");
dotenv.config();

function authorizeUser(req,res,next){
    const authorizationstring = req.headers.authorization
    // if(!authorizationstring){
    //     res.send("login first")
    // }
    console.log(authorizationstring)

    const stringtoArray=authorizationstring.split(" ")
    const token=stringtoArray[1]
    console.log(token)
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

    router.get("/",authorizeUser,async(req,res) =>{
        try{
            if(req.user){
            const profile1 = await profile.find({user:req.user._id})
            res.json(profile1[0])
            }else{
                throw"invalid user";
            }
        }catch(err){
            res.send("profile not found"+err)
        }
    })


module.exports=router;