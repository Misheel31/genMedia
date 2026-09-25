// import { Link } from "react-router-dom";

// function Hero() {
//   return (
//     <section
//       id="home"
//       className="
//         relative
//         min-h-screen
//         bg-[#F8F6F1]
//         text-[#2C2C2C]
//         flex
//         items-center
//         overflow-hidden
//       "
//     >
//       {/* Subtle background accents */}
//       <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FF9800]/10 rounded-full blur-3xl" />

//       <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2C2C2C]/5 rounded-full blur-3xl" />

//       {/* Hero Content */}
//       <div
//         className="
//           relative
//           z-10
//           w-full
//           max-w-7xl
//           mx-auto
//           px-6
//           sm:px-10
//           lg:px-16
//           pt-20
//           pb-14
//         "
//       >
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
//           {/* ================= LEFT SIDE ================= */}
//           <div>
//             {/* Small Label */}
//             <p className="text-xs sm:text-sm tracking-[0.3em] text-[#2C2C2C]/60 mb-6">
//               CREATIVE MEDIA & DESIGN
//             </p>

//             {/* Main Heading */}
//             <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[0.9] tracking-tight">
//               Capturing
//               <br />
//               <span className="font-semibold italic text-[#2C2C2C]">
//                 Vision.
//               </span>
//             </h1>

//             {/* Description */}
//             <p className="mt-8 max-w-xl text-base sm:text-lg text-[#2C2C2C]/65 leading-relaxed">
//               We transform ideas into powerful visual experiences through
//               creativity, design, photography, video and digital media.
//             </p>

//             {/* CTA */}
//             <Link
//               to="/portfolio"
//               className="
//                 group
//                 inline-flex
//                 items-center
//                 mt-10
//                 px-7
//                 py-4
//                 bg-[#FF9800]
//                 text-[#2C2C2C]
//                 rounded-full
//                 text-sm
//                 font-semibold
//                 transition-all
//                 duration-300
//                 hover:bg-[#2C2C2C]
//                 hover:text-[#F8F6F1]
//                 hover:shadow-lg
//                 hover:shadow-[#2C2C2C]/20
//               "
//             >
//               Explore Our Work
//               <span
//                 className="
//                   ml-2
//                   text-lg
//                   transition-transform
//                   duration-300
//                   group-hover:translate-x-1
//                   group-hover:-translate-y-1
//                 "
//               ></span>
//             </Link>
//           </div>

//           {/* ================= RIGHT SIDE VIDEO SLIDER ================= */}
//           <div className="hidden lg:block w-full lg:pl-15 lg:translate-y-6 lg:translate-x-6">
//             {" "}
//             {/* Video Card */}
//             <div
//               className="
//                 relative
//                 w-full
//                 h-[350px]
//                 sm:h-[380px]
//                 md:h-[450px]
//                 lg:h-[500px]
//                 overflow-hidden
//                 rounded-[1.8rem]
//                 bg-[#E8E4DC]
//                 shadow-xl
//               "
//             >
//               {/* Video */}
//               <video
//                 className="
//                   absolute
//                   inset-0
//                   w-full
//                   h-full
//                   object-cover
//                 "
//                 src="/videos/Video_imageslider.MOV"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 preload="auto"
//               />

//               {/* Dark Gradient */}
//               <div
//                 className="
//                   absolute
//                   inset-0
//                   bg-gradient-to-t
//                   from-black/60
//                   via-black/10
//                   to-transparent
//                   pointer-events-none
//                 "
//               />

//               {/* Counter */}
//               <div
//                 className="
//                   absolute
//                   top-5
//                   right-5
//                   px-4
//                   py-2
//                   rounded-full
//                   bg-white/20
//                   backdrop-blur-md
//                   text-white
//                   text-xs
//                   tracking-widest
//                 "
//               >
//                 01 / 01
//               </div>

