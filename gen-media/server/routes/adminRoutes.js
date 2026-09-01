import express from "express";

import { getAdminProfile, loginAdmin } from "../controllers/adminController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Public login
router.post("/login", loginAdmin);

// Protected admin profile
router.get("/me", authMiddleware, getAdminProfile);

export default router;
