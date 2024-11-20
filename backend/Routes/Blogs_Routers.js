import { getAllBlogs, CreateBlogs } from "../Controllers/Blogs_controller.js";
import express from "express";

const router = express.Router();

router.get("/AllBlogs" ,getAllBlogs);
router.post("/blog" ,CreateBlogs);

export default router;