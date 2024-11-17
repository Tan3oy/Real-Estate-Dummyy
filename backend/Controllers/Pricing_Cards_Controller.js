import Pricing_Cards_data from "../Models/Pricing_Cards_data.js";

//fetching Pricing data
export const getAllPricingCardsdata= async(req,res)=>{
    try{
        const PricingCardsdata= await Pricing_Cards_data.find()
        res.json(PricingCardsdata)
    } catch(err){
        res.status(500).json({message:err.message})
    }
}

//Creating Pricing data

export const createPricingCardsdata= async (req,res)=>{
    try{
    const {name, ...rest} =req.body
    let newPricingCardsdata= new Pricing_Cards_data({name, ...rest})
    newPricingCardsdata= await newPricingCardsdata.save()
    res.status(201).json(newPricingCardsdata)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}