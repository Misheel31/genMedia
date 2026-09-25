import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

// import Footer from "./components/Footer";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Academy from "./pages/Academy";
import AcademyDetail from "./pages/AcademyDetail";
import AdminCourses from "./pages/Admin/AdminCourses";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminPortfolio from "./pages/Admin/AdminPortfolio";
import AdminRoute from "./pages/Admin/AdminRoute";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import Services from "./pages/Services";
import Team from "./pages/Team";
import SearchResults from "./pages/SearchResults";

function Home() {
  return (
    <>
      <Hero />
      <Academy />
      <Portfolio />
    </>
  );
}

function PublicLayout() {
  return (
    <>
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
        <Route path="/search" element={<SearchResults />} />
      </Routes>

      <Footer />
    </>
  );
}

function AdminLayout() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLogin />} />
      <Route
        path="/admin/dashboard"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/courses"
        element={
          <AdminRoute>
            <AdminCourses />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/portfolio"
        element={
          <AdminRoute>
            <AdminPortfolio />
          </AdminRoute>
        }
      />
    </Routes>
  );
}

function AppContent() {
  const location = useLocation();

  const isAdminPage = location.pathname.startsWith("/admin");

  return isAdminPage ? <AdminLayout /> : <PublicLayout />;
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
