import transporter from "../config/emailConfig.js";

const contactController = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    console.log("Email_user:", process.env.EMAIL_USER);
    console.log("OFFICIAL_email:", process.env.OFFICE_EMAIL);
    console.log("EMAIL_PASSWORD exists:", !!process.env, EMAIL_PASSWORD);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,

      subject: `New message from ${name}`,

      text: `
      Name: ${name}
      Email: ${email}

      Message:
      ${message}
      `,
    });

    return res.status(200).json({
      status: "true",
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Email error:", error);

    return res.status(500).json({
      message: "Failed to send email",
    });
  }
};

export default contactController;
