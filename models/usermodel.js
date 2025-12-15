const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/finalproject')
  .then(() => console.log('Connected!'));
  const Schema = mongoose.Schema;
  
  const userSchema = new Schema({
  username:String,
  useremail:String,
    userpassword:String,
  })
  const userModel=mongoose.model("User",userSchema)
  module.exports=userModel
  