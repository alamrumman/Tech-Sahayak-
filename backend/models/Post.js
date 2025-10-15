const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", PostSchema);
