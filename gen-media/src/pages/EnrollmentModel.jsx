import { X } from "lucide-react";
import { useState } from "react";

function EnrollmentModal({ course, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/api/enrollments/create`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          course: course.title,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit enrollment");
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Enrollment submission error:", error);

      setError("Unable to submit your enrollment. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/50
        backdrop-blur-sm
        px-4
      "
    >
      <div
        className="
          relative
          w-full
          max-w-lg
          bg-white
          rounded-2xl
          shadow-2xl
          p-7
          sm:p-9
          max-h-[90vh]
          overflow-y-auto
        "
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="
            absolute
            top-5
            right-5
            p-2
            rounded-full
            text-[#2C2C2C]/60
            hover:bg-[#F8F6F1]
            hover:text-[#2C2C2C]
            transition
          "
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <div className="pr-8">
              <p className="text-xs tracking-[0.3em] text-[#FF9800] mb-3">
                ENROLL NOW
              </p>

              <h2 className="text-2xl sm:text-3xl font-semibold">
                {course.title}
              </h2>

              <p className="mt-3 text-sm text-[#2C2C2C]/60">
                Fill in your details below to enroll in this course.
              </p>
            </div>

            {/* Course Information */}
            <div
              className="
                mt-6
                bg-[#F8F6F1]
                rounded-xl
                p-4
                flex
                flex-wrap
                gap-3
                text-sm
              "
            >
              <span>
                <strong>Duration:</strong> {course.duration}
              </span>

              <span>
                <strong>Level:</strong> {course.level}
              </span>

              <span>
                <strong>Course Fee:</strong> Rs. {course.price} per month
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="
                    w-full
                    px-4
                    py-3
                    border
                    border-[#2C2C2C]/15
                    rounded-lg
                    outline-none
                    focus:border-[#FF9800]
                    transition
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="
                    w-full
                    px-4
                    py-3
                    border
                    border-[#2C2C2C]/15
                    rounded-lg
                    outline-none
                    focus:border-[#FF9800]
                    transition
                  "
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="
                    w-full
                    px-4
                    py-3
                    border
                    border-[#2C2C2C]/15
                    rounded-lg
                    outline-none
                    focus:border-[#FF9800]
                    transition
                  "
                />
              </div>

              {/* Submit */}
              {error && (
                <p className="text-sm text-red-600 text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="
                    w-full
                    py-3
                    bg-[#FF9800]
                    text-[#2C2C2C]
                    rounded-lg
                    font-semibold
                    transition-all
                    duration-300
                    hover:bg-[#2C2C2C]
                    hover:text-white
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                "
              >
                {submitting ? "Submitting..." : "Submit Enrollment"}
              </button>
            </form>
          </>
        ) : (
          /* Success */
          <div className="text-center py-10">
            <div
              className="
                mx-auto
                w-16
                h-16
                flex
                items-center
                justify-center
                rounded-full
                bg-[#FF9800]/10
                text-[#FF9800]
                text-3xl
                mb-5
              "
            >
              ✓
            </div>

            <h2 className="text-2xl font-semibold">Enrollment Received!</h2>

            <p className="mt-4 text-sm text-[#2C2C2C]/60 leading-relaxed">
              Thank you, {formData.name}. Your enrollment request for{" "}
              <strong>{course.title}</strong> has been received.
            </p>

            <p className="mt-3 text-sm text-[#2C2C2C]/60">
              Our team will contact you soon with the next steps.
            </p>

            <button
              onClick={onClose}
              className="
                mt-7
                px-6
                py-3
                bg-[#2C2C2C]
                text-white
                rounded-lg
                text-sm
                font-medium
                hover:bg-[#FF9800]
                hover:text-[#2C2C2C]
                transition
              "
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default EnrollmentModal;
