const userSchema = require("./../Model/user");
const productSchema = require("./../Model/Product");


exports.signIn = async(req,res)=>{
    try{
        let data = await new userSchema(req.body).save();
        data=data.toObject();
        delete data.password;
        res.json(data);
    }catch(err){
        res.json(err);
    }
};

//login login my
exports.logIn =async (req,res)=>{
    try{
        const data = await userSchema.find();
        res.json(data)
    }catch(err){
        res.json(err);
    }
}         
//login
// exports.logIn =async (req,res)=>{
//     if(req.body.password && req.body.email){
//         const data = await userSchema.findOne(req.body).select("-password");
//         if(data){
//             res.json(data)
//         }else{
//             res.json({resut:"No user found"})
//         }      
//     }else{
//         res.json({resut:"No user found"})
//     }   
// };

//product function
exports.addProduct = async (req,res)=>{
    const product=await new productSchema(req.body).save();
    res.json(product);
};

exports.getProduct = async (req,res)=>{
    const product = await productSchema.find();
   res.json(product);
};

exports.productDelete = async(req,res)=>{
    const product = await productSchema.deleteOne({_id:req.params.productId});
    res.json(product);
};

exports.getUpdateProduct = async(req,res)=>{
    const products = await productSchema.findOne({_id:req.params.productId});
    if(products){
        res.json(products);
    }else{
        res.json({result:"No product Found"})
    }
};

exports.updateProductDatails = async (req,res)=>{
    const datails = await productSchema.updateOne({_id:req.params.productId},{$set:req.body}); 
    res.json(datails);
};

exports.searchProduct = async (req,res)=>{
    const search = await productSchema.find({
        "$or":[
            { product: { $regex : req.params.key } }   
        ]
    });
    res.json(search);
};