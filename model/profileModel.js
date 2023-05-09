const mongoose  = require("mongoose")

const Schema=mongoose.Schema;

const profileSchema=new Schema({
  
user:{
    type:mongoose.Types.ObjectId,
    ref:"user"
},
userName:{
        type:String,
        required:true
    },
  profilePicture:{
        type:String,
        required:true
    },
    profession:{
        type:String,
        required:true
    },
   education:{
        type:String,
        required:true
    },
   skills:{
        type:String,
        required:true
    },
   about:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    websiteorlink:{
        type:String,
        required:true
    },
    github:{
        type:String,    
        required:true
    },
    state:{
        type:String,    
        required:true
    },
    projects:{
        type:String,    
        required:true

    },
    certificates:{
        type:String,    
        required:true
    },


})
const profile=mongoose.model("profile",profileSchema)
module.exports=profile