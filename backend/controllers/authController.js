const User = require("./../models/User");

const signup = async (req, res) => {
  //now when we are signing up we will first check if the user already exist or not
  try {
    //lets first refactor this
    const { name, email, password, role } = req.body;
    //check if existing
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exist , please login with your details",
      });
    } else {
      const newUser = new User({
        name,
        email,
        password,
        role,
      });
    }
    const savedUser = await newUser.save();
  } catch (err) {}
};
