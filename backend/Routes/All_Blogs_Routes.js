import { getAllBlogs,updateBlog} from "../Controllers/All_Blogs_Controller.js";
import express from "express";

const router = express.Router();

router.get("/allblogs", getAllBlogs);
router.put("/blog/:id",updateBlog);

export default router;