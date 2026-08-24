import {
  Code2,
  Monitor,
  Palette,
  PenTool,
  PlayCircle,
  Video,
} from "lucide-react";

function Academy() {
  const availableCourses = [
    {
      title: "Graphic Design",
      icon: PenTool,
    },
    {
      title: "Video Editing",
      icon: Video,
    },
    {
      title: "Animation",
      icon: PlayCircle,
    },
    {
      title: "Digital Branding",
      icon: Palette,
    },
  ];

  const comingSoonCourses = [
    {
      title: "Web Designing",
      icon: Monitor,
    },
    {
      title: "Programming",
      icon: Code2,
    },
  ];

  return (
    <section
      id="academy"
      className="
        bg-[#F8F6F1]
        text-[#2C2C2C]
        pt-8
        sm:pt-10
        pb-16
        sm:pb-20
        border-t
        border-[#FF9800]/10
      "
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-10">
          <p
            className="
              text-[20px]
              sm:text-3xl
              tracking-[0.25em]
              font-semibold
              text-[#FF9800]
              mb-2
            "
          >
            GEN MEDIA ACADEMY
          </p>

          <h2
            className="
              text-xl
              sm:text-xl
              md:text-2xl
              font-semibold
              leading-tight
            "
          >
            Learn. Create. Grow.
          </h2>

          <p
            className="
              mt-3
              max-w-xl
              mx-auto
              text-xs
              sm:text-sm
              text-[#2C2C2C]/65
              leading-relaxed
            "
          >
            Practical courses designed to help you build in-demand creative
            skills and grow your career in the digital industry.
          </p>
        </div>


        <div
          className="
            flex
            flex-col
            lg:flex-row
            items-start
            justify-center
            gap-8
          "
        >

          <div className="w-full lg:flex-1">
            <h3 className="text-xs font-bold uppercase mb-4">
              Available Courses
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {availableCourses.map((course) => {
                const Icon = course.icon;

                return (
                  <div
                    key={course.title}
                    className="
                      bg-white
                      rounded-lg
                      min-h-[105px]
                      flex
                      flex-col
                      items-center
                      justify-center
                      text-center
                      px-3
                      py-4
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-md
                    "
                  >
                    {/* ICON */}

                    <div className="text-[#FF9800] mb-3">
                      <Icon size={28} strokeWidth={1.8} />
                    </div>

                    {/* TITLE */}

                    <h4
                      className="
                        text-xs
                        sm:text-sm
                        font-semibold
                        leading-tight
                      "
                    >
                      {course.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="
              hidden
              lg:block
              w-px
              h-28
              bg-[#2C2C2C]/15
              mt-8
            "
          />

          <div className="w-full lg:flex-1">
            <h3 className="text-xs font-bold uppercase mb-4">Coming Soon</h3>

            <div className="grid grid-cols-2 gap-3">
              {comingSoonCourses.map((course) => {
                const Icon = course.icon;

                return (
                  <div
                    key={course.title}
                    className="
                      bg-white
                      rounded-lg
                      min-h-[105px]
                      flex
                      flex-col
                      items-center
                      justify-center
                      text-center
                      px-3
                      py-4
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-md
                    "
                  >
                    {/* ICON */}

                    <div className="text-purple-500 mb-3">
                      <Icon size={28} strokeWidth={1.8} />
                    </div>

                    {/* TITLE */}

                    <h4
                      className="
                        text-xs
                        sm:text-sm
                        font-semibold
                        leading-tight
                      "
                    >
                      {course.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <a
            href="/academy/courses"
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
              font-semibold
              transition-all
              duration-300
              hover:bg-[#2C2C2C]
              hover:text-white
              hover:-translate-y-0.5
            "
          >
            EXPLORE COURSES
            <span className="text-base">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Academy;
