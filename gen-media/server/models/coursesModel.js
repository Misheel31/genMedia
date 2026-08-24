import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    duration: {
      type: String,
    },

    level: {
      type: String,
    },

    status: {
      type: String,
      enum: ["available", "coming-soon"],
      default: "available",
    },

    topics: {
      type: [String],
      default: [],
    },

    image: {
      type: String,
    },

    price: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
