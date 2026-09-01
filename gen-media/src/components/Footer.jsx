import { Mail, MapPin, Phone } from "lucide-react";
function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2000&q=80')",
          }}
        />

        <div className="absolute inset-0 bg-[#2C2C2C]/90" />

        <div
          className="
            relative
            max-w-7xl
            mx-auto
            px-6
            sm:px-10
            lg:px-16
            py-6
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-5
          "
        >
          {/* CTA TEXT */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Have a project in mind?
            </h2>

            <p className="mt-1 text-sm text-white/55">
              Let's create something meaningful together.
            </p>
          </div>

          {/* CTA BUTTON */}
          <a
            href="/contact"
            className="
              inline-flex
              items-center
              gap-3
              px-6
              py-3
              bg-[#FF9800]
              text-[#2C2C2C]
              rounded-sm
              text-xs
              font-bold
              tracking-wide
              transition-all
              duration-300
              hover:bg-white
            "
          >
            LET'S WORK TOGETHER
            <span className="text-base">→</span>
          </a>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-5
            gap-7
            lg:gap-8
          "
        >
          <div className="lg:col-span-1">
            <a href="/" className="inline-block">
              <img src="/logo.png" alt="Gen Media" className="w-24 h-auto" />
            </a>

            <p className="mt-3 text-xs text-white/50 leading-relaxed max-w-[180px]">
              Crafting narratives for a digital tomorrow.
            </p>

            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.facebook.com/thegenmedia.com.np"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="The Gen Media on Facebook"
                className="
                  w-8
                  h-8
                  rounded-full
                  border
                  border-white/15
                  flex
                  items-center
                  justify-center
                  text-white/60
                  hover:border-[#FF9800]
                  hover:text-[#FF9800]
                  hover:bg-[#FF9800]/10
                  transition-all
                  duration-300
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-[15px] h-[15px]"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="
                      M14 8h3V4h-3
                      c-3.314 0-5 1.686-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9
                      c0-.667.333-1 1-1z
                    "
                  />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/thegenmedia.com.np/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="The Gen Media on Instagram"
                className="
                  w-8
                  h-8
                  rounded-full
                  border
                  border-white/15
                  flex
                  items-center
                  justify-center
                  text-white/60
                  hover:border-[#FF9800]
                  hover:text-[#FF9800]
                  hover:bg-[#FF9800]/10
                  transition-all
                  duration-300
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-[15px] h-[15px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />

                  <circle cx="12" cy="12" r="4" />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/company/thegenmedia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="The Gen Media on LinkedIn"
                className="
                w-8 h-8 rounded-full border border-white/15
                flex items-center justify-center
                text-white/60
                hover:border-[#FF9800]
                hover:text-[#FF9800]
                hover:bg-[#FF9800]/10
                transition-all duration-300
              "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-[15px] h-[15px]"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.85c0-3.75-2-5.5-4.65-5.5-2.15 0-3.1 1.18-3.65 2v-1.85H9.2V21h3.5v-6.2c0-1.64.3-3.23 2.35-3.23 2.02 0 2.05 1.88 2.05 3.34V21H21v-7.15Z" />
                </svg>
              </a>

              {/* TIKTOK */}
              <a
                href="https://www.tiktok.com/@thegenmedia.com.np"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="The Gen Media on TikTok"
                className="
                w-8 h-8 rounded-full border border-white/15
                flex items-center justify-center
                text-white/60
                hover:border-[#FF9800]
                hover:text-[#FF9800]
                hover:bg-[#FF9800]/10
                transition-all duration-300
              "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-[15px] h-[15px]"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19.5 7.2a5.3 5.3 0 0 1-3.2-1.05v7.1a5.75 5.75 0 1 1-4.97-5.69v2.83a2.95 2.95 0 1 0 2.18 2.86V3h2.79a5.3 5.3 0 0 0 3.2 1.4V7.2Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold tracking-[0.18em] mb-3">
              QUICK LINKS
            </h3>

            <div className="flex flex-col gap-2">
              <a href="/" className="footer-link">
                Home
              </a>

              <a href="/about" className="footer-link">
                About
              </a>

              <a href="/portfolio" className="footer-link">
                Portfolio
              </a>

              <a href="/services" className="footer-link">
                Services
              </a>

              <a href="/contact" className="footer-link">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold tracking-[0.18em] mb-3">
              SERVICES
            </h3>

            <div className="flex flex-col gap-2">
              <a href="/services" className="footer-link">
                Video Production
              </a>

              <a href="/services" className="footer-link">
                Photography
              </a>

              <a href="/services" className="footer-link">
                Graphic Design
              </a>

              <a href="/services" className="footer-link">
                Motion Graphics
              </a>

              <a href="/services" className="footer-link">
                Social Media
              </a>

              <a href="/services" className="footer-link">
                Web Development
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold tracking-[0.18em] mb-3">
              ACADEMY
            </h3>

            <div className="flex flex-col gap-2">
              <a href="/academy/courses" className="footer-link">
                Graphic Design
              </a>

              <a href="/academy/courses" className="footer-link">
                Video Editing
              </a>

              <a href="/academy/courses" className="footer-link">
                Animation
              </a>

              <a href="/academy/courses" className="footer-link">
                Digital Branding
              </a>

              <a href="/academy/courses" className="footer-link">
                Web Designing
              </a>

              <a href="/academy/courses" className="footer-link">
                Programming
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold tracking-[0.18em] mb-3">
              REACH US
            </h3>

            <div className="flex flex-col gap-3 text-xs text-white">
              {/* LOCATION */}

              <div className="flex items-start gap-2">
                <MapPin
                  size={16}
                  strokeWidth={2}
                  className="text-[#FF9800] shrink-0 mt-0.5"
                />

                <span>
                  Pathari Sanishare, Morang,
                  <br />
                  Nepal
                </span>
              </div>

              {/* PHONE */}

              <div className="flex items-center gap-2">
                <Phone
                  size={16}
                  strokeWidth={2}
                  className="text-white shrink-0"
                />

                <a
                  href="tel:+9779761356000"
                  className="
                    text-white
                    text-sm
                    hover:text-[#FF9800]
                    transition-colors
                  "
                >
                  Call Us +977 9761356000
                </a>
              </div>

              {/* EMAIL */}

              <div className="flex items-start gap-2">
                <Mail
                  size={16}
                  strokeWidth={2}
                  className="text-white shrink-0 mt-0.5"
                />

                <a
                  href="mailto:info.thegenmedia@gmail.com"
                  className="
                    text-white
                    text-sm
                    transition-colors
                    break-all
                    hover:text-[#FF9800]
                  "
                >
                  info.thegenmedia@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-3">
          <p className="text-center text-[10px] text-white/40">
            © 2026 The Gen Media. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
