const Post = require("../models/Post");
const User = require("../models/User");

const posting = async (req, res) => {
  try {
    const { email, message } = req.body;

    // Validate input
    if (!email || !message) {
      return res
        .status(400)
        .json({ message: "Email and message are required." });
    }

    // Find the user
    const existingUser = await User.findOne({ email: email });
    if (!existingUser) {
      return res
        .status(401)
        .json({ message: "Please login/create an account to make a post." });
    }

    // Create and save the post
    const newPost = new Post({
      message,
      user: existingUser._id,
    });

    const savedPost = await newPost.save();

    // Populate the user info for returning
    const populatedPost = await savedPost.populate("user", "name email");

    res.status(201).json({
      message: "Post created successfully.",
      post: populatedPost,
    });
  } catch (err) {
    console.error("Error creating post:", err);
    res
      .status(500)
      .json({ message: "Server error creating post.", error: err.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("user", "name email") // populate user details
      .sort({ createdAt: -1 }); // latest first

    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Failed to fetch posts" });
  }
};

module.exports = { posting, getAllPosts };
