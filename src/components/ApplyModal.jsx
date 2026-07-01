import { useState } from "react";

function ApplyModal({ isOpen, onClose, jobTitle }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null,
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Application submitted successfully for ${jobTitle}! 🎉`);

    setFormData({
      name: "",
      email: "",
      phone: "",
      coverLetter: "",
      resume: null,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white rounded-xl w-full max-w-xl p-8 relative">

        <button
          onClick={onClose}
          className="absolute right-5 top-4 text-2xl"
        >
          ×
        </button>

        <h2 className="text-3xl font-bold mb-6">
          Apply for {jobTitle}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="file"
            name="resume"
            required
            onChange={handleChange}
            className="w-full"
          />

          <textarea
            name="coverLetter"
            rows="5"
            placeholder="Cover Letter"
            value={formData.coverLetter}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Submit Application
          </button>

        </form>

      </div>

    </div>
  );
}

export default ApplyModal;