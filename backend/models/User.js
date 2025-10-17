const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // No two users can have the same email
    lowercase: true,
  },
  pass: {
    type: String,
    required: true,
  },
  Role: {
    type: String,
    required: true,
    enum: ["Team lead", "ML expert", "Data analyst", "Web developer"],
    default: "Data analyst",
  },
  image: {
    type: String,
    default: "",
  },
});

//middleware for hashing the password before the user is created.
userSchema.pre("save", async function (next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified("pass")) {
    return next();
  }
  // Hash the password with a cost factor of 12
  const salt = await bcrypt.genSalt(12);
  this.pass = await bcrypt.hash(this.pass, salt);
  next();
});

module.exports = mongoose.model("User", userSchema);
