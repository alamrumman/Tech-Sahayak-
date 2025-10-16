const Post = require("../models/Post");
const User = require("../models/User");

const posting = async (req, res) => {
  try {
    const { email, message } = req.body;

    if (!email || !message) {
      return res
        .status(400)
        .json({ message: "Email and message are required." });
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res
        .status(401)
        .json({ message: "Please login or create an account to make a post." });
    }

    const newPost = new Post({
      message,
      user: existingUser._id,
      Role: existingUser.Role,
    });

    const savedPost = await newPost.save();

    res.status(201).json({
      message: "Post created successfully.",
      post: savedPost,
    });
  } catch (err) {
    console.error("Error creating post:", err);
    res.status(500).json({ message: "Server error while creating post." });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    console.error("Error fetching posts:", err);
    res.status(500).json({ message: "Failed to fetch posts." });
  }
};

module.exports = { posting, getAllPosts };
