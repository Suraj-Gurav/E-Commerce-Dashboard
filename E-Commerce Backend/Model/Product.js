const mongoose=require("mongoose");

const productSchema = new mongoose.Schema({
    product:{
        type:String,
        unique:true,
        require:true
    },
    categary:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    company:{
        type:String,
        require:true
    },
    emailId:{
        type:String,
        require:true
    }
});   

module.exports= mongoose.model("product",productSchema);