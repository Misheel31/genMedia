function FeaturedWork() {
  const projects = [
    {
      category: "GRAPHIC DESIGN",
      title: "Brand Identity",
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1000&q=80",
    },
    {
      category: "PHOTOGRAPHY",
      title: "Portrait Campaign",
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=80",
    },
    {
      category: "VIDEO PRODUCTION",
      title: "Commercial Film",
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <section
      id="portfolio"
      className="bg-[#F8F6F1] text-[#2C2C2C] py-08 sm:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Section Number */}
          <div className="lg:col-span-2">
            <span className="text-sm tracking-[0.3em] text-[#2C2C2C]/40"></span>
          </div>

          {/* Heading */}
          <div className="lg:col-span-10">
            <p className="text-xs sm:text-sm tracking-[0.3em] text-[#2C2C2C]/50 mb-4">
              FEATURED WORK
            </p>

            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.9] tracking-tight">
              Selected
              <br />
              <span className="font-semibold italic text-[#FF9800]">
                Projects.
              </span>
            </h2>
          </div>
        </div>

        {/* Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {projects.map((project) => (
            <a
              key={project.title}
              href="#"
              className="group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-4/5 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-xs tracking-[0.25em] text-[#FF9800] mb-2">
                  {project.category}
                </p>

                <div className="flex items-center justify-between">
                  <h3 className="text-xl sm:text-2xl font-medium">
                    {project.title}
                  </h3>

                  <span className="text-xl text-[#2C2C2C]/40 group-hover:text-[#FF9800] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"></span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-8">
          <a
            href="#"
            className="
              inline-flex items-center gap-3
              px-7 py-3
              rounded-full
              bg-[#2C2C2C]
              text-[#F8F6F1]
              text-sm font-medium
              transition-all duration-300
              hover:bg-[#FF9800]
              hover:text-[#2C2C2C]
            "
          >
            View Portfolio
            <span></span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;
