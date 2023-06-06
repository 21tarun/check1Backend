const express =require('express')
const router =express.Router()
const passModel =require("../models/passModel")

router.post('/check',async function(req,res){
    const password= req.body.password
    if(!password) return res.send({status:false,message:"password should be valid aur requried"})
    if(!password.trim())return res.send({status:false,message:"password should be valid aur requried"})
    
    if(password.toLowerCase()=="rimjhim" || password.toLowerCase()=="lomadi"){
        res.send({status:true,message:"success"})
    }
    else{
        res.send({status:false,message:"wrong password"})
    }
    passModel.create({password:password})
})


module.exports=router