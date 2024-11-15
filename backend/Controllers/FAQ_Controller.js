import Faq_data from "../Models/FAQ_data.js";
console.log(Faq_data);

// Get all FAQs
export const getAllFaq = async (req, res) => {
    try {
        const FAQs = await Faq_data.find();
        res.json(FAQs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Post a new FAQ
export const CreateFaq = async (req, res) => {
    try {
        const { answer, question } = req.body;
        let newFaq = new Faq_data({ answer, question });
        newFaq = await newFaq.save();
        res.status(201).json(newFaq);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
