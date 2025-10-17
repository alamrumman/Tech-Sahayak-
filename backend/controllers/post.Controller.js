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
    // include Timestamp here using date.now or time . now , i want it in the format dd-mm-yy , time in am, pm
    const now = new Date();
    const options = {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    const date = now.toLocaleDateString("en-GB", { timeZone: "Asia/Kolkata" }); // gives DD/MM/YYYY
    const time = now.toLocaleTimeString("en-US", options); // gives hh:mm AM/PM
    const formattedDate = date.replaceAll("/", "-"); // convert to DD-MM-YYYY
    const timeStamp = `${formattedDate}, ${time}`;

    const newPost = new Post({
      message,
      user: existingUser._id,
      Role: existingUser.Role,
      timeStamp,
      image: existingUser.image,
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
      .populate("user", "name email image")
      .sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    console.error("Error fetching posts:", err);
    res.status(500).json({ message: "Failed to fetch posts." });
  }
};

module.exports = { posting, getAllPosts };
