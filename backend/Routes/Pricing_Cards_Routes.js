import {createPricingCardsdata, getAllPricingCardsdata} from "../Controllers/Pricing_Cards_Controller.js"
import express from 'express'

const router=express.Router()

router.get("/allpricingcards",getAllPricingCardsdata)
router.post("/pricingcard",createPricingCardsdata)

export default router