let userModel=require('../models/usermodel')
const jwt = require('jsonwebtoken')
const register=async(req,res)=>{
    let result = await userModel.findOne(req.body)
    if(result){
        return res.json({ 
            "msg":"User already exists"
        })
    }
}
const login=async(req,res)=>{
    let result = await userModel.find({useremail:req.body.useremail,
        userpassword:req.body.userpassword
    })
    let secretKey = "abc@1234"

    if(result.length > 0){
        let obj = {
            "useremail":result[0].useremail,
            "userpassword":result[0].userpassword,
        }
        token = jwt.sign(obj,secretKey)
        return res.json({
            "msg":"user login successfully",
            "token":token
        })
     } else{
            return res.json({
                "msg":"Invalid email or password...."
            })
        }
       
        }
    
module.exports={register,login}