const express = require("express")
const router = express.Router()
const jobo = require("../model/job")

router.get("/", async(req,res) =>{
    try{
        const job1 = await jobo.find()
        res.json(job1)
    }catch(err){
        res.send("Error"+err)
    }
})
router.get("/:id", async(req,res) =>{
    try{
        const showJob = await jobo.findById(req.params.id)
        res.json(showJob)
    }catch(err){
        res.send("Error"+err)
    }
})

router.post("/", async(req,res) =>{
   
        const job4= new jobo(req.body)
        try{
            const newJob= await job4.save()
            res.json(newJob)
    }catch(err){
        res.send("error"+err)
    }
})

module.exports=router;