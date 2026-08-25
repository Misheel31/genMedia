import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Footer from "./components/Footer";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Academy from "./pages/Academy";
import AcademyDetail from "./pages/AcademyDetail";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import Services from "./pages/Services";
import Team from "./pages/Team";
function Home() {
  return (
    <>
      <Hero />
      <Academy />
      <Portfolio />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />
        {/* SEPARATE PAGES */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/teams" element={<Team />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/academy/courses" element={<AcademyDetail />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
