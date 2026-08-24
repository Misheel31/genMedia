import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/portfolios/featured",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch portfolio");
        }

        const data = await response.json();

        console.log("portfolio data:", data);

        // Only show the first 3 featured projects
        setProjects(data.slice(0, 3));
      } catch (error) {
        console.error("Portfolio fetch error:", error);
        setError("Unable to load portfolio.");
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  return (
    <section
      id="portfolio"
      className="relative bg-white text-[#2C2C2C] py-16 sm:py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-xs sm:text-sm tracking-[0.3em] text-[#FF9800] mb-4">
              FEATURED WORK
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[0.9] tracking-tight">
              Selected{" "}
              <span className="font-semibold italic text-[#FF9800]">Work.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#2C2C2C]/55 leading-relaxed">
            A selection of creative work showcasing our approach to branding,
            photography, video, and digital media.
          </p>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="py-20 text-center">
            <p className="text-sm text-[#2C2C2C]/50">
              Loading featured work...
            </p>
          </div>
        )}

        {/* ERROR */}
        {!loading && error && (
          <div className="py-20 text-center">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        {/* NO PROJECTS */}
        {!loading && !error && projects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-sm text-[#2C2C2C]/50">
              No featured projects available.
            </p>
          </div>
        )}

        {/* FEATURED PROJECTS */}
        {!loading && !error && projects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project._id}
                to={`/portfolio/${project._id}`}
                className="group block"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden bg-[#F4F2ED] rounded-sm">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-auto
                      object-contain
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* Orange Overlay */}
                  <div
                    className="
                    absolute
                    inset-0
                    bg-[#FF9800]/0
                    group-hover:bg-[#FF9800]/10
                    transition-all
                    duration-500
                  "
                  />

                  {/* CATEGORY */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="
                      inline-block
                      bg-white
                      text-[#2C2C2C]
                      px-4
                      py-3
                      text-[10px]
                      font-medium
                      tracking-[0.18em]
                      uppercase
                    "
                    >
                      {Array.isArray(project.category)
                        ? project.category[0]
                        : project.category}
                    </span>
                  </div>

                  {/* MEDIA INDICATOR */}
                  {project.video && (
                    <div className="absolute bottom-4 right-4">
                      <span
                        className="
                        bg-[#2C2C2C]/80
                        text-white
                        px-4
                        py-3
                        text-[10px]
                        tracking-[0.15em]
                        uppercase
                        backdrop-blur-sm
                      "
                      >
                        VIDEO
                      </span>
                    </div>
                  )}

                  {project.pdf && !project.video && (
                    <div className="absolute bottom-4 right-4">
                      <span
                        className="
                          bg-white
                          text-[#2C2C2C]
                          px-4
                          py-3
                          text-[10px]
                          tracking-[0.15em]
                          uppercase
                        "
                      >
                        CATALOGUE
                      </span>
                    </div>
                  )}
                </div>

                {/* PROJECT INFO */}
                <div className="mt-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3
                        className="
                          text-xl
                          sm:text-2xl
                          font-medium
                          leading-tight
                          transition-colors
                          duration-300
                          group-hover:text-[#FF9800]
                        "
                      >
                        {project.title}
                      </h3>

                      <p className="mt-2 text-sm text-[#2C2C2C]/50">
                        {project.client && `${project.client} `}
                        {project.year && `• ${project.year}`}
                      </p>
                    </div>

                    {/* Arrow */}
                    <span
                      className="
                        text-xl
                        text-[#2C2C2C]/30
                        transition-all
                        duration-300
                        group-hover:text-[#FF9800]
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    ></span>
                  </div>

                  {/* DESCRIPTION */}
                  {project.description && (
                    <p className="mt-4 text-sm text-[#2C2C2C]/55 leading-relaxed max-w-md">
                      {project.description}
                    </p>
                  )}

                  {/* SERVICES */}
                  {project.services && project.services.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.services.slice(0, 3).map((service) => (
                        <span
                          key={service}
                          className="
                            text-[9px]
                            uppercase
                            tracking-[0.12em]
                            text-[#2C2C2C]/50
                            border
                            border-[#2C2C2C]/15
                            px-2
                            py-1
                          "
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* VIEW ALL */}
        <div className="flex justify-center mt-16">
          <Link
            to="/portfolio"
            className="
              inline-flex
              items-center
              gap-3
              px-7
              py-3
              border
              border-[#2C2C2C]
              text-[#2C2C2C]
              text-xs
              font-medium
              tracking-[0.08em]
              transition-all
              duration-300
              hover:bg-[#FF9800]
              hover:border-[#FF9800]
            "
          >
            VIEW ALL WORK <span className="text-base"></span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
