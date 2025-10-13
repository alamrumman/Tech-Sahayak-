const express = require("express");
const router = express.Router();

// 1. Import your controller functions
const { signup, login } = require("../controllers/auth.Controller"); // Adjust path if needed

// 2. Define the API endpoints and link them to the controller functions
// When a POST request is made to '/signup', run the signup function.
router.post("/signup", signup);

// When a POST request is made to '/login', run the login function.
router.post("/login", login);

// 3. Export the router to be used in your main server file
module.exports = router;
