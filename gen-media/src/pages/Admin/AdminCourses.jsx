import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminCourses() {
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const emptyForm = {
    title: "",
    description: "",
    topics: "",
    duration: "",
    level: "",
    status: "available",
    price: "",
  };

  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState(emptyForm);

  const [editingId, setEditingId] = useState(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Get admin token
  const getToken = () => {
    return localStorage.getItem("adminToken");
  };

  // Fetch all courses
  const fetchCourses = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API_URL}/api/courses/get-courses`);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch courses");
      }

      setCourses(data);
    } catch (error) {
      console.error("Fetch courses error:", error);
      setError(error.message || "Failed to load courses.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // Handle form input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // Submit create/update
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setSaving(true);

    const token = getToken();

    if (!token) {
      navigate("/admin");
      return;
    }

    try {
      const url = editingId
        ? `${API_URL}/api/courses/${editingId}`
        : `${API_URL}/api/courses/create-course`;

      const method = editingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: form.title,
          description: form.description,
          topics: form.topics,
          duration: form.duration,
          level: form.level,
          status: form.status,
          price: form.price,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to save course");
      }

      if (editingId) {
        setSuccess("Course updated successfully.");
      } else {
        setSuccess("Course created successfully.");
      }

      setForm(emptyForm);
      setEditingId(null);

      await fetchCourses();
    } catch (error) {
      console.error("Save course error:", error);
      setError(error.message || "Failed to save course.");
    } finally {
      setSaving(false);
    }
  };

  // Edit course
  const handleEdit = (course) => {
    setEditingId(course._id);

    setForm({
      title: course.title || "",
      description: course.description || "",
      topics: course.topics || "",
      duration: course.duration || "",
      level: course.level || "",
      status: course.status || "available",
      price: course.price || "",
    });

    setError("");
    setSuccess("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingId(null);
    setForm(emptyForm);
    setError("");
    setSuccess("");
  };

  // Delete course
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this course?",
    );

    if (!confirmed) {
      return;
    }

    const token = getToken();

    if (!token) {
      navigate("/admin");
      return;
    }

    try {
      setError("");
      setSuccess("");

      const response = await fetch(`${API_URL}/api/courses/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete course");
      }

      setSuccess("Course deleted successfully.");

      await fetchCourses();
    } catch (error) {
      console.error("Delete course error:", error);
      setError(error.message || "Failed to delete course.");
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");

    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-[#F8F6F1]">
      {/* Header */}
      <header className="bg-[#2C2C2C] text-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">The Gen Media</h1>

            <p className="text-xs text-gray-400">Course Management</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/admin/dashboard")}
              className="rounded-lg border border-white/20 px-4 py-2 text-sm hover:bg-white/10 transition"
            >
              Dashboard
            </button>

            <button
              onClick={handleLogout}
              className="rounded-lg border border-white/20 px-4 py-2 text-sm hover:bg-white/10 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Page heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#2C2C2C]">
            {editingId ? "Edit Course" : "Create Course"}
          </h2>

          <p className="mt-2 text-gray-500">
            Create and manage courses displayed on The Gen Media website.
          </p>
        </div>

        {/* Messages */}
        {error && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-600">
            {success}
          </div>
        )}

        {/* Course Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-10">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                  Course Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="e.g. Graphic Design"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#FF9800] focus:ring-2 focus:ring-[#FF9800]/20"
                />
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                  Description
                </label>

                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Enter course description"
                  rows="5"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none resize-none focus:border-[#FF9800] focus:ring-2 focus:ring-[#FF9800]/20"
                />
              </div>

              {/* Topics */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                  Topics
                </label>

                <textarea
                  name="topics"
                  value={form.topics}
                  onChange={handleChange}
                  placeholder="e.g. Photoshop, Illustrator, Typography, Branding"
                  rows="3"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none resize-none focus:border-[#FF9800] focus:ring-2 focus:ring-[#FF9800]/20"
                />

                <p className="mt-1 text-xs text-gray-400">
                  Enter the topics separated by commas.
                </p>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                  Duration
                </label>

                <input
                  type="text"
                  name="duration"
                  value={form.duration}
                  onChange={handleChange}
                  placeholder="e.g. 3 Months"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#FF9800] focus:ring-2 focus:ring-[#FF9800]/20"
                />
              </div>

              {/* Level */}
              <div>
                <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                  Level
                </label>

                <select
                  name="level"
                  value={form.level}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none bg-white focus:border-[#FF9800] focus:ring-2 focus:ring-[#FF9800]/20"
                >
                  <option value="">Select level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                  Status
                </label>

                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none bg-white focus:border-[#FF9800] focus:ring-2 focus:ring-[#FF9800]/20"
                >
                  <option value="available">Available</option>

                  <option value="unavailable">Unavailable</option>
                </select>
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                  Price
                </label>

                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="e.g. 15000"
                  min="0"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#FF9800] focus:ring-2 focus:ring-[#FF9800]/20"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-8">
              <button
                type="submit"
                disabled={saving}
                className="rounded-lg bg-[#FF9800] px-6 py-3 font-semibold text-white hover:bg-[#e68900] transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {saving
                  ? "Saving..."
                  : editingId
                    ? "Update Course"
                    : "Create Course"}
              </button>

              {editingId && (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-[#2C2C2C] hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Existing Courses */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-2xl font-bold text-[#2C2C2C]">
                Existing Courses
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                {courses.length} course
                {courses.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>

          {loading ? (
            <div className="bg-white rounded-2xl p-8 text-center text-gray-500">
              Loading courses...
            </div>
          ) : courses.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 text-center text-gray-500">
              No courses found.
            </div>
          ) : (
            <div className="space-y-4">
              {courses.map((course) => (
                <div
                  key={course._id}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-semibold text-[#2C2C2C]">
                          {course.title}
                        </h3>

                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${
                            course.status === "available"
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {course.status || "available"}
                        </span>
                      </div>

                      <p className="text-gray-500 text-sm mt-2">
                        {course.description}
                      </p>

                      <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
                        <span>
                          <strong>Duration:</strong> {course.duration}
                        </span>

                        <span>
                          <strong>Level:</strong> {course.level}
                        </span>

                        <span>
                          <strong>Price:</strong> Rs. {course.price}
                        </span>
                      </div>

                      <p className="text-sm text-gray-500 mt-3">
                        <strong>Topics:</strong>{" "}
                        {Array.isArray(course.topics)
                          ? course.topics.join(", ")
                          : course.topics}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleEdit(course)}
                        className="rounded-lg border border-[#FF9800] px-4 py-2 text-sm font-semibold text-[#FF9800] hover:bg-[#FF9800] hover:text-white transition"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(course._id)}
                        className="rounded-lg border border-red-300 px-4 py-2 text-sm font-semibold text-red-500 hover:bg-red-500 hover:text-white transition"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default AdminCourses;
