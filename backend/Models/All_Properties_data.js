import mongoose from "mongoose";

const NearestPlaceSchema = new mongoose.Schema({
    schoolLabel: { type: String, default: null },
    schoolDistance: { type: String, default: null },
    busStation: { type: String, default: null },
    busStationDistance: { type: String, default: null },
    railStation: { type: String, default: null },
    railStationDistance: { type: String, default: null },
}, { _id: false });

const allpropertySchema = new mongoose.Schema({
        label: [{ type: String, required: true }],
        imgUrl: { type: String, required: true },
        price: { type: Number, required: true },
        speciality: { type: String, required: true },
        address: { type: String, required: true },
        addButton: { type: String, default: 'Add To Wishlist' },
        reviewAnchor: { type: String, default: '' },
        view: { type: Number, default: 0 },
        featured: { type: Boolean, default: null },
        rating: { type: Number, default: 0 },
        propertyHero_Image: { type: String, required: true },
        propertyType: { type: String, required: true },
        area: { type: Number, required: true },
        bedrooms: { type: Number, required: true },
        bathrooms: { type: Number, required: true },
        rooms: { type: Number, required: true },
        units: { type: Number, required: true },
        floors: { type: Number, required: true },
        kitchens: { type: Number, required: true },
        parking: { type: Number, required: true },
        description: { type: String, default: '' },
        aminities: [{ type: String, required: true }],
        propertyVideo: { type: String, default: '' },
        nearestPlace: { type: [NearestPlaceSchema], default: [] },
        mapAddress: { type: String, required: true }
});

const All_Properties_data = mongoose.model("All_Properties_data", allpropertySchema);

export default All_Properties_data;