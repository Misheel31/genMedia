// import { Clock, GraduationCap, IndianRupee } from "lucide-react";
// import { useEffect, useState } from "react";
// import EnrollmentModal from "./EnrollmentModel";

// function AcademyDetail() {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await fetch(`${API_URL}/api/courses/get-courses`);

//         if (!response.ok) {
//           throw new Error("Failed to fetch courses");
//         }

//         const data = await response.json();

//         setCourses(data);
//       } catch (error) {
//         console.error("Course fetch error:", error);
//         setError("Unable to load courses. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <>
//       <section className="min-h-screen bg-[#F8F6F1] text-[#2C2C2C] pt-32 pb-24">
//         <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
//           {/* Header */}
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <p className="text-3xl sm:text-3xl tracking-[0.35em] text-[#FF9800] mb-5">
//               GEN MEDIA ACADEMY
//             </p>

//             <h1 className="text-xl sm:text-xl md:text-xl font-light leading-tight">
//               Learn. Create.{" "}
//               <span className="font-semibold italic text-[#FF9800]">Grow.</span>
//             </h1>

//             <p className="mt-6 text-base sm:text-lg text-[#2C2C2C]/60 leading-relaxed">
//               Explore our creative and digital courses designed to help you
//               develop practical skills and build a career in the digital
//               industry.
//             </p>
//           </div>

//           {/* Loading */}
//           {loading && (
//             <div className="text-center py-20">
//               <p className="text-sm text-[#2C2C2C]/60">Loading courses...</p>
//             </div>
//           )}

//           {/* Error */}
//           {error && !loading && (
//             <div className="text-center py-20">
//               <p className="text-sm text-red-600">{error}</p>
//             </div>
//           )}

//           {/* No Courses */}
//           {!loading && !error && courses.length === 0 && (
//             <div className="text-center py-20">
//               <p className="text-sm text-[#2C2C2C]/60">
//                 No courses available at the moment.
//               </p>
//             </div>
//           )}

//           {/* Course Cards */}
//           {!loading && !error && courses.length > 0 && (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
//               {courses.map((course) => (
//                 <div
//                   key={course._id}
//                   className="
//                     bg-white
//                     border border-[#2C2C2C]/10
//                     p-7
//                     rounded-xl
//                     transition-all
//                     duration-300
//                     hover:-translate-y-2
//                     hover:shadow-xl
//                     h-full
//                     flex
//                     flex-col
//                   "
//                 >
//                   {/* Course Title */}
//                   <h2 className="text-2xl font-semibold min-h-[36px]">
//                     {course.title}
//                   </h2>

//                   {/* Description */}
//                   <div className="mt-4 min-h-[84px]">
//                     <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">
//                       {course.description}
//                     </p>
//                   </div>

//                   {/* Course Details */}
//                   <div
//                     className="
//                       mt-6
//                       min-h-[88px]
//                       flex
//                       flex-wrap
//                       content-start
//                       items-start
//                       gap-3
//                       text-xs
//                     "
//                   >
//                     {/* Duration */}
//                     <span
//                       className="
//                         inline-flex
//                         items-center
//                         gap-2
//                         bg-[#F8F6F1]
//                         px-3
//                         py-2
//                         rounded-full
//                         whitespace-nowrap
//                       "
//                     >
//                       <Clock
//                         size={14}
//                         strokeWidth={1.8}
//                         className="text-[#FF9800]"
//                       />

//                       <span>{course.duration}</span>
//                     </span>

//                     {/* Level */}
//                     <span
//                       className="
//                         inline-flex
//                         items-center
//                         gap-2
//                         bg-[#F8F6F1]
//                         px-3
//                         py-2
//                         rounded-full
//                         whitespace-nowrap
//                       "
//                     >
//                       <GraduationCap
//                         size={15}
//                         strokeWidth={1.8}
//                         className="text-[#FF9800]"
//                       />

//                       <span>{course.level}</span>
//                     </span>

