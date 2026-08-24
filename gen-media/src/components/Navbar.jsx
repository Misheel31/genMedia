import { useState } from "react";
import logo from "../assets/Horizontal_Logo_BFFree.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#2C2C2C]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" onClick={closeMenu} className="flex items-center">
          <img
            src={logo}
            alt="The Gen Media"
            className="w-32 sm:w-36 md:w-40 h-auto object-contain"
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-[#F8F6F1]"></span>
          <span className="block w-6 h-0.5 bg-[#F8F6F1]"></span>
          <span className="block w-6 h-0.5 bg-[#F8F6F1]"></span>
        </button>

        {/* Navigation */}
        <nav
          className={`
            absolute md:static
            top-full left-0
            w-full md:w-auto
            bg-[#2C2C2C] md:bg-transparent
            border-b border-white/10 md:border-none
            flex flex-col md:flex-row
            items-center
            gap-6 md:gap-10
            py-6 md:py-0
            transition-all duration-300
            ${
              menuOpen
                ? "flex opacity-100"
                : "hidden md:flex opacity-0 md:opacity-100"
            }
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
            className="
              text-[#F8F6F1]
              hover:text-[#FF9800]
              transition duration-300
            "
          >
            Contact 
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
