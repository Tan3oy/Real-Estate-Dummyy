import express from "express";
import { getAllFaq, CreateFaq } from "../Controllers/FAQ_Controller.js";

const router = express.Router();

router.get("/allfaqs", getAllFaq);
router.post("/faq", CreateFaq);

export default router;
