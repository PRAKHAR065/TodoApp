const mongoose=require("mongoose")
require("dotenv").config()
const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("DB connection is sucessfull")
    })
    .catch((error)=>{
        console.log("DB connection is unsucessfull");
        console.error(error.massage);
        process.exit(1);
    })
}
module.exports=dbConnect;