import mongoose from "mongoose";

const pricingCardsSchema= new mongoose.Schema({
        name:{ type: String, required: true },
        price:{ type: String, required: true },
        days:{ type: String, required: true },
        facilities:[
        {
        type: { type: String, required: true },
        count:{ type: mongoose.Schema.Types.Mixed, default: null },
        name:{ type: String, required: true }
        },
        {
        type: { type: String, required: true },
        count:{ type: mongoose.Schema.Types.Mixed, default: null },
        name:{ type: String, required: true }
        },
        {
        type: { type: String, required: true },
        count:{ type: mongoose.Schema.Types.Mixed, default: null },
        name:{ type: String, required: true }
        },
        {
        type: { type: String, required: true },
        count:{ type: mongoose.Schema.Types.Mixed, default: null },
        name:{ type: String, required: true }
        },
        {
        type: { type: String, required: true },
        count:{ type: mongoose.Schema.Types.Mixed, default: null },
        name:{ type: String, required: true }
        },
        {
        type: { type: String, required: true },
        count:{ type: mongoose.Schema.Types.Mixed, default: null },
        name:{ type: String, required: true }
        },
        {
        type: { type: String, required: true },
        count:{ type: mongoose.Schema.Types.Mixed, default: null },
        name:{ type: String, required: true }
        },
        {
        type: { type: String, required: true },
        count:{ type: mongoose.Schema.Types.Mixed, default: null },
        name:{ type: String, required: true }
        },
        {
        type: { type: String, required: true },
        count:{ type: mongoose.Schema.Types.Mixed, default: null },
        name:{ type: String, required: true }
        },
        {
        type: { type: String, required: true },
        count:{ type: mongoose.Schema.Types.Mixed, default: null },
        name:{ type: String, required: true }
        }
        ],
        button_name:{ type: String, required: true }
});

const Pricing_Cards_data= mongoose.model("Pricing_Cards_data",pricingCardsSchema)
export default Pricing_Cards_data

