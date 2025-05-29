// import the model
const Todo=require("../models/Todo");
// define the route handler
exports.deleteTodo=async(req,res)=>{
    try{
        // extrect the title and description form the request body
        const {id}=req.params;
        // create new todo object and store in database
    const respose=await Todo.findByIdAndDelete(id);
        res.status(200)
        .json(
            {
                success:true,
                data:respose,
                message:"Deleted successfully"
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