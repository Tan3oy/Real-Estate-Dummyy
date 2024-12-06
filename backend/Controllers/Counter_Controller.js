import Counter_data from "../Models/Counter_data.js";

// Fetch the Counter data
export const getAllCounters=async(req,res)=>{
    try{
        const counters= await Counter_data.find()
        res.json(counters)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

// Create a Counter

export const createCounter=async(req,res)=>{
    try{
        const {title,logo,value}=req.body
        let newCounter= new Counter_data({title,logo,value})
        newCounter= await newCounter.save()
        res.status(201).json(newCounter)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}