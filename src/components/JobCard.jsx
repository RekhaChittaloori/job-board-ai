import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <div     className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <h2 className="text-xl font-bold">{job.title}</h2>

      <p className="text-blue-600 font-semibold mt-2">
        {job.company}
      </p>

      <p className="text-gray-600 mt-1">
        📍 {job.location}
      </p>

      <p className="mt-2 font-medium">
        💰 {job.salary}
      </p>

      <span className="inline-block mt-3 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
        {job.type}
      </span>

      <Link to={`/job/${job.id}`}>
        <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          View Details
        </button>
      </Link>
    </div>
  );
}

export default JobCard;