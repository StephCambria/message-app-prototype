const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const generateToken = require("../config/generateToken");

// ==========================================================
// ==========================================================
// Sign Up Functionality
// ==========================================================
// ==========================================================
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new err("Please fill out all fields");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    res.statusMessage = "User already exists";
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    res.statusMessage = "Unable to create user";
    res.send();
  }
});

// ==========================================================
// ==========================================================
// Login Functionality
// ==========================================================
// ==========================================================

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    res.json({
      _id: user._id,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    res.statusMessage = "Invalid email or password";
    res.send();
  }
});

module.exports = { registerUser, authUser };
