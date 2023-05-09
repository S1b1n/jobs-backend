const mongoose  = require("mongoose")

const Schema=mongoose.Schema;

const jobSchema=new Schema({
  
    company_name:{
        type:String,
        required:true
    },
    job_role:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    job_type:{
        type:String,
        required:true
    },
    job_requirements:{
        type:String,
        required:true
    },
    job_description:{
        type:String,
        required:true
    },
    company_HQ:{
        type:String,
        required:true
    },
    contact_number:{
        type:String,
        required:true
    },
    job_posted:{
        type:String,    
        required:true
    }

})
const jobs=mongoose.model("jobs",jobSchema)
module.exports=jobs
