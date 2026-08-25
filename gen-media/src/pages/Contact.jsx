import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitted(false);
    setError("");
    setSending(true);

    const formData = new FormData(event.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      setSubmitted(true);

      // Clear form
      event.target.reset();
    } catch (error) {
      console.error("Contact form error:", error);

      setError(
        error.message || "Unable to send your message. Please try again.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-[#F8F6F1] text-[#2C2C2C] py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Subtle technical grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(#2C2C2C 1px, transparent 1px),
            linear-gradient(90deg, #2C2C2C 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Orange accent */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#FF9800]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Section Number */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="text-sm tracking-[0.3em] text-[#2C2C2C]/40"></span>

              <span className="w-8 h-px bg-[#FF9800]" />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-10">
            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 bg-[#FF9800] rounded-full" />

              <p className="text-xs sm:text-sm tracking-[0.3em] text-[#2C2C2C]/55 font-medium">
                GET IN TOUCH
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight max-w-5xl">
              Have an idea?
              <br />
              <span className="font-semibold">
                Let's <span className="text-[#FF9800]">create.</span>
              </span>
            </h2>

            {/* Supporting statement */}
            <p className="mt-8 max-w-2xl text-base sm:text-lg text-[#2C2C2C]/65 leading-relaxed">
              Tell us what you're working on, what you're trying to solve, or
              where you want to go. We'll figure out the next step together.
            </p>

            {/* Contact Container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mt-20">
              {/* Contact Information */}
              <div>
                {/* Intro */}
                <div className="border-l-2 border-[#FF9800] pl-6">
                  <p className="text-base sm:text-lg text-[#2C2C2C]/70 leading-relaxed">
                    Whether you have a project, collaboration idea, or simply
                    want to talk about creative work, we'd love to hear from
                    you.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="mt-12 space-y-10">
                  {/* Email */}
                  <div>
                    <p className="text-[11px] tracking-[0.25em] text-[#2C2C2C]/45 mb-3">
                      EMAIL
                    </p>

                    <a
                      // href="mailto:info.thegenmedia@gmail.com"
                      className="group inline-flex items-center gap-3 text-base sm:text-lg font-medium"
                    >
                      <span className="group:text-[#FF9800] transition-colors duration-300">
                        info.thegenmedia@gmail.com
                      </span>

                      {/* <span className="text-[#FF9800] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        →
                      </span> */}
                    </a>
                  </div>

                  {/* Location */}
                  <div>
                    <p className="text-[11px] tracking-[0.25em] text-[#2C2C2C]/45 mb-3">
                      LOCATION
                    </p>

                    <p className="text-base sm:text-lg font-medium">
                      Pathari, Morang
                    </p>
                  </div>

                  {/* Working Philosophy */}
                  <div className="pt-4">
                    <p className="text-[11px] tracking-[0.25em] text-[#2C2C2C]/45 mb-3">
                      OUR APPROACH
                    </p>

                    <p className="text-sm sm:text-base text-[#2C2C2C]/60 leading-relaxed max-w-sm">
                      Clear thinking. Real work. Structured execution.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                {/* Name */}
                <div className="group">
                  <label className="block text-[11px] tracking-[0.2em] text-[#2C2C2C]/45 mb-2">
                    YOUR NAME
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    disabled={sending}
                    className="
                      w-full
                      bg-transparent
                      border-b
                      border-[#2C2C2C]/20
                      px-0
                      py-4
                      text-[#2C2C2C]
                      placeholder:text-[#2C2C2C]/35
                      outline-none
                      focus:border-[#FF9800]
                      transition-colors
                      duration-300
                      disabled:opacity-50
                    "
                  />
                </div>

                {/* Email */}
                <div className="group">
                  <label className="block text-[11px] tracking-[0.2em] text-[#2C2C2C]/45 mb-2">
                    EMAIL ADDRESS
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    disabled={sending}
                    className="
                      w-full
                      bg-transparent
                      border-b
                      border-[#2C2C2C]/20
                      px-0
                      py-4
                      text-[#2C2C2C]
                      placeholder:text-[#2C2C2C]/35
                      outline-none
                      focus:border-[#FF9800]
                      transition-colors
                      duration-300
                      disabled:opacity-50
                    "
                  />
                </div>

                {/* Project */}
                <div className="group">
                  <label className="block text-[11px] tracking-[0.2em] text-[#2C2C2C]/45 mb-2">
                    WHAT ARE YOU WORKING ON?
                  </label>

                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    rows="5"
                    required
                    disabled={sending}
                    className="
                      w-full
                      bg-transparent
                      border-b
                      border-[#2C2C2C]/20
                      px-0
                      py-4
                      text-[#2C2C2C]
                      placeholder:text-[#2C2C2C]/35
                      outline-none
                      resize-none
                      focus:border-[#FF9800]
                      transition-colors
                      duration-300
                      disabled:opacity-50
                    "
                  />
                </div>

                {/* Submit */}
                <div className="flex flex-col items-start gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={sending}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-4
                      bg-[#FF9800]
                      text-[#2C2C2C]
                      px-7
                      py-4
                      rounded-sm
                      text-sm
                      font-semibold
                      tracking-wide
                      hover:bg-[#2C2C2C]
                      hover:text-[#F8F6F1]
                      transition-all
                      duration-300
                      disabled:opacity-60
                      disabled:cursor-not-allowed
                    "
                  >
                    <span>{sending ? "Sending..." : "Send Message"}</span>

                    {!sending && (
                      <span className="group-hover:translate-x-1 transition-transform duration-300"></span>
                    )}
                  </button>

                  {/* Success */}
                  {submitted && (
                    <p className="text-sm text-green-700">
                      Thank you. Your message has been sent successfully.
                    </p>
                  )}

                  {/* Error */}
                  {error && <p className="text-sm text-red-600">{error}</p>}
                </div>
              </form>
            </div>

            {/* Bottom technical line */}
            <div className="mt-24 pt-6 border-t border-[#2C2C2C]/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <span className="text-[10px] tracking-[0.25em] text-[#2C2C2C]/35">
                THE GEN MEDIA
              </span>

              <span className="text-[10px] tracking-[0.2em] text-[#2C2C2C]/35">
                IGNITING CAREERS. ENGINEERING BRANDS.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
