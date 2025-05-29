// import the model
const Todo=require("../models/Todo");
// define the route handler
exports.updateTodo=async(req,res)=>{
    try{
        const {id}=req.params;
        // const id=req.params.id;
        const {title,description}=req.body;
        // const todo=await Todo.findByIdAndUpdate(
        //     {_id: id},
        //     {title,description,updatedAt: Date.now()}
        // )
        const todo = await Todo.findByIdAndUpdate(
            id, 
            { title, description, updatedAt: Date.now() },
            { new: true } // Ensures the updated document is returned
        );
        res.status(200)
        .json(
            {
                success:true,
                data:todo,
                message:`Updated successfully`,
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