function About() {
  return (
    <>
      {/* YOUR ORIGINAL ABOUT SECTION — DON'T CHANGE THIS */}
      <section
        id="about"
        className="relative bg-white text-black pt-10 sm:pt-14 lg:pt-28 pb-24 sm:pb-32 lg:pb-40"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-2">
              <span className="text-sm tracking-[0.3em] text-gray-400"></span>
            </div>

            <div className="lg:col-span-9">
              <p className="text-xs sm:text-sm tracking-[0.3em] text-gray-500 mb-8">
                ABOUT GEN MEDIA
              </p>

              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight">
                We create visuals
                <br />
                <span className="font-semibold italic">that speak.</span>
              </h2>

              <p className="mt-10 max-w-2xl text-base sm:text-lg text-gray-600 leading-relaxed">
                Gen Media is a creative media company focused on turning ideas
                into meaningful visual experiences. From graphic design and
                photography to video production and digital content, we bring
                creativity and technology together.
              </p>

              <a
                href="/contact"
                className="inline-flex items-center mt-10 text-sm font-medium border-b border-black pb-2 hover:text-gray-500 hover:border-gray-500 transition-all duration-300"
              >
                Let's work together
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="relative overflow-hidden bg-white text-black py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-[28px] sm:rounded-[34px] lg:rounded-[40px]">
                <img
                  src="/gen-media-story.png"
                  alt="The story behind Gen Media"
                  className="w-full h-[420px] sm:h-[520px] lg:h-[680px] object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 lg:pr-6 xl:pr-12">
              <h2 className="max-w-3xl text-5xl sm:text-6xl md:text-7xl lg:text-[62px] xl:text-[68px] font-light leading-[1.05] tracking-[-0.03em]">
                The Story Behind Gen
                <br />
                Media
              </h2>

              <p className="mt-10 max-w-3xl text-base sm:text-lg lg:text-[20px] text-gray-600 leading-[1.8] font-light">
                Founded with a single camera and a boundless vision, Gen Media
                started as a small project in Pathari, Nepal. What began as a
                passion for visual storytelling has grown into a full-service
                production house serving brands across Nepal and beyond.
              </p>

              <p className="mt-7 max-w-3xl text-base sm:text-lg lg:text-[20px] text-gray-600 leading-[1.8] font-light">
                Our team of creatives, strategists, and technologists come
                together to produce work that doesn't just look great — it
                performs. Every frame we capture, every story we tell, is guided
                by our belief: great media changes minds.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default About;
