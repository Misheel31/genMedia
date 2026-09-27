import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FeaturedPortfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const response = await fetch(
          "https://genmedia-backend.onrender.com/api/portfolios/featured",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch featured portfolio");
        }

        const data = await response.json();

        setProjects(Array.isArray(data) ? data.slice(0, 3) : []);
      } catch (error) {
        console.error("Featured portfolio error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  if (loading) {
    return (
      <section className="py-20 text-center">
        <p>Loading featured work...</p>
      </section>
    );
  }

  return (
    <section
      id="portfolio"
      className="relative bg-white text-[#2C2C2C] py-16 sm:py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-xs sm:text-sm tracking-[0.3em] text-[#FF9800] mb-4">
              FEATURED WORK
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light">
              Selected{" "}
              <span className="font-semibold italic text-[#FF9800]">Work.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#2C2C2C]/55">
            A selection of creative work showcasing our approach to branding,
            photography, video, and digital media.
          </p>
        </div>

        {projects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project._id}
                to={`/portfolio/${project._id}`}
                className="group block"
              >
                <div className="relative overflow-hidden bg-[#F4F2ED] rounded-sm h-[500px]">
                  {project.video ? (
                    <video
                      src={project.video}
                      muted
                      playsInline
                      loop
                      autoPlay
                      preload="metadata"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      No media available
                    </div>
                  )}

                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-white text-[#2C2C2C] px-4 py-3 text-[10px] tracking-[0.18em] uppercase">
                      {Array.isArray(project.category)
                        ? project.category[0]
                        : project.category}
                    </span>
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className="text-xl sm:text-2xl font-medium group-hover:text-[#FF9800] transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#2C2C2C]/50">
                    {project.client && `${project.client} `}
                    {project.year && `• ${project.year}`}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* VIEW ALL */}
        <div className="flex justify-center mt-16">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-3 px-7 py-3 border border-[#2C2C2C] text-[#2C2C2C] text-xs font-medium tracking-[0.08em] transition-all duration-300 hover:bg-[#FF9800] hover:border-[#FF9800]"
          >
            VIEW ALL WORK →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedPortfolio;
