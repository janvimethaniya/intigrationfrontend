const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/finalproject')
.then(()=>console.log('connected!'));

const Schema = mongoose.Schema;
const prSchema = new Schema({
    catId:{
        type:Schema.Types.ObjectId,
        ref:'Category'
    },

    productname: {
        type: String,
        required: true
    },

    productprice: {
        type: Number,
        required: true
    },

    description: {
        type: String
    },

    productImage: {
        type: String,   
        required: true  
    }
});
const prModel = mongoose.model("Product",prSchema);
module.exports = prModel;


