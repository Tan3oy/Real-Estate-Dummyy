import { faq_data } from "../../frontend/src/Constants/FAQ_data";
import FAQ_data from "../Models/FAQ_data.js";
// import  FAQ from "../Models/FAQ_data.js";

// Get all FAQs

export const getAllFaq= async (req,res)=>{
    try{
        const FAQs =await FAQ_data.find();
        res.json(FAQs)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

//Post all FAQs

export const CreateFaq= async(req,res)=>{
    try{
        const {answer,question}=req.body;
        let newFaq= new faq_data({answer,question});
        newFaq= await newFaq;
        res.status(201).json(newFaq)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}