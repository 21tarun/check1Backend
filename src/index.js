const express= require('express')
const app= express()
const route=require('./routes/route')
const mongoose= require('mongoose')
app.use(express.json())

const cors= require("cors")
app.use(cors())

mongoose.connect("mongodb+srv://tarun21:tarun1616@cluster0.h0l8mir.mongodb.net/check1",
{useNewUrlParser:true}
).then(()=>console.log("mongodb is connected"))

app.use('/',route)


app.listen(4000,function(){
    console.log("server is running on 4000")
})