const express=require("express");
const app=express();
const PORT=4000;
const conn=require("./db/database");
const cors=require("cors");
app.use(cors());

//middalware function
app.use(express.json());

//router
app.use("/",require("./Route/user"));

//database connection check
conn.connection.on("connected",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("database is connected");
    }
})

//server listen method
app.listen(PORT,(err)=>{
    console.log(`server is working Port:${PORT}`);
});