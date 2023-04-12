const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../Modules/Users");
const getErrorMessage = require("../Error/error");

const router = express.Router();



// User Signin Route
router.post("/signin", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) throw new Error("Invalid email or password");

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      const error = new Error();
      error.code = 401;
      throw error;
    }

    const payload = {
      id: user._id,
      name: user.name,
    };
    const secret = process.env.JWT_SECRET;
    const token = jwt.sign(payload, secret, { expiresIn: "1h" });

    res.status(200).json({
      message: "User logged in successfully",
      data: {
        user: user,
        token,
      },
    });
  } catch (error) {
    const { message, code } = getErrorMessage(error, error.code);
    res.status(code).send({
      message,
    });
  }
});

// User Signup Route
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error();
      error.code = 409;
      throw error;
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    console.log(error)
    const { message, code } = getErrorMessage(error, error.code);
    res.status(code).send({
      message,
    });
  }
});



module.exports = router;
