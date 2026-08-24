import express from "express";

import {
  createPortfolio,
  deletePortfolio,
  getFeaturedPortfolio,
  getPortfolio,
  getPortfolioByCategory,
  getSinglePortfolio,
  updatePortfolio,
} from "../controllers/portfolioController.js";

const router = express.Router();

router.post("/create-portfolio", createPortfolio);

router.get("/", getPortfolio);

router.get("/featured", getFeaturedPortfolio);

router.get("/category/:category", getPortfolioByCategory);

router.get("/:id", getSinglePortfolio);
router.put("/:id", updatePortfolio);

router.delete("/:id", deletePortfolio);

export default router;
