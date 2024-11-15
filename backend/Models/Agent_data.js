import mongoose, { Mongoose } from "mongoose";

const agentSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    links:{
        facebook:{
            type:String,
            required:true
        },
        twitter: {
            type:String,
            required: true
        },
        whatsapp: {
            type:String,
            required: true
        },
        linkedin: {
            type:String,
            required: true
        },
    }
});

const Agent_data=mongoose.model("Agent_data",agentSchema);
export default Agent_data;