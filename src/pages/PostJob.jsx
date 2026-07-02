import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PostJob() {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    salary: "",
    type: "",
    experience: "",
    skills: "",
    description: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess(true);

    setFormData({
      company: "",
      title: "",
      location: "",
      salary: "",
      type: "",
      experience: "",
      skills: "",
      description: "",
    });

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <>
      <Navbar />

      <div className="bg-slate-100 min-h-screen py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">

          <h1 className="text-4xl font-bold text-center mb-8">
            Post a Job
          </h1>

          {success && (
            <div className="bg-green-100 text-green-700 border border-green-300 p-4 rounded-lg mb-6">
              ✅ Job posted successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />

            <input
              type="text"
              name="title"
              placeholder="Job Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />

            <input
              type="text"
              name="salary"
              placeholder="Salary (e.g. ₹12 LPA)"
              value={formData.salary}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />

            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            >
              <option value="">Select Employment Type</option>
              <option>Full-Time</option>
              <option>Hybrid</option>
              <option>Remote</option>
            </select>

            <input
              type="text"
              name="experience"
              placeholder="Experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />

            <input
              type="text"
              name="skills"
              placeholder="Skills (Comma separated)"
              value={formData.skills}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />

            <textarea
              rows="6"
              name="description"
              placeholder="Job Description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Post Job
            </button>

          </form>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default PostJob;