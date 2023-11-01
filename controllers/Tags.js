const Tag=require("../models/tags");
// create tag ka handler function:-
exports.createTag = async (res,req) =>{
    try {
        // fetch data:-
        const {name,description}=req.body;
        if(!name || !description){
            return res.status(400).json({
                success:false,
                message:"All fields are required. Liitle Change for git.",
            });
        }
    } catch (error) {
        
    }
}