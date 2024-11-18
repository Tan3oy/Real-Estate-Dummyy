import All_Properties_data from "../Models/All_Properties_data.js";
console.log(All_Properties_data);

// Fetch the All_Properties data    
export const getAllProperties=async(req,res)=>{
    try{
        const properties= await All_Properties_data.find()
        res.json(properties)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

// Post a new Property
export const createProperties=async(req,res)=>{
    try{
        const {name, ...rest}= req.body
        let newProperties= new All_Properties_data({name, ...rest})
        newProperties= await newProperties.save()
        res.status(201).json(newProperties)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}