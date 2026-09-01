import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import Admin from "../models/adminModel.js";

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required.",
      });
    }

    const admin = await Admin.findOne({
      email: email.toLowerCase().trim(),
    });

    if (!admin) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    const passwordMatch = await bcrypt.compare(
      password,
      admin.password,
    );

    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    const token = jwt.sign(
      {
        id: admin._id,
        email: admin.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );

    return res.status(200).json({
      message: "Login successful.",
      token,
      admin: {
        id: admin._id,
        email: admin.email,
      },
    });
  } catch (error) {
    console.error("Admin login error:", error);

    return res.status(500).json({
      message: "Failed to login.",
    });
  }
};

const getAdminProfile = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id).select("-password");

    if (!admin) {
      return res.status(404).json({
        message: "Admin not found.",
      });
    }

    return res.status(200).json({
      admin,
    });
  } catch (error) {
    console.error("Admin profile error:", error);

    return res.status(500).json({
      message: "Failed to get admin profile.",
    });
  }
};

export {
  loginAdmin,
  getAdminProfile,
};