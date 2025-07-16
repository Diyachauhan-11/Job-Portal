import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"; // If needed
import cookieParser from "cookie-parser"; // If used

dotenv.config(); // ✅ Very important: loads your .env file

const app = express();

// Middleware
app.use(cors()); // Optional: if frontend is on a different port
app.use(express.json());
app.use(cookieParser());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) =>
    console.log("Some error occurred while connecting to database:", err)
  );

// Example route
app.get("/", (req, res) => {
  res.send("API is working!");
});

// Export the app to be used in server.js
export default app;

