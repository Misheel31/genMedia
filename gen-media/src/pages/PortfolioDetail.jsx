import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

function PortfolioDetail() {
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const videoRef = useRef(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API_URL}/api/portfolios/${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch project");
        }

        const data = await response.json();

        setProject(data);
      } catch (err) {
        console.error("Error fetching project:", err);
        setError("Failed to load project.");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const checkVideo = () => {
      console.log("===== VIDEO TEST =====");
      console.log("duration:", video.duration);
      console.log("readyState:", video.readyState);
      console.log("networkState:", video.networkState);
      console.log("error:", video.error);
    };

    const handleLoadedMetadata = () => {
      console.log("===== VIDEO METADATA LOADED =====");
      checkVideo();
    };

    const handleError = () => {
      console.log("===== VIDEO ERROR =====");
      checkVideo();
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("error", handleError);

    // Check immediately as well
    checkVideo();

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);

      video.removeEventListener("error", handleError);
    };
  }, [project]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#F8F6F1] flex items-center justify-center">
        <p className="text-sm text-[#2C2C2C]/50">Loading project...</p>
      </main>
    );
  }

  if (error || !project) {
    return (
      <main className="min-h-screen bg-[#F8F6F1] flex flex-col items-center justify-center px-6">
        <p className="text-sm text-red-600 mb-6">
          {error || "Project not found."}
        </p>

        <Link
          to="/portfolio"
          className="
            inline-flex
            items-center
            gap-2
            border
            border-[#2C2C2C]
            px-5
            py-2.5
            text-sm
            tracking-[0.1em]
            hover:bg-[#FF9800]
            hover:border-[#FF9800]
            transition-all
          "
        >
          ← BACK TO PORTFOLIO
        </Link>
      </main>
    );
  }

  const category = Array.isArray(project.category)
    ? project.category[0]
    : project.category;

  return (
    <main className="min-h-screen bg-[#F8F6F1] text-[#2C2C2C]">
      <section className="pt-20 sm:pt-24 pb-6">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <Link
            to="/portfolio"
            className="
              inline-flex
              items-center
              gap-2
              text-xs
              tracking-[0.12em]
              text-[#2C2C2C]/50
              hover:text-[#FF9800]
              transition-colors
              duration-300
              mb-5
            "
          >
            ← BACK TO PORTFOLIO
          </Link>

          {/* CATEGORY */}

          {category && (
            <p
              className="
                text-xs
                tracking-[0.28em]
                text-[#FF9800]
                uppercase
                mb-3
              "
            >
              {category}
            </p>
          )}

          {/* TITLE */}

          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-5xl
              font-light
              leading-none
              tracking-tight
            "
          >
            {project.title}
          </h1>

          {/* CLIENT / YEAR */}

          <div className="flex flex-wrap gap-6 mt-3">
            {project.client && (
              <p className="text-sm text-[#2C2C2C]/55">
                <span className="text-[#2C2C2C]/35">CLIENT</span>{" "}
                {project.client}
              </p>
            )}

            {project.year && (
              <p className="text-sm text-[#2C2C2C]/55">
                <span className="text-[#2C2C2C]/35">YEAR</span> {project.year}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          {project.video ? (
            <div
              className="
                relative
                w-full
                bg-black
                rounded-sm
                overflow-hidden
              "
            >
              <video
                ref={videoRef}
                src={project.video}
                controls
                playsInline
                preload="metadata"
                className="
                  block
                  w-full
                  h-auto
                  max-h-[70vh]
                  object-contain
                  mx-auto
                "
              />
            </div>
          ) : project.image ? (
            <div
              className="
                relative
                w-full
                h-[55vh]
                min-h-[350px]
                max-h-[650px]
                overflow-hidden
                rounded-sm
                bg-[#F4F2ED]
                flex
                items-center
                justify-center
              "
            >
              {/* FULL IMAGE */}

              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-full
                  object-contain
                "
              />

              {/* CATEGORY LABEL */}

              {category && (
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
                    {category}
                  </span>
                </div>
              )}

              {/* CATALOGUE LABEL */}

              {project.pdf && (
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
          ) : null}
        </div>
      </section>

      <section className="pb-12">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-[0.7fr_1.3fr]
              gap-10
              md:gap-16
            "
          >
            <div>
              {/* PROJECT */}

              <p
                className="
                  text-xs
                  tracking-[0.2em]
                  text-[#FF9800]
                  uppercase
                  mb-2
                "
              >
                PROJECT
              </p>

              <h2 className="text-xl sm:text-2xl font-light">
                {project.title}
              </h2>

              <div className="mt-5 space-y-4">
                {/* CLIENT */}

                {project.client && (
                  <div>
                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.15em]
                        text-[#2C2C2C]/35
                      "
                    >
                      Client
                    </p>

                    <p
                      className="
                        text-sm
                        text-[#2C2C2C]/65
                        mt-1
                      "
                    >
                      {project.client}
                    </p>
                  </div>
                )}

                {/* YEAR */}

                {project.year && (
                  <div>
                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.15em]
                        text-[#2C2C2C]/35
                      "
                    >
                      Year
                    </p>

                    <p
                      className="
                        text-sm
                        text-[#2C2C2C]/65
                        mt-1
                      "
                    >
                      {project.year}
                    </p>
                  </div>
                )}

                {/* CATEGORY */}

                {category && (
                  <div>
                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.15em]
                        text-[#2C2C2C]/35
                      "
                    >
                      Category
                    </p>

                    <p
                      className="
                        text-sm
                        text-[#2C2C2C]/65
                        mt-1
                      "
                    >
                      {category}
                    </p>
                  </div>
                )}
              </div>

              {/* SERVICES */}

              {project.services && project.services.length > 0 && (
                <div className="mt-6">
                  <p
                    className="
                        text-xs
                        uppercase
                        tracking-[0.15em]
                        text-[#2C2C2C]/35
                        mb-3
                      "
                  >
                    Services
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="
                            border
                            border-[#2C2C2C]/15
                            px-2.5
                            py-1.5
                            text-[10px]
                            uppercase
                            tracking-[0.08em]
                            text-[#2C2C2C]/55
                          "
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* PDF */}

              {project.pdf && (
                <div className="mt-7">
                  <a
                    href={project.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      bg-[#FF9800]
                      text-[#2C2C2C]
                      px-5
                      py-3
                      text-xs
                      font-semibold
                      tracking-[0.08em]
                      hover:bg-[#2C2C2C]
                      hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    OPEN FULL CATALOGUE
                    <span className="text-base">→</span>
                  </a>
                </div>
              )}
            </div>

            <div>
              {project.description && (
                <>
                  <p
                    className="
                      text-xs
                      tracking-[0.2em]
                      text-[#FF9800]
                      uppercase
                      mb-3
                    "
                  >
                    ABOUT THE PROJECT
                  </p>

                  <p
                    className="
                      text-base
                      sm:text-lg
                      text-[#2C2C2C]/60
                      leading-relaxed
                      max-w-xl
                    "
                  >
                    {project.description}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section
        className="
          border-t
          border-[#2C2C2C]/10
        "
      >
        <div
          className="
            max-w-6xl
            mx-auto
            px-5
            sm:px-6
            py-7
          "
        >
          <Link
            to="/portfolio"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              tracking-[0.1em]
              text-[#2C2C2C]/60
              hover:text-[#FF9800]
              transition-colors
            "
          >
            ← BACK TO ALL WORK
          </Link>
        </div>
      </section>
    </main>
  );
}

export default PortfolioDetail;
