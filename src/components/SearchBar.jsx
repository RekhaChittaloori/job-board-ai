import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const navigate = useNavigate();

 const handleSearch = () => {
  const params = new URLSearchParams();

  if (jobTitle.trim()) {
    params.set("title", jobTitle.trim());
  }

  if (location.trim()) {
    params.set("location", location.trim());
  }

  navigate(`/jobs?${params.toString()}`);
};

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 -mt-10 relative z-10">
      <div className="grid md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Job title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="border rounded-lg p-3"
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded-lg p-3"
        />

        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;