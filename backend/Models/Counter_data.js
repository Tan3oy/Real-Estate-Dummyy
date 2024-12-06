import mongoose from "mongoose";

const counterSchema= new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    logo: {
        type:String,
        required:true
    },
    value: {
        type:Number,
        required:true
    }
})

const Counter_data = mongoose.model("Counter_data", counterSchema)
export default Counter_data