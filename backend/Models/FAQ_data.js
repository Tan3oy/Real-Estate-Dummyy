import mongoose from "mongoose";

const faqSchema= new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer:{
        type: String,
        required: true
    }
})

const Faq_data= mongoose.model("Faq_data", faqSchema)
export default Faq_data