import { Clock, GraduationCap, IndianRupee } from "lucide-react";
import { useEffect, useState } from "react";
import EnrollmentModal from "./EnrollmentModel";

function AcademyDetail() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${API_URL}/api/courses/get-courses`);

        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }

        const data = await response.json();

        setCourses(data);
      } catch (error) {
        console.error("Course fetch error:", error);
        setError("Unable to load courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      <section className="min-h-screen bg-[#F8F6F1] text-[#2C2C2C] pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-3xl sm:text-3xl tracking-[0.35em] text-[#FF9800] mb-5">
              GEN MEDIA ACADEMY
            </p>

            <h1 className="text-xl sm:text-xl md:text-xl font-light leading-tight">
              Learn. Create.{" "}
              <span className="font-semibold italic text-[#FF9800]">Grow.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#2C2C2C]/60 leading-relaxed">
              Explore our creative and digital courses designed to help you
              develop practical skills and build a career in the digital
              industry.
            </p>
          </div>

          {/* Loading */}
          {loading && (
            <div className="text-center py-20">
              <p className="text-sm text-[#2C2C2C]/60">Loading courses...</p>
            </div>
          )}

          {/* Error */}
          {error && !loading && (
            <div className="text-center py-20">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {/* No Courses */}
          {!loading && !error && courses.length === 0 && (
            <div className="text-center py-20">
              <p className="text-sm text-[#2C2C2C]/60">
                No courses available at the moment.
              </p>
            </div>
          )}

          {/* Course Cards */}
          {!loading && !error && courses.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {courses.map((course) => (
                <div
                  key={course._id}
                  className="
                    bg-white
                    border border-[#2C2C2C]/10
                    p-7
                    rounded-xl
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-xl
                    h-full
                    flex
                    flex-col
                  "
                >
                  {/* Course Title */}
                  <h2 className="text-2xl font-semibold min-h-[36px]">
                    {course.title}
                  </h2>

                  {/* Description */}
                  <div className="mt-4 min-h-[84px]">
                    <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  {/* Course Details */}
                  <div
                    className="
                      mt-6
                      min-h-[88px]
                      flex
                      flex-wrap
                      content-start
                      items-start
                      gap-3
                      text-xs
                    "
                  >
                    {/* Duration */}
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        bg-[#F8F6F1]
                        px-3
                        py-2
                        rounded-full
                        whitespace-nowrap
                      "
                    >
                      <Clock
                        size={14}
                        strokeWidth={1.8}
                        className="text-[#FF9800]"
                      />

                      <span>{course.duration}</span>
                    </span>

                    {/* Level */}
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        bg-[#F8F6F1]
                        px-3
                        py-2
                        rounded-full
                        whitespace-nowrap
                      "
                    >
                      <GraduationCap
                        size={15}
                        strokeWidth={1.8}
                        className="text-[#FF9800]"
                      />

                      <span>{course.level}</span>
                    </span>

                    {/* Price */}
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        bg-[#F8F6F1]
                        px-3
                        py-2
                        rounded-full
                        whitespace-nowrap
                      "
                    >
                      <IndianRupee
                        size={14}
                        strokeWidth={1.8}
                        className="text-[#FF9800]"
                      />

                      <span>{course.price}/per month</span>
                    </span>
                  </div>

                  {/* What You'll Learn */}
                  <div className="mt-7 min-h-[220px]">
                    <h3 className="text-sm font-semibold mb-4">
                      What You'll Learn
                    </h3>

                    <ul className="space-y-2">
                      {course.topics.map((topic, index) => (
                        <li
                          key={index}
                          className="
                            text-sm
                            text-[#2C2C2C]/65
                            flex
                            items-start
                            gap-2
                          "
                        >
                          <span className="text-[#FF9800]">✓</span>

                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Enroll Button */}
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="
                      mt-auto
                      w-full
                      pt-7
                    "
                  >
                    <span
                      className="
                        block
                        w-full
                        py-3
                        bg-[#2C2C2C]
                        text-white
                        rounded-lg
                        text-sm
                        font-medium
                        transition-all
                        duration-300
                        hover:bg-[#FF9800]
                        hover:text-[#2C2C2C]
                      "
                    >
                      Enroll Now
                    </span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Enrollment Modal */}
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
