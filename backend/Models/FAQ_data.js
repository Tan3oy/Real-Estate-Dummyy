import mongoose from "mongoose";

const faqSchema= new mongoose.Schema({
    question: String,
    answer: String,
    required: true
})

export default mongoose.model("FAQ", faqSchema)