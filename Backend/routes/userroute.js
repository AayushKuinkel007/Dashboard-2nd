const express = require("express");
const userRouter = express.Router();
const authMiddleware = require("../middleware/authmiddleware");

const { sendUserData, login, getUserProfile } = require("../controllers/usercontroller");

// Register route
userRouter.post("/senduserdata", sendUserData);

// Login route
userRouter.post("/login", login);

// Protected profile route (for fetching user details)
userRouter.get("/profile", authMiddleware, getUserProfile)

module.exports = userRouter;
