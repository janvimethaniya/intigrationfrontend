const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/finalproject')
  .then(() => console.log('Connected!'));
  const Schema = mongoose.Schema;
  
  const catSchema = new Schema({
  catId:{
    type:Schema.Types.ObjectId,
    ref:"category"
  },
  
    catname:String
  })
  const catModel=mongoose.model("category",catSchema)
  module.exports=catModel
  