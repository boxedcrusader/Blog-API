import express from "express";
import {
    getBlogs,
    getBlogById,
    addBlog,
    editBlog,
    deleteBlog
} from "../controllers/blogController.js";

const router = express.Router();

router.get("/", getBlogs);
router.get("/:id", getBlogById);
router.post("/add", addBlog);
router.patch("/edit/:id", editBlog);
router.delete("/delete/:id", deleteBlog);

export default router;
