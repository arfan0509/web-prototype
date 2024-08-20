const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sequelize = require("./database");
const User = require("./models/user");
const Data = require("./models/data");
const { v4: uuidv4 } = require("uuid");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// Endpoint register
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Name, email, and password are required" });
    }

    const newUser = await User.create({ name, email, password });

    const newData = {
      apiUrl: process.env.VITE_API_URL,
      apiKey: process.env.VITE_API_KEY,
      password: process.env.VITE_PASSWORD,
      uniqueId: uuidv4().toUpperCase().replace(/-/g, "").slice(0, 16),
      datacore: process.env.VITE_DATACORE,
      dataclass: process.env.VITE_DATACLASS,
      recordPerPage: parseInt(process.env.VITE_RECORDSPERPAGE, 10),
      currentPageNo: parseInt(process.env.VITE_CURRENTPAGENO, 10),
      condition: process.env.VITE_CONDITION,
      order: process.env.VITE_ORDER,
      recordCount: parseInt(process.env.VITE_RECORDCOUNT, 10),
      fields: process.env.VITE_FIELDS,
      userId: newUser.id,
      groupId: process.env.VITE_GROUPID,
      businessId: process.env.VITE_BUSINESSID,
    };

    await Data.create(newData);

    res.status(201).json({
      message: "User registered and data saved successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Server error", details: error.message });
  }
});

// Endpoint login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.json({ message: "Login successful", user });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "S