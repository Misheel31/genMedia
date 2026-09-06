import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        bg-[#F8F6F1]
        text-[#2C2C2C]
        flex
        items-center
        overflow-hidden
      "
    >
      {/* Subtle background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FF9800]/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2C2C2C]/5 rounded-full blur-3xl" />

      {/* Hero Content */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          px-6
          sm:px-10
          lg:px-16
          pt-20
          pb-14
        "
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* ================= LEFT SIDE ================= */}
          <div>
            {/* Small Label */}
            <p className="text-xs sm:text-sm tracking-[0.3em] text-[#2C2C2C]/60 mb-6">
              CREATIVE MEDIA & DESIGN
            </p>

            {/* Main Heading */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[0.9] tracking-tight">
              Capturing
              <br />
              <span className="font-semibold italic text-[#2C2C2C]">
                Vision.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-base sm:text-lg text-[#2C2C2C]/65 leading-relaxed">
              We transform ideas into powerful visual experiences through
              creativity, design, photography, video and digital media.
            </p>

            {/* CTA */}
            <Link
              to="/portfolio"
              className="
                group
                inline-flex
                items-center
                mt-10
                px-7
                py-4
                bg-[#FF9800]
                text-[#2C2C2C]
                rounded-full
                text-sm
                font-semibold
                transition-all
                duration-300
                hover:bg-[#2C2C2C]
                hover:text-[#F8F6F1]
                hover:shadow-lg
                hover:shadow-[#2C2C2C]/20
              "
            >
              Explore Our Work
              <span
                className="
                  ml-2
                  text-lg
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              ></span>
            </Link>
          </div>

          {/* ================= RIGHT SIDE VIDEO SLIDER ================= */}
          <div className="hidden lg:block w-full lg:pl-15 lg:translate-y-6 lg:translate-x-6">
            {" "}
            {/* Video Card */}
            <div
              className="
                relative
                w-full
                h-[350px]
                sm:h-[380px]
                md:h-[450px]
                lg:h-[500px]
                overflow-hidden
                rounded-[1.8rem]
                bg-[#E8E4DC]
                shadow-xl
              "
            >
              {/* Video */}
              <video
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                "
                src="/videos/Video_imageslider.MOV"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />

              {/* Dark Gradient */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/60
                  via-black/10
                  to-transparent
                  pointer-events-none
                "
              />

              {/* Counter */}
              <div
                className="
                  absolute
                  top-5
                  right-5
                  px-4
                  py-2
                  rounded-full
                  bg-white/20
                  backdrop-blur-md
                  text-white
                  text-xs
                  tracking-widest
                "
              >
                01 / 01
              </div>

              {/* Video Label */}
              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  sm:left-7
                  text-white
                "
              >
                <p
                  className="
                    text-[10px]
                    sm:text-xs
                    tracking-[0.25em]
                    text-white/70
                    mb-1
                  "
                >
                  CREATIVE MEDIA
                </p>

                <h2
                  className="
                    text-xl
                    sm:text-2xl
                    font-medium
                  "
                >
                  Visual Stories
                </h2>
              </div>
            </div>
            {/* Slider Controls */}
            <div
              className="
                flex
                items-center
                justify-between
                mt-4
              "
            >
              {/* Progress */}
              <div className="flex items-center gap-2">
                <div className="w-9 h-[3px] rounded-full bg-[#FF9800]" />
                <div className="w-4 h-[3px] rounded-full bg-[#2C2C2C]/20" />
                <div className="w-4 h-[3px] rounded-full bg-[#2C2C2C]/20" />
              </div>

              {/* Arrows */}
              <div className="flex gap-2">
                <button
                  aria-label="Previous video"
                  className="
                    w-10
                    h-10
                    rounded-full
                    border
                    border-[#2C2C2C]/20
                    flex
                    items-center
                    justify-center
                    text-base
                    transition-all
                    duration-300
                    hover:bg-[#2C2C2C]
                    hover:text-white
                    hover:border-[#2C2C2C]
                  "
                >
                  ←
                </button>

                <button
                  aria-label="Next video"
                  className="
                    w-10
                    h-10
                    rounded-full
                    border
                    border-[#2C2C2C]/20
                    flex
                    items-center
                    justify-center
                    text-base
                    transition-all
                    duration-300
                    hover:bg-[#FF9800]
                    hover:border-[#FF9800]
                  "
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
