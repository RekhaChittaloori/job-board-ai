import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
       <h1 className="text-6xl font-bold leading-tight">
  Find Your
  <span className="text-yellow-300"> Dream Job</span>
</h1>

<p className="mt-6 text-xl max-w-2xl mx-auto">
  Search thousands of verified jobs from top companies and take
  the next step in your career.
</p>
<Link to="/jobs">

<div className="mt-10">
  <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100">
    Explore Jobs
  </button>
</div>
</Link>
      </div>
    </section>
  );
}

export default Hero;