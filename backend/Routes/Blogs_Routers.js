import { getAllBlogs, CreateBlogs, updateBlog ,getBlog } from "../Controllers/Blogs_controller.js";
import express from "express";

const router = express.Router();

router.get("/AllBlogs" ,getAllBlogs);
router.post("/blog" ,CreateBlogs);
router.put("/blog/:id" ,updateBlog);
router.get("/blog/:id",getBlog);

export default router;