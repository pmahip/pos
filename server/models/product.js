const mongoose=require('mongoose');

const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    productname:{
        type:String,
        required:true
    } 
});

module.exports = mongoose.model('product',productSchema,'productmaster');