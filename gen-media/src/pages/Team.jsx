function Team() {
  const teamMembers = [
    {
      number: "01",
      name: "Sabin Shrestha",
      role: "Founder",
      image: "/teams/member-1.jpg",
    },
    {
      number: "02",
      name: "Akash",
      role: "Video Editor",
      image: "/teams/member-2.jpg",
    },
    {
      number: "03",
      name: "Anuj",
      role: "Video Editor",
      image: "/teams/member-3.jpg",
    },
    {
      number: "04",
      name: "Megha Majhi",
      role: "Graphic Designer",
      image: "/teams/Megha.jpeg",
    },
    {
      number: "05",
      name: "Aagya Parajuli",
      role: "Motion Designer",
      image: "/teams/member-5.jpg",
    },
    {
      number: "06",
      name: "Ayudh",
      role: "Dubai based Manager",
      image: "/teams/member-6.jpg",
    },
    {
      number: "07",
      name: "Babin",
      role: "Social Media Manager",
      image: "/teams/member-6.jpg",
    },
    {
      number: "08",
      name: "Misheel Rai",
      role: "Developer",
      image: "/teams/Misheel.jpeg",
    },
    {
      number: "09",
      name: "Binod",
      role: "Web Developer",
      image: "/teams/member-8.jpg",
    },
  ];

  return (
    <section
      id="team"
      className="bg-[#F8F6F1] text-[#2C2C2C] py-20 sm:py-24 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* HEADER */}
        <div className="mb-14 lg:mb-16">
          <p className="text-xs tracking-[0.3em] text-[#FF9800] mb-4">
            OUR TEAM
          </p>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight tracking-tight">
              The people
              <br />
              <span className="font-semibold italic text-[#FF9800]">
                behind Gen Media.
              </span>
            </h2>

            <p className="max-w-md text-sm sm:text-base text-[#2C2C2C]/60 leading-relaxed">
              A creative team bringing together design, photography, video,
              technology, and digital media to create meaningful work.
            </p>
          </div>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {teamMembers.map((member) => (
            <div key={member.number} className="group">
              {/* IMAGE */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#EAE7DF]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Orange hover overlay */}
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

                {/* Number */}
                <span
                  className="
                    absolute
                    top-4
                    left-4
                    text-xs
                    font-medium
                    text-white
                    bg-[#2C2C2C]/70
                    px-2
                    py-1
                    rounded-sm
                  "
                >
                  {member.number}
                </span>
              </div>

              {/* DETAILS */}
              <div className="pt-4 border-b border-[#2C2C2C]/15 pb-4">
                <h3
                  className="
                    text-lg
                    sm:text-xl
                    font-medium
                    transition-colors
                    duration-300
                    group-hover:text-[#FF9800]
                  "
                >
                  {member.name}
                </h3>

                <p className="mt-1 text-xs sm:text-sm text-[#2C2C2C]/55">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
