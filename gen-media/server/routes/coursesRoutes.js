import express from "express";
import {
  createCourse,
  deleteCourse,
  getCourses,
  updateCourse,
} from "../controllers/coursesController.js";

const router = express.Router();

router.get("/get-courses", getCourses);

router.post("/create-course", createCourse);

router.put("/:id", updateCourse);

router.delete("/:id", deleteCourse);
export default router;
