 import Agent_data from '../Models/Agent_data.js';
console.log(Agent_data);

export const getAllAgents = async (req, res)=>{
    try {
        const agents = await Agent_data.find();
        res.status(201).json(agents)
    } catch (error) {
        res
        .status(500)
        .json({message:error.message})
    }
};

// Post a new Agent
export const CreateAgent = async (req, res) => {
    try {
        const { name, ...rest } = req.body;
        let newAgent = new Agent_data({ name, ...rest });
        newAgent = await newAgent.save();
        res.status(201).json(newAgent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
