import Client_data from "../Models/Client_data.js";

// Fetch the Client data

export const getAllClients = async(req,res)=>{
    try{
        const clients = await Client_data.find()
        res.json(clients)
    }catch(err){
        res.status(500).json({message:err.message})
    }
} 

// Create a new Client 

export const createClient= async(req,res)=>{
    try{
        const {name, ...rest}= req.body
        let newClient = new Client_data({name, ...rest})
        newClient= await newClient.save()
        res.status(201).json(newClient)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}