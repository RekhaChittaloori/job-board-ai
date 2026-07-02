import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            About JobBoard
          </h1>

          <p className="text-lg max-w-3xl mx-auto">
            JobBoard is a modern job portal designed to connect talented
            professionals with top companies. Our mission is to simplify the
            hiring process by providing an easy-to-use platform for both job
            seekers and recruiters.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">

          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-3xl font-bold text-blue-600">10K+</h2>
            <p className="mt-2">Active Jobs</p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-3xl font-bold text-blue-600">2K+</h2>
            <p className="mt-2">Companies</p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-3xl font-bold text-blue-600">50K+</h2>
            <p className="mt-2">Candidates</p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-3xl font-bold text-blue-600">95%</h2>
            <p className="mt-2">Success Rate</p>
          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-8">
              We strive to empower job seekers by providing access to exciting
              career opportunities while helping companies discover the best
              talent efficiently.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Our Vision
            </h2>

            <p className="text-gray-600 leading-8">
              To become the most trusted career platform where professionals and
              organizations grow together through meaningful employment
              opportunities.
            </p>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose JobBoard?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                🔍 Easy Job Search
              </h3>

              <p className="text-gray-600">
                Search jobs quickly using keywords, locations, and job types.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                🏢 Top Companies
              </h3>

              <p className="text-gray-600">
                Explore opportunities from leading companies across multiple
                industries.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                ⚡ Quick Apply
              </h3>

              <p className="text-gray-600">
                Apply to your dream jobs in just a few clicks with a simple and
                intuitive process.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold mb-6">
            Ready to Find Your Dream Job?
          </h2>

          <p className="text-gray-600 mb-8">
            Browse thousands of opportunities from trusted employers and take
            the next step in your career today.
          </p>

          <Link
            to="/jobs"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition"
          >
            Explore Jobs
          </Link>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;