function Services() {
  const serviceGroups = [
    {
      // number: "",
      title: "Creative Production",
      services: [
        {
          number: "01",
          title: "Commercial Ads",
          description:
            "High-quality commercial video production designed to promote brands, products, and services with cinematic storytelling and engaging visuals.",
          image:
            "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
        },
        {
          number: "02",
          title: "Brand Promo Videos",
          description:
            "Creative promotional videos crafted to showcase your business identity, strengthen brand awareness, and attract potential customers.",
          image:
            "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=80",
        },
        {
          number: "03",
          title: "Product Photography",
          description:
            "Professional product photography for social media, e-commerce, advertising, and branding with clean lighting and premium presentation.",
          image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },

    {
      // number: "02",
      title: "Design & Branding",
      services: [
        {
          number: "01",
          title: "Logo Design",
          description:
            "Modern and memorable logo designs that create a strong visual identity and represent your brand professionally.",
          image:
            "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80",
        },
        {
          number: "02",
          title: "Flyer Design",
          description:
            "Professional flyer and promotional material designs created for events, businesses, campaigns, and marketing purposes.",
          image:
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
        },
        {
          number: "03",
          title: "Brand Identity",
          description:
            "Complete visual branding solutions including color systems, typography, visual guidelines, and cohesive brand aesthetics.",
          image:
            "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=1200&q=80",
        },
        {
          number: "04",
          title: "Social Media Design",
          description:
            "Creative and engaging social media graphics tailored to improve audience interaction and strengthen online presence.",
          image:
            "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },

    {
      // number: "03",
      title: "Digital Marketing",
      services: [
        {
          number: "01",
          title: "Social Media Management",
          description:
            "Complete social media management including content posting, audience engagement, brand consistency, and growth strategies.",
          image:
            "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1200&q=80",
        },
        {
          number: "02",
          title: "Facebook / Instagram Ads",
          description:
            "Strategic social media advertising solutions designed to reach targeted audiences, generate leads, and increase conversions.",
          image:
            "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=80",
        },
        {
          number: "03",
          title: "Content Calendar",
          description:
            "Organized monthly content planning to maintain consistent posting schedules and improve content workflow efficiency.",
          image:
            "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#F8F6F1] text-[#2C2C2C] pt-16 sm:pt-20 lg:pt-24 pb-24"
    >
      <div className="max-w-7xl mx-auto py-10 sm:px-10 lg:px-16">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.35em] text-[#FF9800] mb-4">
            WHAT WE DO
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight tracking-tight">
            Our{" "}
            <span className="font-semibold italic text-[#FF9800]">
              Services.
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-base text-[#2C2C2C]/55 max-w-xl mx-auto leading-relaxed">
            Comprehensive media solutions tailored to elevate your brand's
            digital presence.
          </p>
        </div>

        {/* SERVICE GROUPS */}
        <div>
          {serviceGroups.map((group) => (
            <div key={group.number} className="mb-20">
              {/* CATEGORY HEADER */}
              <div className="border-t border-[#2C2C2C]/15 pt-5 mb-6">
                <div className="flex items-end justify-between">
                  <div className="flex items-baseline gap-5">
                    <span className="text-xs font-medium text-[#FF9800]">
                      {group.number}
                    </span>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight">
                      {group.title}
                    </h3>
                  </div>

                  <span className="hidden sm:block text-xs text-[#2C2C2C]/40">
                    {group.services.length}{" "}
                    {group.services.length === 1 ? "Service" : "Services"}
                  </span>
                </div>
              </div>

              {/* SERVICES */}
              <div className="border-t border-[#2C2C2C]/10">
                {group.services.map((service) => (
                  <div
                    key={service.number}
                    className="
                      group
                      grid
                      grid-cols-1
                      md:grid-cols-12
                      gap-5
                      md:gap-8
                      items-center
                      py-6
                      md:py-7
                      px-2
                      border-b
                      border-[#2C2C2C]/10
                      transition-all
                      duration-300
                      hover:bg-[#FFF8ED]
                    "
                  >
                    {/* SERVICE NUMBER */}
                    <div className="md:col-span-1">
                      <span className="text-[10px] font-medium text-[#FF9800]">
                        {service.number}
                      </span>
                    </div>

                    {/* IMAGE */}
                    <div className="md:col-span-3">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="
                            w-full
                            h-full
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-105
                          "
                        />

                        <div
                          className="
                            absolute
                            inset-0
                            bg-[#FF9800]/0
                            group-hover:bg-[#FF9800]/5
                            transition-all
                            duration-300
                          "
                        />
                      </div>
                    </div>

                    {/* TITLE */}
                    <div className="md:col-span-3">
                      <h4
                        className="
                          text-xl
                          lg:text-2xl
                          font-medium
                          leading-tight
                          transition-colors
                          duration-300
                          group-hover:text-[#FF9800]
                        "
                      >
                        {service.title}
                      </h4>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="md:col-span-4">
                      <p
                        className="
                          text-xs
                          sm:text-sm
                          text-[#2C2C2C]/55
                          leading-relaxed
                          max-w-md
                        "
                      >
                        {service.description}
                      </p>
                    </div>

                    {/* ARROW */}
                    <div className="hidden md:flex md:col-span-1 justify-end">
                      <span
                        className="
                          text-lg
                          text-[#2C2C2C]/25
                          transition-all
                          duration-300
                          group-hover:text-[#FF9800]
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                        "
                      >
                        
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-8">
          <a
            href="/contact"
            className="
              inline-flex
              items-center
              gap-3
              px-7
              py-3.5
              rounded-full
              bg-[#2C2C2C]
              text-[#F8F6F1]
              text-xs
              sm:text-sm
              font-medium
              transition-all
              duration-300
              hover:bg-[#FF9800]
              hover:text-[#2C2C2C]
              hover:shadow-lg
              hover:shadow-[#FF9800]/20
            "
          >
            Discuss Your Project
            <span className="text-base"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
