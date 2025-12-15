const categoryModel = require('../models/catModel')

const ins = async(req,res)=>{
    let id=req.body.catid
    let result=''
    if(id!=''){
result=await categoryModel.findByIdAndUpdate(id,req.body)
    }else{
result=await categoryModel.insertOne(req.body)
    }


if(result){
    return res.json({
        "msg":"successfullt inserted...."
    })
}
}
const del = async(req,res)=>{
    let id=req.params.id

   
    let data=await catModel.findByIdAndDelete(id)
   if(result){
    return res.json({
        "msg":"deleted...."
    })
   }

}
const disp = async(req,res)=>{
let data=await categoryModel.find({})
 return res.json({
        "catdata":data,
       
    })
}
const edit = async(req,res)=>{
    let id=req.params.id
    let editData = await categoryModel.findById(id)
    return res.json({
        "editData":editData
    })

}

module.exports = {ins, del, disp, edit}