//               {/* Video Label */}
//               <div
//                 className="
//                   absolute
//                   bottom-6
//                   left-6
//                   sm:left-7
//                   text-white
//                 "
//               >
//                 <p
//                   className="
//                     text-[10px]
//                     sm:text-xs
//                     tracking-[0.25em]
//                     text-white/70
//                     mb-1
//                   "
//                 >
//                   CREATIVE MEDIA
//                 </p>

//                 <h2
//                   className="
//                     text-xl
//                     sm:text-2xl
//                     font-medium
//                   "
//                 >
//                   Visual Stories
//                 </h2>
//               </div>
//             </div>
//             {/* Slider Controls */}
//             <div
//               className="
//                 flex
//                 items-center
//                 justify-between
//                 mt-4
//               "
//             >
//               {/* Progress */}
//               <div className="flex items-center gap-2">
//                 <div className="w-9 h-[3px] rounded-full bg-[#FF9800]" />
//                 <div className="w-4 h-[3px] rounded-full bg-[#2C2C2C]/20" />
//                 <div className="w-4 h-[3px] rounded-full bg-[#2C2C2C]/20" />
//               </div>

//               {/* Arrows */}
//               <div className="flex gap-2">
//                 <button
//                   aria-label="Previous video"
//                   className="
//                     w-10
//                     h-10
//                     rounded-full
//                     border
//                     border-[#2C2C2C]/20
//                     flex
//                     items-center
//                     justify-center
//                     text-base
//                     transition-all
//                     duration-300
//                     hover:bg-[#2C2C2C]
//                     hover:text-white
//                     hover:border-[#2C2C2C]
//                   "
//                 >
//                   ←
//                 </button>

//                 <button
//                   aria-label="Next video"
//                   className="
//                     w-10
//                     h-10
//                     rounded-full
//                     border
//                     border-[#2C2C2C]/20
//                     flex
//                     items-center
//                     justify-center
//                     text-base
//                     transition-all
//                     duration-300
//                     hover:bg-[#FF9800]
//                     hover:border-[#FF9800]
//                   "
//                 >
//                   →
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;

