const productModel = require("../models/productmodel");
const { ObjectId } = require('mongodb');
const fs=require('fs')

const ins = async(req,res)=>{
       let id=req.body.prId
     let result=''
    if(req.file != undefined){
        req.body.productImage =req.file.filename
        if(id!==''){
            req.body.prId = new ObjectId(req.body.prId)
            let data=await productModel.findById(id)
            //data catimage
             fs.unlink("public/uploads/" +data.productImage,(err)=>{

if(err){
    console.log(err)
    console.log("error")
}
else
    console.log('file uploaded')

    })
        }
    }
 
  let data = await productModel.insertOne(req.body);
  if(data){
    return res.json({
        "msg" : "Data inserted successfully..."
    })
  }
  if(result){
    res.redirect('/category')
}
}

const disp = async(req,res)=>{
    let data = await productModel.find({}).populate('catId');
    return res.json({
        "productdata":data,
        "msg":"product info get successfully..."
    })
}
const del = async(req,res)=>{
       //get image name
    let data=await productModel.findById(id)
    //data.catname
    fs.unlink("public/uploads/" +data.productImage,(err)=>{

if(err){
    console.log(err)
    console.log("error")
}
else
    console.log('file uploaded')

    })
   
    let result = await productModel.findByIdAndDelete(req.params.id)
    if(result){
        return res.json({
            "msg":"product data deleted successfully..."
        })
    }
}
const edit=async(req,res)=>{
    let data = await productModel.findById(req.params.id).populate('catId');
    if(data){
        return res.json({
            "data":data,
            "msg":"product data get successfully..."
        })
    }
}
const upd=async(req,res)=>{
    let id = new ObjectId(req.params.id)
    let data = await productModel.findByIdAndUpdate(id,req.body)
    if(data){
    return res.json({
        "msg" : "Data updated successfully..."
    })
  }
}
module.exports={ins,disp,del,edit,upd}