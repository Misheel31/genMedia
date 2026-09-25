import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios"

function SearchResults() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q") || "";

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      setLoading(true);

      axios
        .get(
          `${API_URL}/api/portfolios/search?q=${encodeURIComponent(
            searchTerm,
          )}`,
        )
        .then((response) => {
          setProjects(Array.isArray(response.data) ? response.data : []);
        })
        .catch((error) => {
          console.error("Axios Error:", error);
          setProjects([]);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setProjects([]);
      setLoading(false);
    }
  }, [searchTerm, API_URL]);

  return (
    <main className="min-h-screen bg-[#F8F6F1] text-[#2C2C2C] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 text-[#FF9800] mb-3">
            <Search size={20} />

            <span className="text-sm font-semibold tracking-widest uppercase">
              Search Results
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold">
            Results for "{searchTerm}"
          </h1>
        </div>

        {/* Loading */}
        {loading && <p className="text-[#2C2C2C]/60">Searching...</p>}

        {/* No Results */}
        {!loading && searchTerm && projects.length === 0 && (
          <div className="py-20 text-center">
            <h2 className="text-2xl font-semibold mb-3">No projects found</h2>

            <p className="text-[#2C2C2C]/60">
              Try searching for another project, category, service, or keyword.
            </p>
          </div>
        )}

        {/* Results */}
        {!loading && projects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project._id}
                to={`/portfolio/${project._id}`}
                className="
                  group
                  bg-white
                  rounded-2xl
                  overflow-hidden
                  border border-[#2C2C2C]/10
                  hover:-translate-y-1
                  hover:shadow-xl
                  transition-all duration-300
                "
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden bg-[#2C2C2C]/5">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        w-full
                        h-full
                        object-cover
                        group-hover:scale-105
                        transition-transform duration-500
                      "
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-[#2C2C2C]/40">No Image</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {Array.isArray(project.category) &&
                      project.category.map((category) => (
                        <span
                          key={category}
                          className="
                            text-xs
                            px-3
                            py-1
                            rounded-full
                            bg-[#FF9800]/10
                            text-[#FF9800]
                          "
                        >
                          {category}
                        </span>
                      ))}
                  </div>

                  <h2 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h2>

                  {project.description && (
                    <p className="text-sm text-[#2C2C2C]/60 line-clamp-2">
                      {project.description}
                    </p>
                  )}

                  {project.year && (
                    <p className="text-sm text-[#2C2C2C]/50 mt-4">
                      {project.year}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default SearchResults;
