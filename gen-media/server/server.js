import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import errorMiddleware from "./middleware/errormiddleware.js";
import contactRoutes from "./routes/contactRoutes.js";
import coursesRoutes from "./routes/coursesRoutes.js";
import enrollmentRoutes from "./routes/enrollmentRoutes.js";
import portfolioRoutes from "./routes/portfolioRoutes.js";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://gen-media-topaz.vercel.app"],

    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Gen Media backend is running");
});

// Routes
app.use("/api", contactRoutes);
app.use("/api/courses", coursesRoutes);
app.use("/api/portfolios", portfolioRoutes);
app.use("/api/enrollments", enrollmentRoutes);

// Error middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });
