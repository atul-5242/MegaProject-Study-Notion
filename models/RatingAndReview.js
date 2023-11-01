const mongoose=require("mongoose");

const ratingAndReviewSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"User",
    },
    rating:{
        type:Number,
        require:true,
    },
    review:{
        type:String,
        require:true,
    }

})

module.exports=mongoose.model("RatingAndReview",ratingAndReviewSchema)