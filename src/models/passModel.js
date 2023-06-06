const mongoose =require('mongoose')

const passSchema= new mongoose.Schema({
    password:String,
    date:{
        type:String,
        default:Date.now()
    }
})

module.exports= mongoose.model("password",passSchema)