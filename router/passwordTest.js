const express = require("express")
const router = express.Router()
const passwordTest = require("../model/profileModel")
const bcrypt=require('bcrypt');

const saltRounds=10;

router.post("/", async(req,res) =>{
    const password =req.body.password
    const hashedPassword=await bcrypt.hash(password,saltRounds)
     res.send(hashedPassword)
    })

    module.exports.router