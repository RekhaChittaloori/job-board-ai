import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ApplyModal from "../components/ApplyModal";
import jobs from "../data/jobs";

function JobDetails() {
  const { id } = useParams();

  const job = jobs.find((job) => job.id === Number(id));
  const [showModal, setShowModal] = useState(false);
  const [saved, setSaved] = useState(false);

  if (!job) {
    return (
      <>
        <Navbar />
        <div className="max-w-4xl mx-auto py-20 px-6">
          <h1 className="text-3xl font-bold text-red-500">
            Job Not Found
          </h1>

          <Link
            to="/jobs"
            className="text-blue-600 underline mt-4 inline-block"
          >
            ← Back to Jobs
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="bg-slate-100 min-h-screen py-10">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">

          <Link
            to="/jobs"
            className="text-blue-600 hover:underline"
          >
            ← Back to Jobs
          </Link>

          <div className="mt-6">

            <h1 className="text-4xl font-bold">
              {job.title}
            </h1>

            <p className="text-2xl text-blue-600 mt-2">
              {job.company}
            </p>

            {/* Job Overview */}
            <div className="grid md:grid-cols-2 gap-4 mt-8">

              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-semibold">📍 Location</h3>
                <p>{job.location}</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-semibold">💰 Salary</h3>
                <p>{job.salary}</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-semibold">💼 Employment Type</h3>
                <p>{job.type}</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-semibold">⭐ Experience</h3>
                <p>{job.experience}</p>
              </div>

            </div>

            {/* Extra Information */}
            {(job.posted || job.applyBefore || job.jobId) && (
              <div className="grid md:grid-cols-3 gap-4 mt-6">

                {job.posted && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold">📅 Posted</h3>
                    <p>{job.posted}</p>
                  </div>
                )}

                {job.applyBefore && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold">⏳ Apply Before</h3>
                    <p>{job.applyBefore}</p>
                  </div>
                )}

                {job.jobId && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold">🆔 Job ID</h3>
                    <p>{job.jobId}</p>
                  </div>
                )}

              </div>
            )}

            {/* Skills */}
            <div className="mt-10">

              <h2 className="text-2xl font-bold mb-4">
                Required Skills
              </h2>

              <div className="flex flex-wrap gap-3">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>

            {/* About */}
            <div className="mt-10">

              <h2 className="text-2xl font-bold mb-4">
                About the Role
              </h2>

              <p className="text-gray-700 leading-8">
                {job.description}
              </p>

            </div>

            {/* Responsibilities */}
            {job.responsibilities && (
              <div className="mt-10">

                <h2 className="text-2xl font-bold mb-4">
                  Key Responsibilities
                </h2>

                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {job.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

              </div>
            )}

            {/* Requirements */}
            {job.requirements && (
              <div className="mt-10">

                <h2 className="text-2xl font-bold mb-4">
                  Requirements
                </h2>

                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {job.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

              </div>
            )}

            {/* Benefits */}
            {job.benefits && (
              <div className="mt-10">

                <h2 className="text-2xl font-bold mb-4">
                  Benefits & Perks
                </h2>

                <div className="flex flex-wrap gap-3">
                  {job.benefits.map((benefit, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-700 px-4 py-2 rounded-full"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

              </div>
            )}

            {/* Apply */}
            <div className="mt-10 flex gap-4">

  <button
    onClick={() => setShowModal(true)}
    className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
  >
    Apply Now
  </button>

  <button
    onClick={() => setSaved(!saved)}
    className={`px-8 py-3 rounded-lg transition ${
      saved
        ? "bg-red-500 text-white hover:bg-red-600"
        : "border border-blue-600 text-blue-600 hover:bg-blue-50"
    }`}
  >
    {saved ? "❤️ Saved" : "🤍 Save Job"}
  </button>

</div>

          </div>

        </div>
      </div>

        <ApplyModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        jobTitle={job.title}
      />

      <Footer />
    </>
  );
}

export default JobDetails;