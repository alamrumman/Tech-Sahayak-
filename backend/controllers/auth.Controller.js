const User = require("./../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  //now when we are signing up we will first check if the user already exist or not
  try {
    //lets first refactor this
    const { name, email, password, Role } = req.body;
    //check if existing
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exist , please login with your details",
      });
    }
    // create a new user
    const newUser = new User({
      name,
      email,
      password,
      Role,
    });

    const savedUser = await newUser.save();
    res.status(201).json({
      message: "User created successfully!",
      user: {
        id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
        Role: savedUser.Role,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

const login = async (req, res) => {
  // we will refactor, check if the user exist , compare password and add cookies if all true
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email: email });

    if (!existingUser) {
      //compare the hashed password using bcrypt and usejson webtokens to generate cookies
      return res.status(401).json({ message: "Invalid credential" });
    } else {
      const isPasswordcorrect = await bcrypt.compare(
        password,
        existingUser.password
      );

      if (isPasswordcorrect) {
        //now we setup json web token
        const token = jwt.sign(
          {
            id: existingUser._id,
            Role: existingUser.Role,
          },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );
        res.status(201).json({
          message: "user verified",
          token: token,
          existingUser: {
            id: existingUser._id,
            name: existingUser.name,
            Role: existingUser.Role,
          },
        });
      } else {
        return res.status(500).json({ message: "Invalid credential" });
      }
    }
  } catch (err) {
    res.status(500).json({ message: "system error" });
  }
};
module.exports = { signup, login };
