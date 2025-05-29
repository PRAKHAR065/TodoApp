// import the model
const Todo=require("../models/Todo");
// define the route handler
exports.createTodo=async(req,res)=>{
    try{
        // extrect the title and description form the request body
        const {title,description}=req.body;
        // create new todo object and store in database
        const respose=await Todo.create({title,description});
        res.status(200)
        .json(
            {
                success:true,
                data:respose,
                message:"Entry created successfully"
            }
        );

    }
    catch(err){
        console.error(err),
        console.log(err),
        res.status(500).json({
            success:false,
            data:"Internal server error",
            message:message(err),
        })

    }
}