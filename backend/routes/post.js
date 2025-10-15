const express = require("express");
const router = express.Router();
const { posting, getAllPosts } = require("../controllers/post.Controller");

// ✅ Create post
router.post("/posts", posting);

// ✅ Get all posts
router.get("/posts", getAllPosts);

module.exports = router;
