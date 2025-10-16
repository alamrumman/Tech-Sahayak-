const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  message: {
    type: String,
    required: [true, "Post message cannot be empty."],
    trim: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  Role: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Post", PostSchema);
