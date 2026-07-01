import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import jobs from "../data/jobs";
import JobCard from "../components/JobCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Jobs() {
  const [searchParams] = useSearchParams();

  const initialSearch = searchParams.get("title") || "";
  const initialLocation = searchParams.get("location") || "";

  const [search, setSearch] = useState(initialSearch);
  const [location, setLocation] = useState(initialLocation);
  const [jobType, setJobType] = useState("");

  const filteredJobs = jobs.filter((job) => {
  const matchesTitle =
    search.trim() === "" ||
    job.title.toLowerCase().includes(search.toLowerCase().trim());

  const matchesLocation =
    location.trim() === "" ||
    job.location.toLowerCase() === location.toLowerCase().trim();

  const matchesType =
    jobType === "" || job.type === jobType;

  return matchesTitle && matchesLocation && matchesType;
});

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-8">Browse Jobs</h1>

        {/* Filters */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <input
            type="text"
            placeholder="Search jobs..."
            className="border p-3 rounded-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border p-3 rounded-lg"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">All Locations</option>
            <option>Hyderabad</option>
            <option>Bengaluru</option>
            <option>Chennai</option>
            <option>Pune</option>
            <option>Mumbai</option>
          </select>

          <select
            className="border p-3 rounded-lg"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <option value="">All Types</option>
            <option>Full-Time</option>
            <option>Hybrid</option>
            <option>Remote</option>
          </select>
        </div>

        {/* Jobs Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))
          ) : (
            <p className="text-lg text-gray-500">
              No jobs found.
            </p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Jobs;