import {
  ArrowRight,
  Camera,
  Code2,
  GraduationCap,
  MoveUpRight,
  Palette,
  Video,
} from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F8F6F1] text-[#2C2C2C]">
      {/* =====================================================
          BLURRED BACKGROUND
      ====================================================== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main blurred background */}
        <div
          className="
            absolute
            inset-[-80px]
            bg-cover
            bg-center
            scale-110
            blur-2xl
            opacity-35
          "
          style={{
            backgroundImage: "url('/images/genmedia-background.jpg')",
          }}
        />

        {/* Cream overlay */}
        <div className="absolute inset-0 bg-[#F8F6F1]/75" />

        {/* Soft orange glow */}
        <div
          className="
            absolute
            top-20
            right-[-100px]
            w-[400px]
            h-[400px]
            rounded-full
            bg-[#FF9800]/15
            blur-[100px]
          "
        />

        <div
          className="
            absolute
            bottom-[-150px]
            left-[-100px]
            w-[450px]
            h-[450px]
            rounded-full
            bg-[#2C2C2C]/10
            blur-[120px]
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="relative z-10">
        {/* =================================================
            HERO INTRO
        ================================================== */}
        <section
          className="
            px-6
            sm:px-10
            lg:px-16
            xl:px-24
            pt-32
            pb-12
          "
        >
          <div className="max-w-7xl mx-auto text-center">
            {/* Small label */}
            <p
              className="
                text-xs
                sm:text-sm
                tracking-[0.35em]
                text-[#2C2C2C]/55
                mb-6
              "
            >
              CREATIVE MEDIA & EDUCATION
            </p>

            {/* Main heading */}
            <h1
              className="
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                font-light
                tracking-tight
                leading-none
              "
            >
              Capturing{" "}
              <span className="font-semibold italic text-[#FF9800]">
                Vision.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                max-w-2xl
                mx-auto
                mt-7
                text-base
                sm:text-lg
                leading-relaxed
                text-[#2C2C2C]/60
              "
            >
              We transform ideas into powerful visual experiences through
              creativity, design, photography, video and digital media.
            </p>
          </div>
        </section>

        {/* =================================================
            TWO MAIN SECTIONS
        ================================================== */}
        <section
          className="
            px-6
            sm:px-10
            lg:px-16
            xl:px-24
            pb-24
          "
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* =================================================
                  ACADEMY CARD
              ================================================== */}
              <Link
                to="/academy"
                className="
                  group
                  relative
                  min-h-[480px]
                  lg:min-h-[520px]
                  overflow-hidden
                  rounded-[28px]
                  bg-[#2C2C2C]
                  text-white
                  shadow-2xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                "
              >
                {/* Background image */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-cover
                    bg-center
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                  style={{
                    backgroundImage: "url('/images/academy.jpg')",
                  }}
                />

                {/* Dark overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/55
                    to-black/20
                  "
                />

                {/* Content */}
                <div className="relative z-10 h-full min-h-[480px] lg:min-h-[520px] p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                  {/* Top */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="
                          w-12
                          h-12
                          rounded-xl
                          border
                          border-[#FF9800]
                          flex
                          items-center
                          justify-center
                          text-[#FF9800]
                        "
                      >
                        <GraduationCap size={25} />
                      </div>

                      <div>
                        <p className="text-xs tracking-[0.2em] text-white/50">
                          GEN MEDIA
                        </p>

                        <p className="text-sm tracking-[0.15em] font-medium">
                          ACADEMY
                        </p>
                      </div>
                    </div>

                    <div
                      className="
                        w-10
                        h-10
                        rounded-full
                        border
                        border-white/30
                        flex
                        items-center
                        justify-center
                        group-hover:bg-[#FF9800]
                        group-hover:border-[#FF9800]
                        group-hover:text-[#2C2C2C]
                        transition-all
                      "
                    >
                      <MoveUpRight size={19} />
                    </div>
                  </div>

                  {/* Bottom */}
                  <div>
                    <p className="text-xs tracking-[0.25em] text-[#FF9800] mb-5">
                      LEARN • CREATE • GROW
                    </p>

                    <h2
                      className="
                        text-4xl
                        sm:text-5xl
                        font-semibold
                        leading-[0.95]
                        max-w-lg
                      "
                    >
                      Learn the skills
                      <br />
                      to <span className="text-[#FF9800]">create.</span>
                    </h2>

                    <p
                      className="
                        mt-6
                        max-w-lg
                        text-sm
                        sm:text-base
                        leading-relaxed
                        text-white/65
                      "
                    >
                      Practical, hands-on courses in Graphic Design, Video
                      Editing and more. Build your skills and turn your
                      creativity into a profession.
                    </p>

                    {/* Course tags */}
                    <div className="flex flex-wrap gap-3 mt-7">
                      <span className="flex items-center gap-2 text-xs text-white/80">
                        <Palette size={16} className="text-[#FF9800]" />
                        Graphic Design
                      </span>

                      <span className="w-px h-4 bg-white/20" />

                      <span className="flex items-center gap-2 text-xs text-white/80">
                        <Video size={16} className="text-[#FF9800]" />
                        Video Editing
                      </span>

                      <span className="w-px h-4 bg-white/20" />

                      <span className="flex items-center gap-2 text-xs text-white/80">
                        <Code2 size={16} className="text-[#FF9800]" />
                        Web Design
                      </span>
                    </div>

                    {/* CTA */}
                    <div className="mt-8">
                      <span
                        className="
                          inline-flex
                          items-center
                          gap-3
                          bg-[#FF9800]
                          text-[#2C2C2C]
                          px-6
                          py-3.5
                          rounded-full
                          text-sm
                          font-medium
                          group-hover:gap-5
                          transition-all
                        "
                      >
                        EXPLORE COURSES
                        <ArrowRight size={17} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* =================================================
                  AGENCY CARD
              ================================================== */}
              <Link
                to="/portfolio"
                className="
                  group
                  relative
                  min-h-[480px]
                  lg:min-h-[520px]
                  overflow-hidden
                  rounded-[28px]
                  bg-[#2C2C2C]
                  text-white
                  shadow-2xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                "
              >
                {/* Background image */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-cover
                    bg-center
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                  style={{
                    backgroundImage: "url('/images/agency.jpg')",
                  }}
                />

                {/* Dark overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/55
                    to-black/15
                  "
                />

                {/* Content */}
                <div className="relative z-10 h-full min-h-[480px] lg:min-h-[520px] p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                  {/* Top */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="
                          w-12
                          h-12
                          rounded-xl
                          border
                          border-[#FF9800]
                          flex
                          items-center
                          justify-center
                          text-[#FF9800]
                        "
                      >
                        <Camera size={24} />
                      </div>

                      <div>
                        <p className="text-xs tracking-[0.2em] text-white/50">
                          GEN MEDIA
                        </p>

                        <p className="text-sm tracking-[0.15em] font-medium">
                          AGENCY
                        </p>
                      </div>
                    </div>

                    <div
                      className="
                        w-10
                        h-10
                        rounded-full
                        border
                        border-white/30
                        flex
                        items-center
                        justify-center
                        group-hover:bg-[#FF9800]
                        group-hover:border-[#FF9800]
                        group-hover:text-[#2C2C2C]
                        transition-all
                      "
                    >
                      <MoveUpRight size={19} />
                    </div>
                  </div>

                  {/* Bottom */}
                  <div>
                    <p className="text-xs tracking-[0.25em] text-[#FF9800] mb-5">
                      DESIGN • MEDIA • PRODUCTION
                    </p>

                    <h2
                      className="
                        text-4xl
                        sm:text-5xl
                        font-semibold
                        leading-[0.95]
                        max-w-lg
                      "
                    >
                      We create
                      <br />
                      <span className="text-[#FF9800]">for brands.</span>
                    </h2>

                    <p
                      className="
                        mt-6
                        max-w-lg
                        text-sm
                        sm:text-base
                        leading-relaxed
                        text-white/65
                      "
                    >
                      From branding and graphic design to video production and
                      photography, we help businesses tell their story through
                      powerful visuals.
                    </p>

                    {/* Services */}
                    <div className="flex flex-wrap gap-x-4 gap-y-3 mt-7">
                      <span className="flex items-center gap-2 text-xs text-white/80">
                        <Palette size={16} className="text-[#FF9800]" />
                        Branding
                      </span>

                      <span className="w-px h-4 bg-white/20" />

                      <span className="flex items-center gap-2 text-xs text-white/80">
                        <Palette size={16} className="text-[#FF9800]" />
                        Graphic Design
                      </span>

                      <span className="w-px h-4 bg-white/20" />

                      <span className="flex items-center gap-2 text-xs text-white/80">
                        <Video size={16} className="text-[#FF9800]" />
                        Video
                      </span>

                      <span className="w-px h-4 bg-white/20" />

                      <span className="flex items-center gap-2 text-xs text-white/80">
                        <Camera size={16} className="text-[#FF9800]" />
                        Photography
                      </span>
                    </div>

                    {/* CTA */}
                    <div className="mt-8">
                      <span
                        className="
                          inline-flex
                          items-center
                          gap-3
                          border
                          border-[#FF9800]
                          text-white
                          px-6
                          py-3.5
                          rounded-full
                          text-sm
                          font-medium
                          group-hover:bg-[#FF9800]
                          group-hover:text-[#2C2C2C]
                          group-hover:gap-5
                          transition-all
                        "
                      >
                        VIEW OUR WORK
                        <ArrowRight size={17} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* =================================================
            SMALL BOTTOM STATEMENT
        ================================================== */}
        <section className="px-6 sm:px-10 lg:px-16 xl:px-24 pb-20">
          <div
            className="
              max-w-7xl
              mx-auto
              border-t
              border-[#2C2C2C]/10
              pt-8
              flex
              flex-col
              sm:flex-row
              justify-between
              gap-4
              text-xs
              tracking-[0.15em]
              text-[#2C2C2C]/45
            "
          >
            <span>CREATIVE MEDIA & DESIGN</span>

            <span>NEPAL · 2026</span>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
