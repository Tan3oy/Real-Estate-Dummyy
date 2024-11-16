import Pricing_Cards_data from '../Models/Pricing_Cards_data.js';
console.log(Pricing_Cards_data);

export const getAllPricingCardsdata = async (req, res)=>{
    try {
        const PricingCardsdata = await Pricing_Cards_data.find();
        res.status(201).json(PricingCardsdata)
    } catch (error) {
        res
        .status(500)
        .json({message:error.message})
    }
};

// Post a new Agent
export const CreatePricingCardsdata = async (req, res) => {
    try {
        const { name, ...rest } = req.body;
        let newPricingCardsdata = new Pricing_Cards_data({ name, ...rest });
        newPricingCardsdata = await newPricingCardsdata.save();
        res.status(201).json(newPricingCardsdata);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
