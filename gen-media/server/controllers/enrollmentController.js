import transporter from "../config/emailConfig.js";
import Enrollment from "../models/enrollmentModel.js";

const createEnrollment = async (req, res) => {
  try {
    const { name, email, phone, course, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !course) {
      return res.status(400).json({
        message: "Name, email, phone and course are required",
      });
    }

    // Save enrollment to MongoDB
    const enrollment = await Enrollment.create({
      name,
      email,
      phone,
      course,
      message,
    });

    // Send email to company
    await transporter.sendMail({
      from: `"Gen Media Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,

      subject: `New Course Enrollment - ${course}`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">

          <h2 style="color: #FF9800;">
            New Course Enrollment
          </h2>

          <p>
            Someone has submitted a new course enrollment through the
            Gen Media website.
          </p>

          <hr />

          <h3>Student Information</h3>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Phone:</strong> ${phone}
          </p>

          <p>
            <strong>Course:</strong> ${course}
          </p>

          ${
            message
              ? `
                <p>
                  <strong>Message:</strong>
                </p>

                <p>
                  ${message}
                </p>
              `
              : ""
          }

          <hr />

          <p style="color: #777;">
            This enrollment was submitted from the Gen Media website.
          </p>

        </div>
      `,
    });

    // Optional confirmation email to student
    await transporter.sendMail({
      from: `"Gen Media" <${process.env.EMAIL_USER}>`,
      to: email,

      subject: `Enrollment Received - ${course}`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">

          <h2 style="color: #FF9800;">
            Enrollment Received
          </h2>

          <p>Hello ${name},</p>

          <p>
            Thank you for your interest in the
            <strong>${course}</strong> course at Gen Media Academy.
          </p>

          <p>
            We have received your enrollment request successfully.
          </p>

          <p>
            Our team will contact you shortly with the next steps.
          </p>

          <br />

          <p>
            Regards,<br />
            <strong>Gen Media Academy</strong>
          </p>

        </div>
      `,
    });

    res.status(201).json({
      message: "Enrollment submitted successfully",
      enrollment,
    });
  } catch (error) {
    console.error("Create enrollment error:", error);

    res.status(500).json({
      message: "Failed to submit enrollment",
      error: error.message,
    });
  }
};

export { createEnrollment };