//                     {/* Price */}
//                     <span
//                       className="
//                         inline-flex
//                         items-center
//                         gap-2
//                         bg-[#F8F6F1]
//                         px-3
//                         py-2
//                         rounded-full
//                         whitespace-nowrap
//                       "
//                     >
//                       <IndianRupee
//                         size={14}
//                         strokeWidth={1.8}
//                         className="text-[#FF9800]"
//                       />

//                       <span>{course.price}/per month</span>
//                     </span>
//                   </div>

//                   {/* What You'll Learn */}
//                   <div className="mt-7 min-h-[220px]">
//                     <h3 className="text-sm font-semibold mb-4">
//                       What You'll Learn
//                     </h3>

//                     <ul className="space-y-2">
//                       {course.topics.map((topic, index) => (
//                         <li
//                           key={index}
//                           className="
//                             text-sm
//                             text-[#2C2C2C]/65
//                             flex
//                             items-start
//                             gap-2
//                           "
//                         >
//                           <span className="text-[#FF9800]">✓</span>

//                           <span>{topic}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* Enroll Button */}
//                   <button
//                     onClick={() => setSelectedCourse(course)}
//                     className="
//                       mt-auto
//                       w-full
//                       pt-7
//                     "
//                   >
//                     <span
//                       className="
//                         block
//                         w-full
//                         py-3
//                         bg-[#2C2C2C]
//                         text-white
//                         rounded-lg
//                         text-sm
//                         font-medium
//                         transition-all
//                         duration-300
//                         hover:bg-[#FF9800]
//                         hover:text-[#2C2C2C]
//                       "
//                     >
//                       Enroll Now
//                     </span>
//                   </button>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Enrollment Modal */}
//       {selectedCourse && (
//         <EnrollmentModal
//           course={selectedCourse}
//           onClose={() => setSelectedCourse(null)}
//         />
//       )}
//     </>
//   );
// }

// export default AcademyDetail;

import {
  ArrowRight,
  Camera,
  Check,
  Clock,
  Code2,
  GraduationCap,
  IndianRupee,
  Palette,
  Play,
  Users,
  Video,
} from "lucide-react";
import { useEffect, useState } from "react";
import EnrollmentModal from "./EnrollmentModel";

