const mongoose  = require("mongoose")

const Schema=mongoose.Schema;

const userSchema=new Schema({
  
 userName:{
        type:String,
        unique:true,
        required:true,
        
    },
    password:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        unique:true,
        required:true
        
    }
   

})
const user=mongoose.model("user",userSchema)
module.exports=user