const express = require("express")
const app= express()
const mongoose = require('mongoose');
const port=3444
const  cors=require("cors")

mongoose.set("strictQuery",false)

main().then(() =>{
  console.log("connect to mongodb")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://s1b1nn:Pd6x0qFDx30yr9lO@cluster0.u2ghfpa.mongodb.net/?retryWrites=true&w=majority ');
}

app.use(express.json())
app.use(cors())

const job2 = require("./router/jobo")
app.use("/jobo",job2)

// const profile2=require("./router/profile")
// app.use("/profile",profile2)

const user2=require("./router/user")
app.use("/user",user2)

// const passwordTest=require("./router/passwordTest")
// app.use("/user",user2)

const login2=require("./router/user")
app.use("/user/login",login2)


const random2=require("./router/user")
app.use("/user/random",random2)

const profile2=require("./router/profile")
app.use("/profile",profile2)

const profileMe2=require("./router/profileMe")
app.use("/profileMe",profileMe2)


app.listen(port,()=>{
    console.log(`app is listening on port:${port}`)
})