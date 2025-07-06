const User = require("../models/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Hardcoded JWT secret (for local/private use only)
const jwtSecret = "your_super_secret_key";

exports.sendUserData = async (req, res) => {
  try {
    const { fname, lname, dateofbirth, email, password, role } = req.body;

    console.log("Received Data:", req.body);

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 16);

    const user = await User.create({
      fname,
      lname,
      dateofbirth,
      email,
      password: hashedPassword,
      role,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.fname + " " + user.lname,
        email: user.email,
        role: user.role,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (err) {
    console.error("Error Saving User:", err);
    res.status(500).json({
      message: "User Registration Failed",
      error: err.message,
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log("Login Attempt:", req.body); // ✅

  const user = await User.findOne({ email });
  if (!user) {
    console.log("User not found"); // ✅
    return res.status(401).json({ error: "invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    console.log("Invalid password"); // ✅
    return res.status(401).json({ error: "invalid credentials" });
  }

  // ⏳ Set token to expire in 2 hours
  const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: "2h" });

  console.log("Login Successful. Token:", token); // ✅
  res.json({ token });
};

// controllers/userController.js

exports.getUserProfile = async (req, res) => {
  try {
    // req.user should be set by the auth middleware (see below)
    const user = await User.findById(req.user.id).select("-password"); // exclude password
    console.log("this is from controller", req.user.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ user });
  } catch (err) {
    console.error("Profile fetch error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};
