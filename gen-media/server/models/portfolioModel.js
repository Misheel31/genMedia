import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  category: {
    type: [String],
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    default: "",
  },

  pdf: {
    type: String,
    default: "",
  },

  video: {
    type: String,
    default: "",
  },

  videoThumbnail: {
    type: String,
    default: "",
  },

  client: {
    type: String,
  },
  year: {
    type: Number,
  },
  services: {
    type: [String],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Portfolio = mongoose.model("Portfolio", portfolioSchema);

export default Portfolio;
