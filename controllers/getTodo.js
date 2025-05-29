// import the model
const Todo=require("../models/Todo");
// define the route handler
exports.getTodo=async(req,res)=>{
    try{
        // fetch all the items from database
        const respose=await Todo.find({});
        res.status(200)
        .json(
            {
                success:true,
                data:respose,
                message:"Entire Todo data is fetched successfully"
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
        });

    }
}

exports.getTodoById=async(req,res)=>{
    try{
        const id=req.params.id;
        const todo=await Todo.findById({_id: id});
        if(!todo){
            return res.status(404).json({
                sucess:false,
                message:"No Data found for this id",
            })

        }
        res.status(200)
        .json(
            {
                success:true,
                data:todo,
                message:`Todo ${id} data is fetched successfully`,
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
        });

    }
}