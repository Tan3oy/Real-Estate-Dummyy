import mongoose from "mongoose";
const AllblogSchema = new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    day:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    comments:{
        type:Number,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    views:{
        type:Number,
        required:true
    }
    catagories:[{
        type:String
    }]
})
const Blogs_data = mongoose.model("All_Blogs_data", AllblogsSchema)
export default Blogs_data
