import mongoose from "mongoose";
const clienSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    image:{
        type:String,
        required: true
    },
    designation:{
        type:String,
        required: true
    },
    quote:{
        type:String,
        required: true
    }
})

const Client_data= new mongoose.model("Client_data", clienSchema)

export default Client_data