import express from "express";
import { getAllFaq, CreateFaq } from "../Controllers/FAQ_Controller.js";

const router = express.Router();

router.post("/faq", CreateFaq);
router.get("/allfaqs", getAllFaq);

export default router;
