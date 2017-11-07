const mongoose=require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = mongoose.Schema({
    customername:{
        type:String,
        required:true
    } ,
    address:{
        type:String,
        required:true
    } ,
    phone:{
        type:String,
        required:true
    } ,
    mobile:{
        type:String,
        required:true
    } 
});

module.exports = mongoose.model('customer',eventSchema,'customermaster');