import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

import Admin from "./models/adminModel.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from the project root
dotenv.config({
  path: path.join(__dirname, "../.env"),
});

const createAdmin = async () => {
  try {
    console.log("Checking environment variables...");

    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing from .env");
    }

    if (!process.env.ADMIN_EMAIL) {
      throw new Error("ADMIN_EMAIL is missing from .env");
    }

    if (!process.env.ADMIN_PASSWORD) {
      throw new Error("ADMIN_PASSWORD is missing from .env");
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is missing from .env");
    }

    console.log("Environment variables loaded.");
    console.log("Admin email:", process.env.ADMIN_EMAIL);

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    const existingAdmin = await Admin.findOne({
      email: process.env.ADMIN_EMAIL.toLowerCase().trim(),
    });

    if (existingAdmin) {
      console.log("Admin already exists.");
      await mongoose.disconnect();
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 12);

    const admin = await Admin.create({
      email: process.env.ADMIN_EMAIL.toLowerCase().trim(),
      password: hashedPassword,
    });

    console.log("Admin created successfully:");
    console.log(admin.email);

    await mongoose.disconnect();

    process.exit(0);
  } catch (error) {
    console.error("Failed to create admin:", error);

    await mongoose.disconnect();

    process.exit(1);
  }
};

createAdmin();
