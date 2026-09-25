import express from "express";
import {
  createCourse,
  deleteCourse,
  getCourses,
  updateCourse,
} from "../controllers/coursesController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/get-courses", getCourses);

router.post("/create-course", authMiddleware, createCourse);

router.put("/:id", authMiddleware, updateCourse);

router.delete("/:id", authMiddleware, deleteCourse);
export default router;
