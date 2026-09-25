import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const admin = JSON.parse(localStorage.getItem("admin") || "{}");

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");

    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-[#F8F6F1]">
      {/* Navbar */}
      <header className="bg-[#2C2C2C] text-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">The Gen Media</h1>

            <p className="text-xs text-gray-400">Admin Dashboard</p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-lg border border-white/20 px-4 py-2 text-sm hover:bg-white/10 transition"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-[#2C2C2C]">Welcome, Admin</h2>

          <p className="mt-2 text-gray-500">
            {admin.email || "Office Administrator"}
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-[#2C2C2C]">Portfolio</h3>

            <p className="text-sm text-gray-500 mt-2">
              Manage portfolio projects
            </p>

            <button
              onClick={() => navigate("/admin/portfolio")}
              className="mt-5 text-sm font-semibold text-[#FF9800] cursor-pointer"
            >
              Manage →
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-[#2C2C2C]">Courses</h3>

            <p className="text-sm text-gray-500 mt-2">Manage courses</p>

            <button
              onClick={() => navigate("/admin/courses")}
              className="mt-5 text-sm font-semibold text-[#FF9800] cursor-pointer"
            >
              Manage →
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-[#2C2C2C]">Enrollments</h3>

            <p className="text-sm text-gray-500 mt-2">
              View student enrollments
            </p>

            <button className="mt-5 text-sm font-semibold text-[#FF9800] cursor-pointer">
              View →
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-[#2C2C2C]">Messages</h3>

            <p className="text-sm text-gray-500 mt-2">View contact messages</p>

            <button className="mt-5 text-sm font-semibold text-[#FF9800] cursor-pointer">
              View →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;

