import express from "express";
import { createPosts, getPosts, updatePosts, deletePost } from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getPosts);
router.post("/", auth, createPosts);
router.patch("/:id", auth, updatePosts);
router.delete("/:id", auth, deletePost);

export default router;
