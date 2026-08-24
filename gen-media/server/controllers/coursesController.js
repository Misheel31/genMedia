import Course from "../models/coursesModel.js";

// GET all courses
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).json(courses);
  } catch (error) {
    console.error("Get courses error:", error);

    res.status(500).json({
      message: "Failed to fetch courses",
    });
  }
};

// POST create a new course
const createCourse = async (req, res) => {
  try {
    const { title, description, topics, duration, level, status, price } =
      req.body;

    // Check required fields
    if (!title || !description || !topics || !duration || !level || !price) {
      return res.status(400).json({
        message: "All required fields must be provided",
      });
    }

    // Create course
    const course = await Course.create({
      title,
      description,
      topics,
      duration,
      level,
      price,
      status: status || "available",
    });

    res.status(201).json({
      message: "Course created successfully",
      course,
    });
  } catch (error) {
    console.error("Create course error:", error);

    res.status(500).json({
      message: "Failed to create course",
    });
  }
};

const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, topics, duration, level, status, price } =
      req.body;

    const course = await Course.findByIdAndUpdate(
      id,
      { title, description, topics, duration, level, status, price },
      { new: true },
    );

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    res.status(200).json({
      message: "Course updated successfully",
      course,
    });
  } catch (error) {
    console.error("Update course error:", error);

    res.status(500).json({
      message: "Failed to update course",
    });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findByIdAndDelete(id);

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    res.status(200).json({
      message: "Course deleted successfully",
      course,
    });
  } catch (error) {
    console.error("Delete course error:", error);

    res.status(500).json({
      message: "Failed to delete course",
    });
  }
};

export { createCourse, deleteCourse, getCourses, updateCourse };
