import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const emptyForm = {
  title: "",
  category: [],
  subcategory: [],
  description: "",
  image: "",
  pdf: "",
  video: "",
  videoThumbnail: "",
  client: "",
  year: "",
  services: [],
  featured: false,
};

const categoryOptions = [
  "Branding",
  "Graphic Design",
  "Photography",
  "Video Editing",
  "Motion Graphics",
  "Digital Content",
];

function AdminPortfolio() {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState(emptyForm);

  const [editingId, setEditingId] = useState(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const token = localStorage.getItem("adminToken");

  // =====================================================
  // FETCH PORTFOLIO PROJECTS
  // =====================================================

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API_URL}/api/portfolios`);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch portfolio projects");
      }

      setProjects(data);
    } catch (error) {
      console.error("Fetch portfolio error:", error);
      setError(error.message || "Failed to load portfolio projects.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // =====================================================
  // INPUT HANDLERS
  // =====================================================

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  // =====================================================
  // ARRAY FIELD HANDLERS
  // =====================================================

  const toggleArrayValue = (field, value) => {
    setForm((prev) => {
      const currentValues = prev[field];

      if (currentValues.includes(value)) {
        return {
          ...prev,
          [field]: currentValues.filter((item) => item !== value),
        };
      }

      return {
        ...prev,
        [field]: [...currentValues, value],
      };
    });
  };

  const handleArrayTextChange = (field, value) => {
    const values = value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    setForm((prev) => ({
      ...prev,
      [field]: values,
    }));
  };

  // =====================================================
  // RESET FORM
  // =====================================================

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
    setError("");
    setSuccess("");
  };

  // =====================================================
  // CREATE / UPDATE
  // =====================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!token) {
      navigate("/admin");
      return;
    }

    if (!form.title.trim()) {
      setError("Portfolio title is required.");
      return;
    }

    if (form.category.length === 0) {
      setError("Please select at least one category.");
      return;
    }

    if (!form.description.trim()) {
      setError("Portfolio description is required.");
      return;
    }

    try {
      setSaving(true);

      const payload = {
        title: form.title.trim(),
        category: form.category,
        subcategory: form.subcategory,
        description: form.description.trim(),
        image: form.image.trim(),
        pdf: form.pdf.trim(),
        video: form.video.trim(),
        videoThumbnail: form.videoThumbnail.trim(),
        client: form.client.trim(),
        year: form.year ? Number(form.year) : undefined,
        services: form.services,
        featured: form.featured,
      };

      const url = editingId
        ? `${API_URL}/api/portfolios/${editingId}`
        : `${API_URL}/api/portfolios/create-portfolio`;

      const method = editingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            `Failed to ${editingId ? "update" : "create"} portfolio`,
        );
      }

      setSuccess(
        editingId
          ? "Portfolio project updated successfully."
          : "Portfolio project created successfully.",
      );

      resetForm();

      await fetchProjects();
    } catch (error) {
      console.error("Save portfolio error:", error);
      setError(error.message || "Something went wrong.");
    } finally {
      setSaving(false);
    }
  };

  // =====================================================
  // EDIT
  // =====================================================

  const handleEdit = (project) => {
    setEditingId(project._id);

    setForm({
      title: project.title || "",
      category: Array.isArray(project.category)
        ? project.category
        : project.category
          ? [project.category]
          : [],
      subcategory: Array.isArray(project.subcategory)
        ? project.subcategory
        : project.subcategory
          ? [project.subcategory]
          : [],
      description: project.description || "",
      image: project.image || "",
      pdf: project.pdf || "",
      video: project.video || "",
      videoThumbnail: project.videoThumbnail || "",
      client: project.client || "",
      year: project.year || "",
      services: Array.isArray(project.services)
        ? project.services
        : project.services
          ? [project.services]
          : [],
      featured: Boolean(project.featured),
    });

    setError("");
    setSuccess("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =====================================================
  // DELETE
  // =====================================================

  const handleDelete = async (id) => {
    if (!token) {
      navigate("/admin");
      return;
    }

    const confirmed = window.confirm(
      "Are you sure you want to delete this portfolio project?",
    );

    if (!confirmed) {
      return;
    }

    try {
      setError("");
      setSuccess("");

      const response = await fetch(`${API_URL}/api/portfolios/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete portfolio project");
      }

      setSuccess("Portfolio project deleted successfully.");

      if (editingId === id) {
        resetForm();
      }

      await fetchProjects();
    } catch (error) {
      console.error("Delete portfolio error:", error);
      setError(error.message || "Failed to delete portfolio project.");
    }
  };

  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");

    navigate("/admin");
  };

  // =====================================================
  // UI
  // =====================================================

  return (
    <div className="min-h-screen bg-[#F8F6F1] text-[#2C2C2C]">
      {/* HEADER */}

      <header className="border-b border-[#2C2C2C]/10 bg-[#F8F6F1]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF9800]">
              The Gen Media
            </p>

            <h1 className="mt-1 text-2xl font-bold">Portfolio Management</h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/admin/dashboard")}
              className="rounded-lg border border-[#2C2C2C]/15 px-4 py-2 text-sm font-semibold transition hover:bg-[#2C2C2C] hover:text-white"
            >
              Dashboard
            </button>

            <button
              onClick={handleLogout}
              className="rounded-lg bg-[#2C2C2C] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#FF9800]"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        {/* MESSAGES */}

        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-sm text-green-700">
            {success}
          </div>
        )}

        {/* FORM */}

        <section className="rounded-2xl border border-[#2C2C2C]/10 bg-white p-6 shadow-sm lg:p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF9800]">
                {editingId ? "Edit Project" : "New Project"}
              </p>

              <h2 className="mt-1 text-2xl font-bold">
                {editingId
                  ? "Edit Portfolio Project"
                  : "Create Portfolio Project"}
              </h2>
            </div>

            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="rounded-lg border border-[#2C2C2C]/15 px-4 py-2 text-sm font-semibold hover:bg-[#F8F6F1]"
              >
                Cancel Edit
              </button>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-7">
            {/* TITLE */}

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Project Title *
              </label>

              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleInputChange}
                placeholder="e.g. Manang Valley Brand Identity"
                className="w-full rounded-xl border border-[#2C2C2C]/15 px-4 py-3 outline-none transition focus:border-[#FF9800]"
              />
            </div>

            {/* CATEGORY */}

            <div>
              <label className="mb-3 block text-sm font-semibold">
                Category *
              </label>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {categoryOptions.map((category) => (
                  <label
                    key={category}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${
                      form.category.includes(category)
                        ? "border-[#FF9800] bg-[#FF9800]/10"
                        : "border-[#2C2C2C]/10 hover:border-[#FF9800]/50"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={form.category.includes(category)}
                      onChange={() => toggleArrayValue("category", category)}
                      className="h-4 w-4 accent-[#FF9800]"
                    />

                    <span className="text-sm font-medium">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* SUBCATEGORY */}

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Subcategory
              </label>

              <input
                type="text"
                value={form.subcategory.join(", ")}
                onChange={(e) =>
                  handleArrayTextChange("subcategory", e.target.value)
                }
                placeholder="e.g. Brand Identity, Catalogue Design"
                className="w-full rounded-xl border border-[#2C2C2C]/15 px-4 py-3 outline-none focus:border-[#FF9800]"
              />

              <p className="mt-2 text-xs text-gray-500">
                Separate multiple subcategories with commas.
              </p>
            </div>

            {/* DESCRIPTION */}

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Description *
              </label>

              <textarea
                name="description"
                value={form.description}
                onChange={handleInputChange}
                rows={5}
                placeholder="Describe the project..."
                className="w-full resize-y rounded-xl border border-[#2C2C2C]/15 px-4 py-3 outline-none focus:border-[#FF9800]"
              />
            </div>

            {/* MEDIA */}

            <div>
              <div className="mb-4">
                <h3 className="text-lg font-bold">Media</h3>

                <p className="mt-1 text-xs text-gray-500">
                  Enter the public URL or path for each media file.
                </p>
              </div>

              <div className="grid gap-5 lg:grid-cols-2">
                {/* IMAGE */}

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Image URL / Path
                  </label>

                  <input
                    type="text"
                    name="image"
                    value={form.image}
                    onChange={handleInputChange}
                    placeholder="/portfolio/branding/project.png"
                    className="w-full rounded-xl border border-[#2C2C2C]/15 px-4 py-3 outline-none focus:border-[#FF9800]"
                  />
                </div>

                {/* PDF */}

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    PDF URL / Path
                  </label>

                  <input
                    type="text"
                    name="pdf"
                    value={form.pdf}
                    onChange={handleInputChange}
                    placeholder="/portfolio/branding/catalogue.pdf"
                    className="w-full rounded-xl border border-[#2C2C2C]/15 px-4 py-3 outline-none focus:border-[#FF9800]"
                  />
                </div>

                {/* VIDEO */}

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Video URL / Path
                  </label>

                  <input
                    type="text"
                    name="video"
                    value={form.video}
                    onChange={handleInputChange}
                    placeholder="/portfolio/video-editing/project.mp4"
                    className="w-full rounded-xl border border-[#2C2C2C]/15 px-4 py-3 outline-none focus:border-[#FF9800]"
                  />
                </div>

                {/* VIDEO THUMBNAIL */}

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Video Thumbnail URL / Path
                  </label>

                  <input
                    type="text"
                    name="videoThumbnail"
                    value={form.videoThumbnail}
                    onChange={handleInputChange}
                    placeholder="/portfolio/video-editing/thumbnail.png"
                    className="w-full rounded-xl border border-[#2C2C2C]/15 px-4 py-3 outline-none focus:border-[#FF9800]"
                  />
                </div>
              </div>
            </div>

            {/* CLIENT / YEAR */}

            <div className="grid gap-5 lg:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Client
                </label>

                <input
                  type="text"
                  name="client"
                  value={form.client}
                  onChange={handleInputChange}
                  placeholder="Client name"
                  className="w-full rounded-xl border border-[#2C2C2C]/15 px-4 py-3 outline-none focus:border-[#FF9800]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">Year</label>

                <input
                  type="number"
                  name="year"
                  value={form.year}
                  onChange={handleInputChange}
                  placeholder="2026"
                  min="1900"
                  max="2100"
                  className="w-full rounded-xl border border-[#2C2C2C]/15 px-4 py-3 outline-none focus:border-[#FF9800]"
                />
              </div>
            </div>

            {/* SERVICES */}

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Services
              </label>

              <input
                type="text"
                value={form.services.join(", ")}
                onChange={(e) =>
                  handleArrayTextChange("services", e.target.value)
                }
                placeholder="Brand Strategy, Graphic Design, Photography"
                className="w-full rounded-xl border border-[#2C2C2C]/15 px-4 py-3 outline-none focus:border-[#FF9800]"
              />

              <p className="mt-2 text-xs text-gray-500">
                Separate multiple services with commas.
              </p>
            </div>

            {/* FEATURED */}

            <label className="flex cursor-pointer items-center gap-4 rounded-xl border border-[#2C2C2C]/10 bg-[#F8F6F1] p-4">
              <input
                type="checkbox"
                name="featured"
                checked={form.featured}
                onChange={handleCheckboxChange}
                className="h-5 w-5 accent-[#FF9800]"
              />

              <div>
                <p className="text-sm font-bold">Featured Project</p>

                <p className="mt-1 text-xs text-gray-500">
                  Featured projects can appear in the website's featured
                  portfolio section.
                </p>
              </div>
            </label>

            {/* SUBMIT */}

            <div className="flex flex-wrap gap-3 border-t border-[#2C2C2C]/10 pt-6">
              <button
                type="submit"
                disabled={saving}
                className="rounded-xl bg-[#FF9800] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#e88900] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving
                  ? "Saving..."
                  : editingId
                    ? "Update Project"
                    : "Create Project"}
              </button>

              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-xl border border-[#2C2C2C]/15 px-6 py-3 text-sm font-bold transition hover:bg-[#F8F6F1]"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </section>

        {/* EXISTING PROJECTS */}

        <section className="mt-10">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF9800]">
                Existing Work
              </p>

              <h2 className="mt-1 text-2xl font-bold">Portfolio Projects</h2>
            </div>

            <p className="text-sm text-gray-500">
              {projects.length} project
              {projects.length === 1 ? "" : "s"}
            </p>
          </div>

          {loading ? (
            <div className="rounded-2xl border border-[#2C2C2C]/10 bg-white p-10 text-center">
              <p className="text-sm text-gray-500">
                Loading portfolio projects...
              </p>
            </div>
          ) : projects.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-[#2C2C2C]/20 bg-white p-10 text-center">
              <p className="font-semibold">No portfolio projects found.</p>

              <p className="mt-2 text-sm text-gray-500">
                Create your first portfolio project using the form above.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <div
                  key={project._id}
                  className="overflow-hidden rounded-2xl border border-[#2C2C2C]/10 bg-white shadow-sm"
                >
                  {/* PROJECT IMAGE */}

                  {project.image ? (
                    <div className="aspect-video overflow-hidden bg-[#2C2C2C]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                  ) : project.video ? (
                    <div className="aspect-video overflow-hidden bg-black">
                      <video
                        src={project.video}
                        controls
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-video items-center justify-center bg-[#2C2C2C] text-sm text-white/60">
                      No media
                    </div>
                  )}

                  {/* CONTENT */}

                  <div className="p-5">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <h3 className="font-bold leading-tight">
                        {project.title}
                      </h3>

                      {project.featured && (
                        <span className="shrink-0 rounded-full bg-[#FF9800]/15 px-3 py-1 text-xs font-bold text-[#FF9800]">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* CATEGORIES */}

                    <div className="mb-3 flex flex-wrap gap-2">
                      {(Array.isArray(project.category)
                        ? project.category
                        : [project.category]
                      ).map((category) => (
                        <span
                          key={category}
                          className="rounded-full bg-[#2C2C2C]/5 px-3 py-1 text-xs font-medium"
                        >
                          {category}
                        </span>
                      ))}
                    </div>

                    {/* DESCRIPTION */}

                    <p className="line-clamp-3 text-sm leading-6 text-gray-600">
                      {project.description}
                    </p>

                    {/* DETAILS */}

                    <div className="mt-4 space-y-1 text-xs text-gray-500">
                      {project.client && (
                        <p>
                          <span className="font-semibold text-[#2C2C2C]">
                            Client:
                          </span>{" "}
                          {project.client}
                        </p>
                      )}

                      {project.year && (
                        <p>
                          <span className="font-semibold text-[#2C2C2C]">
                            Year:
                          </span>{" "}
                          {project.year}
                        </p>
                      )}

                      {project.subcategory?.length > 0 && (
                        <p>
                          <span className="font-semibold text-[#2C2C2C]">
                            Subcategory:
                          </span>{" "}
                          {Array.isArray(project.subcategory)
                            ? project.subcategory.join(", ")
                            : project.subcategory}
                        </p>
                      )}
                    </div>

                    {/* MEDIA INDICATORS */}

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.image && (
                        <span className="rounded-md bg-gray-100 px-2 py-1 text-[11px]">
                          Image
                        </span>
                      )}

                      {project.pdf && (
                        <span className="rounded-md bg-gray-100 px-2 py-1 text-[11px]">
                          PDF
                        </span>
                      )}

                      {project.video && (
                        <span className="rounded-md bg-gray-100 px-2 py-1 text-[11px]">
                          Video
                        </span>
                      )}
                    </div>

                    {/* ACTIONS */}

                    <div className="mt-5 flex gap-3 border-t border-[#2C2C2C]/10 pt-4">
                      <button
                        onClick={() => handleEdit(project)}
                        className="flex-1 rounded-lg bg-[#2C2C2C] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#FF9800]"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(project._id)}
                        className="flex-1 rounded-lg border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
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

export default AdminPortfolio;
