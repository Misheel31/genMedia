// import resend from "../config/emailConfig.js";

// const contactController = async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     if (!name || !email || !message) {
//       return res.status(400).json({
//         message: "All fields are required",
//       });
//     }

//     console.log("Email_user:", process.env.EMAIL_USER);
//     console.log("OFFICIAL_email:", process.env.OFFICE_EMAIL);
//     console.log("EMAIL_PASSWORD exists:", !!process.env.EMAIL_PASSWORD);

//     const { data, error } = await resend.emails.send({
//       from: process.env.RESEND_FROM_EMAIL,
//       to: process.env.OFFICE_EMAIL,

//       reply_to: email,

//       subject: `New Contact Message from ${name}`,

//       html: `
//         <div style="
//           font-family: Arial, sans-serif;
//           max-width: 600px;
//           margin: auto;
//           padding: 20px;
//         ">

//           <h2 style="color: #FF9800;">
//             New Contact Message
//           </h2>

//           <p>
//             Someone has submitted a new message through
//             the Gen Media website.
//           </p>

//           <hr />

//           <h3>Contact Information</h3>

//           <p>
//             <strong>Name:</strong> ${name}
//           </p>

//           <p>
//             <strong>Email:</strong> ${email}
//           </p>

//           <hr />

//           <h3>Message</h3>

//           <p style="
//             white-space: pre-line;
//             line-height: 1.6;
//           ">
//             ${message}
//           </p>

//           <hr />

//           <p style="color: #777; font-size: 13px;">
//             This message was submitted through the
//             Gen Media website contact form.
//           </p>

//         </div>
//       `,
//     });

//     console.log("RESEND CONTACT EMAIL RESPONSE:", {
//       data,
//       error,
//     });

//     // Resend returned an error
//     if (error) {
//       console.error("Resend contact email failed:", error);

//       return res.status(500).json({
//         message: "Failed to send email",
//       });
//     }

//     return res.status(200).json({
//       status: "true",
//       message: "Message sent successfully",
//     });
//   } catch (error) {
//     console.error("Contact email error:", error);

//     return res.status(500).json({
//       message: "Failed to send email",
//     });
//   }
// };

// export default contactController;

import resend from "../config/emailConfig.js";

const contactController = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Name, email and message are required",
      });
    }

    console.log("========== CONTACT RESEND DEBUG ==========");
    console.log("RESEND_FROM_EMAIL:", process.env.RESEND_FROM_EMAIL);
    console.log("RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);
    console.log("OFFICE_EMAIL:", process.env.OFFICE_EMAIL);
    console.log("==========================================");

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.OFFICE_EMAIL,

      // Reply to the person who submitted the form
      reply_to: email,

      subject: `New Contact Message from ${name}`,

      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 600px;
          margin: auto;
          padding: 20px;
        ">

          <h2 style="color: #FF9800;">
            New Contact Message
          </h2>

          <p>
            Someone has submitted a new message through
            the Gen Media website.
          </p>

          <hr />

          <h3>Contact Information</h3>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <hr />

          <h3>Message</h3>

          <p style="
            white-space: pre-line;
            line-height: 1.6;
          ">
            ${message}
          </p>

          <hr />

          <p style="color: #777; font-size: 13px;">
            This message was submitted through the
            Gen Media website contact form.
          </p>

        </div>
      `,
    });

    console.log("RESEND CONTACT EMAIL RESPONSE:", {
      data,
      error,
    });

    if (error) {
      console.error("Resend contact email failed:", error);

      return res.status(500).json({
        message: "Failed to send email",
      });
    }

    return res.status(200).json({
      status: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Contact email error:", error);

    return res.status(500).json({
      message: "Failed to send email",
    });
  }
};

export default contactController;
