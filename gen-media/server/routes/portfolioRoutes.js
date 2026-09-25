import express from "express";

import {
  createPortfolio,
  deletePortfolio,
  getFeaturedPortfolio,
  getPortfolio,
  getPortfolioByCategory,
  getPortfolioBySubcategory,
  getSinglePortfolio,
  searchPortfolios,
  updatePortfolio,
} from "../controllers/portfolioController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getPortfolio);

router.get("/featured", getFeaturedPortfolio);

router.get("/category/:category", getPortfolioByCategory);
router.get("/category/:category/:subcategory", getPortfolioBySubcategory);
router.get("/search", searchPortfolios);
router.get("/:id", getSinglePortfolio);

router.post("/create-portfolio", authMiddleware, createPortfolio);
router.put("/:id", authMiddleware, updatePortfolio);
router.delete("/:id", authMiddleware, deletePortfolio);

export default router;
