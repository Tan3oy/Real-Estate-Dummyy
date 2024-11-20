import mongoose from "mongoose";
const blogsSchema= new mongoose.Schema({
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
    authorImage:{
        type:String,
        reqired:true
    },
})
const Blogs_data = mongoose.model("Blogs_data", blogsSchema)
export default Blogs_data