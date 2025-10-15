const express = require("express");
const router = express.Router();
const posting = require("../controllers/post.Controller");

// POST /api/post/posts
router.post("/posts", posting);

module.exports = router;
