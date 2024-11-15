import Agent_data from "../Models/Agent_data.js";

export const getAllAgents= async (req,res)=>{
    try {
        const agents = await Agent_data.find();
        res.status(201).json(agents)
    } catch (error) {
        res
        .status(500)
        .json({message:error.message})
    }
}