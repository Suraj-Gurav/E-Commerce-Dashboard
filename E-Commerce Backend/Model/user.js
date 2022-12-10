const mongoose=require("mongoose");

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        unique:true
    }
});

module.exports = mongoose.model("e-user",userSchema);