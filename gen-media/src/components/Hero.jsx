// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function Hero() {
//   // const slides = [
//   //   {
//   //     image:
//   //       "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85",
//   //     category: "PHOTOGRAPHY",
//   //     title: "Portrait Series",
//   //   },
//   //   {
//   //     image:
//   //       "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
//   //     category: "CREATIVE SPACES",
//   //     title: "Modern Workspace",
//   //   },
//   //   {
//   //     image:
//   //       "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85",
//   //     category: "BRANDING",
//   //     title: "Visual Identity",
//   //   },
//   //   {
//   //     image:
//   //       "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=85",
//   //     category: "CREATIVE MEDIA",
//   //     title: "Visual Stories",
//   //   },
//   // ];

//   // const [currentSlide, setCurrentSlide] = useState(0);

//   // Automatic slider
//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   //   }, 5000);

//   //   return () => clearInterval(interval);
//   // }, [slides.length]);

//   // // Next slide
//   // const nextSlide = () => {
//   //   setCurrentSlide((prev) => (prev + 1) % slides.length);
//   // };

//   // // Previous slide
//   // const prevSlide = () => {
//   //   setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   // };

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
//       {/* Background accents */}
//       <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#FF9800]/10 rounded-full blur-3xl" />

//       <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#2C2C2C]/5 rounded-full blur-3xl" />

//       {/* Hero Container */}
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
//           pt-24
//           pb-14
//         "
//       >
//         <div
//           className="
//             grid
//             grid-cols-1
//             lg:grid-cols-[1.05fr_0.85fr]
//             gap-10
//             lg:gap-14
//             items-center
//           "
//         >
//           {/* ================= LEFT SIDE ================= */}
//           <div>
//             {/* Label */}
//             <p
//               className="
//                 text-xs
//                 sm:text-sm
//                 tracking-[0.3em]
//                 text-[#2C2C2C]/60
//                 mb-6
//               "
//             >
//               CREATIVE MEDIA & DESIGN
//             </p>

//             {/* Heading */}
//             <h1
//               className="
//                 text-6xl
//                 sm:text-7xl
//                 md:text-8xl
//                 lg:text-[6.8rem]
//                 xl:text-[7.5rem]
//                 font-light
//                 leading-[0.88]
//                 tracking-tight
//               "
//             >
//               Capturing
//               <br />
//               <span className="font-semibold italic">Vision.</span>
//             </h1>

//             {/* Description */}
//             <p
//               className="
//                 mt-7
//                 max-w-lg
//                 text-base
//                 sm:text-lg
//                 text-[#2C2C2C]/65
//                 leading-relaxed
//               "
//             >
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
//                 mt-9
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
//                   ml-3
//                   text-lg
//                   transition-transform
//                   duration-300
//                   group-hover:translate-x-1
//                   group-hover:-translate-y-1
//                 "
//               ></span>
//             </Link>
//           </div>

//           {/* ================= RIGHT SIDE SLIDER ================= */}
//           {/* <div className="hidden lg:block w-full lg:pl-2">
//             {" "} */}
//             {/* Image */}
//             {/* <div
//               className="
//                 relative
//                 w-full
//                 h-[360px]
//                 sm:h-[420px]
//                 lg:h-[450px]
//                 overflow-hidden
//                 rounded-[1.8rem]
//                 bg-[#E8E4DC]
//               "
//             > */}
//               {/* Slides */}
//               {/* {slides.map((slide, index) => (
//                 <img
//                   key={slide.image}
//                   src={slide.image}
//                   alt={slide.title}
//                   className={`
//                     absolute
//                     inset-0
//                     w-full
//                     h-full
//                     object-cover
//                     transition-all
//                     duration-1000
//                     ease-in-out
//                     ${
//                       index === currentSlide
//                         ? "opacity-100 scale-100"
//                         : "opacity-0 scale-105"
//                     }
//                   `}
//                 />
//               ))} */}

//               {/* Dark gradient */}
//               {/* <div
//                 className="
//                   absolute
//                   inset-0
//                   bg-gradient-to-t
//                   from-black/55
//                   via-black/5
//                   to-transparent
//                 "
//               /> */}

//               {/* Counter */}
//               {/* <div
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
//                 {String(currentSlide + 1).padStart(2, "0")} /{" "}
//                 {String(slides.length).padStart(2, "0")}
//               </div> */}

//               {/* Project Name */}
//               {/* <div
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
//                   {slides[currentSlide].category}
//                 </p>

//                 <h2
//                   className="
//                     text-xl
//                     sm:text-2xl
//                     font-medium
//                   "
//                 >
//                   {slides[currentSlide].title}
//                 </h2>
//               </div>
//             </div> */}
//             {/* Slider Controls */}
//             {/* <div
//               className="
//                 flex
//                 items-center
//                 justify-between
//                 mt-4
//               "
//             > */}
//               {/* Progress */}
//               {/* <div className="flex items-center gap-2">
//                 {slides.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentSlide(index)}
//                     aria-label={`Go to slide ${index + 1}`}
//                     className={`
//                       h-[3px]
//                       rounded-full
//                       transition-all
//                       duration-500
//                       ${
//                         index === currentSlide
//                           ? "w-9 bg-[#FF9800]"
//                           : "w-4 bg-[#2C2C2C]/20"
//                       }
//                     `}
//                   />
//                 ))}
//               </div> */}

//               {/* Arrows */}
//               {/* <div className="flex gap-2">
//                 <button
//                   onClick={prevSlide}
//                   aria-label="Previous slide"
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
//                   onClick={nextSlide}
//                   aria-label="Next slide"
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
//         </div> */}
//       </div>
//     </section>
//   );
// }

// export default Hero;

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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-20">
        {/* Small Label */}
        <p className="text-xs sm:text-sm tracking-[0.3em] text-[#2C2C2C]/60 mb-6">
          CREATIVE MEDIA & DESIGN
        </p>

        {/* Main Heading */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[0.9] tracking-tight">
          Capturing
          <br />
          <span className="font-semibold italic text-[#2C2C2C]">Vision.</span>
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
              text-lg
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          ></span>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
