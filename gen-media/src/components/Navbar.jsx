// import { useState } from "react";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-[#2C2C2C]/90 backdrop-blur-md border-b border-white/10">
//       <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-3 flex items-center justify-between">
//         {/* Logo */}
//         <a href="/" onClick={closeMenu} className="flex items-center">
//           <img
//             src="/logo.png"
//             alt="The Gen Media"
//             className="w-32 sm:w-36 md:w-40 h-auto object-contain"
//           />
//         </a>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden flex flex-col gap-1.5 p-2"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu"
//         >
//           <span className="block w-6 h-0.5 bg-[#F8F6F1]"></span>
//           <span className="block w-6 h-0.5 bg-[#F8F6F1]"></span>
//           <span className="block w-6 h-0.5 bg-[#F8F6F1]"></span>
//         </button>

//         {/* Navigation */}
//         <nav
//           className={`
//             absolute md:static
//             top-full left-0
//             w-full md:w-auto
//             bg-[#2C2C2C] md:bg-transparent
//             border-b border-white/10 md:border-none
//             flex flex-col md:flex-row
//             items-center
//             gap-6 md:gap-10
//             py-6 md:py-0
//             transition-all duration-300
//             ${
//               menuOpen
//                 ? "flex opacity-100"
//                 : "hidden md:flex opacity-0 md:opacity-100"
//             }
//           `}
//         >
//           <a
//             href="/"
//             onClick={closeMenu}
//             className="text-[#F8F6F1] hover:text-[#FF9800] transition duration-300"
//           >
//             Home
//           </a>

//           <a
//             href="/about"
//             onClick={closeMenu}
//             className="text-[#F8F6F1] hover:text-[#FF9800] transition duration-300"
//           >
//             About
//           </a>

//           <a
//             href="/services"
//             onClick={closeMenu}
//             className="text-[#F8F6F1] hover:text-[#FF9800] transition duration-300"
//           >
//             Services
//           </a>

//           <a
//             href="/portfolio"
//             onClick={closeMenu}
//             className="text-[#F8F6F1] hover:text-[#FF9800] transition duration-300"
//           >
//             Portfolio
//           </a>

//           <a
//             href="/academy/courses"
//             onClick={closeMenu}
//             className="text-[#F8F6F1] hover:text-[#FF9800] transition duration-300"
//           >
//             Academy
//           </a>

//           <a
//             href="/teams"
//             onClick={closeMenu}
//             className="text-[#F8F6F1] hover:text-[#FF9800] transition duration-300"
//           >
//             Team Members
//           </a>

//           <a
//             href="/contact"
//             onClick={closeMenu}
//             className="
//               text-[#F8F6F1]
//               hover:text-[#FF9800]
//               transition duration-300
//             "
//           >
//             Contact
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Navbar;

import { Search, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const term = searchTerm.trim();

    if (!term) return;

    navigate(`/search?q=${encodeURIComponent(term)}`);

    setSearchTerm("");
    setSearchOpen(false);
    closeMenu();
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#2C2C2C]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="/"
            onClick={closeMenu}
            className="flex items-center shrink-0"
          >
            <img
              src="/logo.png"
              alt="The Gen Media"
              className="w-32 sm:w-36 md:w-40 h-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a
              href="/"
              className="text-[#F8F6F1] hover:text-[#FF9800] transition duration-300"
            >
              Home
            </a>

            <a
              href="/about"
              className="text-[#F8F6F1] hover:text-[#FF9800] transition duration-300"
            >
              About
            </a>

            <a
              href="/services"
              className="text-[#F8F6F1] hover:text-[#FF9800] transition duration-300"
            >
              Services
            </a>

            <a
              href="/portfolio"
              className="text-[#F8F6F1] hover:text-[#FF9800] transition duration-300"
            >
              Portfolio
            </a>

            <a
              href="/academy/courses"
              className="text-[#F8F6F1] hover:text-[#FF9800] transition duration-300"
            >
              Academy
            </a>

            <a
              href="/teams"
              className="text-[#F8F6F1] hover:text-[#FF9800] transition duration-300"
            >
              Team Members
            </a>

            <a
              href="/contact"
              className="text-[#F8F6F1] hover:text-[#FF9800] transition duration-300"
            >
              Contact
            </a>

            {/* Desktop Search */}
            <form onSubmit={handleSearch} className="flex items-center ml-2">
              <div className="flex items-center bg-[#F8F6F1]/10 border border-white/20 rounded-full px-3 py-1.5 focus-within:border-[#FF9800] transition duration-300">
                <Search size={17} className="text-[#F8F6F1]/70 mr-2" />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search"
                  className="
                    w-24 lg:w-32
                    bg-transparent
                    outline-none
                    text-sm
                    text-[#F8F6F1]
                    placeholder:text-[#F8F6F1]/50
                  "
                />
              </div>
            </form>
          </nav>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Search Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-[#F8F6F1] hover:text-[#FF9800] transition"
              aria-label="Search"
            >
              {searchOpen ? <X size={22} /> : <Search size={22} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className="block w-6 h-0.5 bg-[#F8F6F1]"></span>
              <span className="block w-6 h-0.5 bg-[#F8F6F1]"></span>
              <span className="block w-6 h-0.5 bg-[#F8F6F1]"></span>
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <form onSubmit={handleSearch} className="md:hidden mt-4">
            <div className="flex items-center bg-[#F8F6F1]/10 border border-white/20 rounded-full px-4 py-2 focus-within:border-[#FF9800] transition duration-300">
              <Search size={18} className="text-[#F8F6F1]/70 mr-2" />

              <input
                autoFocus
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search portfolio..."
                className="
                  flex-1
                  bg-transparent
                  outline-none
                  text-[#F8F6F1]
                  placeholder:text-[#F8F6F1]/50
                "
              />

              <button
                type="submit"
                className="
                  ml-2
                  text-sm
                  text-[#FF9800]
                  hover:text-[#F8F6F1]
                  transition
                "
              >
                Search
              </button>
            </div>
          </form>
        )}

        {/* Mobile Navigation */}
        <nav
          className={`
            md:hidden
            ${menuOpen ? "flex" : "hidden"}
            flex-col
            items-center
            gap-6
            py-6
            border-t border-white/10
            mt-4
          `}
        >
          <a
            href="/"
            onClick={closeMenu}
            className="text-[#F8F6F1] hover:text-[#FF9800] transition duration-300"
          >
            Home
          </a>

          <a
            href="/about"
            onClick={closeMenu}
            className="text-[#F8F6F1] hover:text-[#FF9800] transition duration-300"
          >
            About
          </a>

          <a
            href="/services"
            onClick={closeMenu}
            className="text-[#F8F6F1] hover:text-[#FF9800] transition duration-300"
          >
            Services
          </a>

          <a
            href="/portfolio"
            onClick={closeMenu}
            className="text-[#F8F6F1] hover:text-[#FF9800] transition duration-300"
          >
            Portfolio
          </a>

          <a
            href="/academy/courses"
            onClick={closeMenu}
            className="text-[#F8F6F1] hover:text-[#FF9800] transition duration-300"
          >
            Academy
          </a>

          <a
            href="/teams"
            onClick={closeMenu}
            className="text-[#F8F6F1] hover:text-[#FF9800] transition duration-300"
          >
            Team Members
          </a>

          <a
            href="/contact"
            onClick={closeMenu}
            className="text-[#F8F6F1] hover:text-[#FF9800] transition duration-300"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