function AcademyDetail() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  /*
   * Main combined course.
   * This is intentionally kept separate from MongoDB so it can
   * always appear as the main Academy program.
   */
  const featuredCourse = {
    _id: "digital-multimedia-design",
    title: "Digital & Multimedia Design",
    description:
      "A complete creative program combining graphic design, branding, photography, video editing, motion graphics and digital content creation.",
    duration: "3 Months",
    level: "Beginner to Advanced",
    price: "25000",
    topics: [
      "Graphic Design",
      "Brand Identity",
      "Social Media Design",
      "Photography",
      "Video Editing",
      "Motion Graphics",
      "Content Creation",
      "Digital Design",
    ],
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);

        const response = await fetch(`${API_URL}/api/courses/get-courses`);

        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }

        const data = await response.json();

        setCourses(Array.isArray(data) ? data : []);
        setError("");
      } catch (err) {
        console.error("Course fetch error:", err);

        setError("Unable to load additional courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [API_URL]);

  /*
   * Choose an icon depending on the course name.
   */
  const getCourseIcon = (title = "") => {
    const name = title.toLowerCase();

    if (
      name.includes("video") ||
      name.includes("multimedia") ||
      name.includes("motion")
    ) {
      return <Video size={20} />;
    }

    if (
      name.includes("web") ||
      name.includes("development") ||
      name.includes("coding")
    ) {
      return <Code2 size={20} />;
    }

    if (name.includes("photo") || name.includes("photography")) {
      return <Camera size={20} />;
    }

    return <Palette size={20} />;
  };

  return (
    <>
      <main className="min-h-screen bg-[#F8F6F1] text-[#2C2C2C] overflow-hidden">
        {/* =====================================================
            MAIN ACADEMY SECTION
        ====================================================== */}
        <section className="pt-28 pb-24 lg:pt-32 lg:pb-32">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              {/* =================================================
                  LEFT COLUMN
              ================================================== */}
              <div className="lg:col-span-5">
                {/* Academy Heading */}
                <div className="mb-10">
                  <p className="text-xs sm:text-sm tracking-[0.35em] text-[#FF9800] mb-5">
                    GEN MEDIA ACADEMY
                  </p>

                  <h1
                    className="
                      text-5xl
                      sm:text-6xl
                      lg:text-7xl
                      font-light
                      leading-[0.9]
                      tracking-tight
                    "
                  >
                    Learn.
                    <br />
                    <span className="font-semibold">Create.</span>{" "}
                    <span className="font-semibold italic text-[#FF9800]">
                      Grow.
                    </span>
                  </h1>

                  <p
                    className="
                      mt-7
                      text-sm
                      sm:text-base
                      text-[#2C2C2C]/60
                      leading-relaxed
                      max-w-lg
                    "
                  >
                    Build practical creative and digital skills through hands-on
                    learning, real projects and industry-focused training.
                  </p>
                </div>

                {/* =================================================
                    FEATURED COURSE LABEL
                ================================================== */}
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-xs tracking-[0.2em] font-semibold text-[#2C2C2C]/50">
                    FEATURED PROGRAM
                  </span>

                  <div className="h-px flex-1 bg-[#2C2C2C]/10" />
                </div>

                {/* =================================================
                    FEATURED DIGITAL & MULTIMEDIA COURSE
                ================================================== */}
                <div
                  className="
                    relative
                    bg-[#2C2C2C]
                    text-white
                    rounded-[26px]
                    p-6
                    sm:p-8
                    overflow-hidden
                    shadow-xl
                  "
                >
                  {/* Decorative circle */}
                  <div
                    className="
                      absolute
                      -right-20
                      -top-20
                      w-56
                      h-56
                      rounded-full
                      bg-[#FF9800]/10
                    "
                  />

                  <div
                    className="
                      absolute
                      right-10
                      bottom-10
                      w-24
                      h-24
                      rounded-full
                      border
                      border-[#FF9800]/20
                    "
                  />

                  {/* Featured badge */}
                  <div className="relative flex items-center justify-between mb-7">
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        px-3
                        py-1.5
                        rounded-full
                        bg-[#FF9800]
                        text-[#2C2C2C]
                        text-[10px]
                        font-bold
                        tracking-[0.15em]
                      "
                    >
                      <Play size={11} fill="currentColor" />
                      MAIN PROGRAM
                    </span>

                    <span className="text-xs text-white/40">01</span>
                  </div>

                  {/* Icon */}
                  <div
                    className="
                      relative
                      w-14
                      h-14
                      rounded-2xl
                      bg-white/10
                      text-[#FF9800]
                      flex
                      items-center
                      justify-center
                      mb-6
                    "
                  >
                    <Palette size={27} />
                  </div>

                  {/* Title */}
                  <h2
                    className="
                      relative
                      text-3xl
                      sm:text-4xl
                      font-semibold
                      leading-tight
                      max-w-md
                    "
                  >
                    Digital & <span className="text-[#FF9800]">Multimedia</span>{" "}
                    Design
                  </h2>

                  {/* Description */}
                  <p
                    className="
                      relative
                      mt-5
                      text-sm
                      text-white/55
                      leading-relaxed
                      max-w-md
                    "
                  >
                    {featuredCourse.description}
                  </p>

                  {/* Course information */}
                  <div
                    className="
                      relative
                      grid
                      grid-cols-2
                      gap-3
                      mt-7
                    "
                  >
                    {/* Duration */}
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-[#FF9800] mb-2">
                        <Clock size={15} />

                        <span className="text-[10px] uppercase tracking-wider text-white/40">
                          Duration
                        </span>
                      </div>

                      <p className="text-sm font-medium">
                        {featuredCourse.duration}
                      </p>
                    </div>

                    {/* Level */}
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-[#FF9800] mb-2">
                        <GraduationCap size={15} />

                        <span className="text-[10px] uppercase tracking-wider text-white/40">
                          Level
                        </span>
                      </div>

                      <p className="text-sm font-medium">
                        {featuredCourse.level}
                      </p>
                    </div>
                  </div>

                  {/* Topics */}
                  <div className="relative mt-7">
                    <p className="text-xs font-semibold mb-4 text-white/80">
                      WHAT YOU'LL LEARN
                    </p>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                      {featuredCourse.topics.map((topic, index) => (
                        <div
                          key={index}
                          className="
                              flex
                              items-start
                              gap-2
                              text-xs
                              text-white/55
                            "
                        >
                          <Check
                            size={14}
                            className="
                                text-[#FF9800]
                                mt-0.5
                                flex-shrink-0
                              "
                          />

                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enroll Button */}
                  <button
                    onClick={() => setSelectedCourse(featuredCourse)}
                    className="
                      relative
                      mt-8
                      w-full
                      py-4
                      rounded-xl
                      bg-[#FF9800]
                      text-[#2C2C2C]
                      font-semibold
                      text-sm
                      flex
                      items-center
                      justify-center
                      gap-2
                      hover:bg-white
                      transition-all
                    "
                  >
                    Enroll in Digital & Multimedia Design
                    <ArrowRight size={17} />
                  </button>
                </div>

                {/* =================================================
                    OTHER COURSES
                ================================================== */}
                <div className="mt-12">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs tracking-[0.2em] text-[#2C2C2C]/40">
                      OTHER COURSES
                    </span>

                    <div className="h-px flex-1 bg-[#2C2C2C]/10" />
                  </div>

                  {loading && (
                    <div
                      className="
                        bg-white
                        border
                        border-[#2C2C2C]/10
                        rounded-2xl
                        p-8
                        text-center
                      "
                    >
                      <p className="text-sm text-[#2C2C2C]/50">
                        Loading courses...
                      </p>
                    </div>
                  )}

                  {!loading && error && (
                    <div
                      className="
                          bg-white
                          border
                          border-red-200
                          rounded-2xl
                          p-6
                        "
                    >
                      <p className="text-sm text-red-600">{error}</p>
                    </div>
                  )}

                  {!loading && !error && courses.length === 0 && (
                    <div
                      className="
                          bg-white
                          border
                          border-[#2C2C2C]/10
                          rounded-2xl
                          p-7
                        "
                    >
                      <p className="text-sm text-[#2C2C2C]/50">
                        More specialized courses will be available soon.
                      </p>
                    </div>
                  )}

                  {!loading && courses.length > 0 && (
                    <div className="space-y-3">
                      {courses.map((course, index) => (
                        <div
                          key={course._id || index}
                          className="
                              group
                              bg-white
                              border
                              border-[#2C2C2C]/10
                              rounded-2xl
                              p-5
                              transition-all
                              duration-300
                              hover:-translate-y-0.5
                              hover:shadow-md
                            "
                        >
                          <div className="flex items-center gap-4">
                            {/* Icon */}
                            <div
                              className="
                                  flex-shrink-0
                                  w-11
                                  h-11
                                  rounded-xl
                                  bg-[#F8F6F1]
                                  text-[#FF9800]
                                  flex
                                  items-center
                                  justify-center
                                "
                            >
                              {getCourseIcon(course.title)}
                            </div>

                            {/* Information */}
                            <div className="flex-1 min-w-0">
                              <h3
                                className="
                                    text-sm
                                    sm:text-base
                                    font-semibold
                                  "
                              >
                                {course.title}
                              </h3>

                              <div
                                className="
                                    flex
                                    flex-wrap
                                    items-center
                                    gap-x-4
                                    gap-y-1
                                    mt-2
                                    text-[11px]
                                    text-[#2C2C2C]/45
                                  "
                              >
                                {course.duration && (
                                  <span className="flex items-center gap-1.5">
                                    <Clock size={12} />
                                    {course.duration}
                                  </span>
                                )}

                                {course.level && (
                                  <span className="flex items-center gap-1.5">
                                    <GraduationCap size={12} />
                                    {course.level}
                                  </span>
                                )}

                                {course.price && (
                                  <span className="flex items-center gap-1.5">
                                    <IndianRupee size={12} />
                                    {course.price}
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Enroll */}
                            <button
                              onClick={() => setSelectedCourse(course)}
                              className="
                                  flex-shrink-0
                                  w-10
                                  h-10
                                  rounded-full
                                  border
                                  border-[#2C2C2C]/10
                                  flex
                                  items-center
                                  justify-center
                                  text-[#2C2C2C]
                                  hover:bg-[#FF9800]
                                  hover:border-[#FF9800]
                                  transition-all
                                "
                              aria-label={`Enroll in ${course.title}`}
                            >
                              <ArrowRight size={16} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* =================================================
                  RIGHT COLUMN — STUDENT EXPERIENCE
              ================================================== */}
              <div className="lg:col-span-7">
                <div className="lg:sticky lg:top-28">
                  {/* =================================================
                      MAIN STUDENT IMAGE
                  ================================================== */}
                  <div
                    className="
                      relative
                      h-[420px]
                      sm:h-[520px]
                      lg:h-[560px]
                      rounded-[28px]
                      overflow-hidden
                    "
                  >
                    <video
                      src="/videos/Video_imageslider.MOV"
                      alt="Students learning at Gen Media Academy"
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-700
                        hover:scale-105
                      "
                    />

                    {/* Overlay */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/85
                        via-black/25
                        to-transparent
                      "
                    />

                    {/* Floating Badge */}
                    <div
                      className="
                        absolute
                        top-6
                        right-6
                        w-20
                        h-20
                        sm:w-24
                        sm:h-24
                        rounded-full
                        bg-[#FF9800]
                        text-[#2C2C2C]
                        flex
                        items-center
                        justify-center
                        text-center
                        text-[9px]
                        sm:text-[10px]
                        font-bold
                        leading-tight
                        rotate-6
                      "
                    >
                      LEARN
                      <br />
                      CREATE
                      <br />
                      GROW
                    </div>

                    {/* Image Content */}
                    <div
                      className="
                        absolute
                        left-7
                        right-7
                        bottom-7
                        sm:left-10
                        sm:right-10
                        sm:bottom-10
                        text-white
                      "
                    >
                      <p className="text-xs tracking-[0.3em] text-[#FF9800] mb-3">
                        LIFE AT GEN MEDIA
                      </p>

                      <h2
                        className="
                          text-3xl
                          sm:text-4xl
                          lg:text-5xl
                          font-medium
                          leading-tight
                        "
                      >
                        Learn.
                        <br />
                        Practice.
                        <br />
                        <span className="text-[#FF9800]">Create.</span>
                      </h2>

                      <p
                        className="
                          mt-5
                          max-w-md
                          text-sm
                          text-white/65
                          leading-relaxed
                        "
                      >
                        Go beyond theory. Work on real projects, explore
                        creative tools and develop the skills needed for today's
                        digital world.
                      </p>
                    </div>
                  </div>

                  {/* =================================================
                      SMALL STUDENT IMAGE GRID
                  ================================================== */}
                  <div className="grid grid-cols-3 gap-3 mt-3">
                    <div
                      className="
                        h-32
                        sm:h-40
                        rounded-2xl
                        overflow-hidden
                      "
                    >
                      <img
                        src="/images/academy/students.jpg"
                        alt="Students learning"
                        className="
                          w-full
                          h-full
                          object-cover
                          hover:scale-105
                          transition-transform
                          duration-500
                        "
                      />
                    </div>

                    <div
                      className="
                        h-32
                        sm:h-40
                        rounded-2xl
                        overflow-hidden
                      "
                    >
                      <img
                        src="/images/academy/student-designing.jpg"
                        alt="Student working on a design project"
                        className="
                          w-full
                          h-full
                          object-cover
                          hover:scale-105
                          transition-transform
                          duration-500
                        "
                      />
                    </div>

                    <div
                      className="
                        h-32
                        sm:h-40
                        rounded-2xl
                        overflow-hidden
                      "
                    >
                      <img
                        src="/images/academy/creative-work.jpg"
                        alt="Creative student work"
                        className="
                          w-full
                          h-full
                          object-cover
                          hover:scale-105
                          transition-transform
                          duration-500
                        "
                      />
                    </div>
                  </div>

                  {/* =================================================
                      STUDENT EXPERIENCE
                  ================================================== */}
                  <div
                    className="
                      grid
                      grid-cols-1
                      sm:grid-cols-3
                      gap-5
                      mt-8
                      pt-8
                      border-t
                      border-[#2C2C2C]/10
                    "
                  >
                    {/* Learn Together */}
                    <div>
                      <div
                        className="
                          w-10
                          h-10
                          rounded-xl
                          bg-[#2C2C2C]
                          text-[#FF9800]
                          flex
                          items-center
                          justify-center
                          mb-4
                        "
                      >
                        <Users size={19} />
                      </div>

                      <h3 className="text-sm font-semibold">Learn Together</h3>

                      <p
                        className="
                          mt-2
                          text-xs
                          text-[#2C2C2C]/50
                          leading-relaxed
                        "
                      >
                        Learn, collaborate and grow alongside other creative
                        minds.
                      </p>
                    </div>

                    {/* Practical Work */}
                    <div>
                      <div
                        className="
                          w-10
                          h-10
                          rounded-xl
                          bg-[#2C2C2C]
                          text-[#FF9800]
                          flex
                          items-center
                          justify-center
                          mb-4
                        "
                      >
                        <Camera size={19} />
                      </div>

                      <h3 className="text-sm font-semibold">Practical Work</h3>

                      <p
                        className="
                          mt-2
                          text-xs
                          text-[#2C2C2C]/50
                          leading-relaxed
                        "
                      >
                        Build skills through practical assignments and creative
                        projects.
                      </p>
                    </div>

                    {/* Portfolio */}
                    <div>
                      <div
                        className="
                          w-10
                          h-10
                          rounded-xl
                          bg-[#2C2C2C]
                          text-[#FF9800]
                          flex
                          items-center
                          justify-center
                          mb-4
                        "
                      >
                        <Palette size={19} />
                      </div>

                      <h3 className="text-sm font-semibold">
                        Build Your Portfolio
                      </h3>

                      <p
                        className="
                          mt-2
                          text-xs
                          text-[#2C2C2C]/50
                          leading-relaxed
                        "
                      >
                        Turn your learning into projects you can proudly
                        showcase.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}
        <section
          className="
            bg-[#2C2C2C]
            text-white
            px-6
            sm:px-10
            lg:px-16
            py-20
            lg:py-24
          "
        >
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xs tracking-[0.3em] text-[#FF9800] mb-5">
              START YOUR CREATIVE JOURNEY
            </p>

            <h2
              className="
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-medium
                leading-tight
              "
            >
              One program.
              <br />
              <span className="text-[#FF9800]">Endless possibilities.</span>
            </h2>

            <p
              className="
                max-w-xl
                mx-auto
                mt-6
                text-sm
                sm:text-base
                text-white/50
                leading-relaxed
              "
            >
              Learn design, media and digital skills in one complete creative
              program and start building your future in the digital industry.
            </p>

            <button
              onClick={() => setSelectedCourse(featuredCourse)}
              className="
                inline-flex
                items-center
                gap-3
                mt-8
                px-7
                py-3.5
                rounded-full
                bg-[#FF9800]
                text-[#2C2C2C]
                text-sm
                font-semibold
                hover:bg-white
                transition-all
              "
            >
              ENROLL NOW
              <ArrowRight size={17} />
            </button>
          </div>
        </section>
      </main>

      {/* =====================================================
          ENROLLMENT MODAL
      ====================================================== */}
      {selectedCourse && (
        <EnrollmentModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </>
  );
}

export default AcademyDetail;
