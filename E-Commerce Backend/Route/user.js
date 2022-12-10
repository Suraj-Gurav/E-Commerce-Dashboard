const express=require("express");
const router=express.Router();

//user router
router.post("/signIn",require("./../Controller/user").signIn);
router.get("/logIn",require("./../Controller/user").logIn);

//product router
router.post("/addProduct",require("./../Controller/user").addProduct);
router.get("/product",require("./../Controller/user").getProduct);
router.delete("/product/:productId",require("./../Controller/user").productDelete);
router.get("/product/:productId",require("./../Controller/user").getUpdateProduct);
router.put("/product/:productId",require("./../Controller/user").updateProductDatails);
router.get("/search/:key",require("./../Controller/user").searchProduct);

module.exports = router;