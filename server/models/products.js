const mongoose=require('mongoose');

const Schema = mongoose.Schema;

const productsSchema = mongoose.Schema({
    customer:[customerSchema],
    product:[productSchema],
    advance:{
        type:Number,
        required:true
    } ,
    productdate:{
        type:Date,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    isVideo:{
        type:Boolean,
        required:true
    },
    isAlbum:{
        type:Boolean,
        required:true
    },
    isBride:{
        type:Boolean,
        required:true
    }
});

module.exports = mongoose.model('products',productSchema,'productDetails');