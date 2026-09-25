import Portfolio from "../models/portfolioModel.js";
const createPortfolio = async (req, res) => {
  try {
    const {
      title,
      category,
      subcategory,
      description,
      image,
      pdf,
      video,
      videoThumbnail,
      client,
      year,
      services,
      featured,
    } = req.body;

    if (!title || !category || !description) {
      return res.status(400).json({
        message: "All required fields must be provided",
      });
    }
    const project = await Portfolio.create({
      title,
      category,
      subcategory,
      description,
      image,
      pdf,
      video,
      videoThumbnail,
      client,
      year,
      services,
      featured: featured || false,
    });
    res.status(201).json({
      message: "Portfolio project created successfully",
      project,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating portfolio project",
      error: error.message,
    });
  }
};

const getPortfolio = async (req, res) => {
  try {
    const projects = await Portfolio.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching portfolio projects",
      error: error.message,
    });
  }
};

const getFeaturedPortfolio = async (req, res) => {
  try {
    const featuredProjects = await Portfolio.find({ featured: true }).sort({
      createdAt: -1,
    });
    res.status(200).json(featuredProjects);
  } catch (error) {
    console.error("Error fetching featured portfolio projects:", error);

    res.status(500).json({
      message: "Error fetching featured portfolio projects",
      error: error.message,
    });
  }
};

const getPortfolioByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const projects = await Portfolio.find({
      category: { $regex: `^${category}$`, $options: "i" },
    }).sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    console.error("Get portfolio by category:", error);
    res.status(500).json({
      message: "Error fetching portfolio projects by category",
      error: error.message,
    });
  }
};

const getPortfolioBySubcategory = async (req, res) => {
  try {
    const { category, subcategory } = req.params;
    const projects = await Portfolio.find({
      category: { $regex: `^${category}$`, $options: "i" },
      subcategory: { $regex: `^${subcategory}$`, $options: "i" },
    }).sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    console.error("Get portfolio by subcategory:", error);
    res.status(500).json({
      message: "Error fetching portfolio projects by subcategory",
      error: error.message,
    });
  }
};

const getSinglePortfolio = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Portfolio.findById(id);
    if (!project) {
      return res.status(404).json({
        message: "Portfolio project not found",
      });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching portfolio project",
      error: error.message,
    });
  }
};

const updatePortfolio = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await Portfolio.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!project) {
      return res.status(404).json({
        message: "Portfolio project not found",
      });
    }

    res.status(200).json({
      message: "Portfolio project updated successfully",
      project,
    });
  } catch (error) {
    console.error("Update portfolio error:", error);

    res.status(500).json({
      message: "Failed to update portfolio project",
    });
  }
};

// DELETE portfolio project
const deletePortfolio = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await Portfolio.findByIdAndDelete(id);

    if (!project) {
      return res.status(404).json({
        message: "Portfolio project not found",
      });
    }

    res.status(200).json({
      message: "Portfolio project deleted successfully",
    });
  } catch (error) {
    console.error("Delete portfolio error:", error);

    res.status(500).json({
      message: "Failed to delete portfolio project",
    });
  }
};

const searchPortfolios = async (req, res) => {
  console.log("SEARCH ROUTE HIT");
  console.log("Search query:", req.query);

  try {
    const { q } = req.query;

    if (!q || !q.trim()) {
      return res.status(200).json([]);
    }

    const regex = new RegExp(q.trim(), "i");

    const projects = await Portfolio.find({
      $or: [
        { title: regex },
        { category: regex },
        { subcategory: regex },
        { description: regex },
        { services: regex },
        { client: regex },
        { pdf: regex },
        { video: regex },
        { videoThumbnail: regex },
      ],
    });

    console.log("SEARCH RESULTS:", projects);

    return res.status(200).json(projects);
  } catch (error) {
    console.error("SEARCH ERROR:", error);

    return res.status(500).json({
      message: "Search failed",
      error: error.message,
    });
  }
};

export {
  createPortfolio,
  deletePortfolio,
  getFeaturedPortfolio,
  getPortfolio,
  getPortfolioByCategory,
  getPortfolioBySubcategory,
  getSinglePortfolio,
  searchPortfolios,
  updatePortfolio,
};
