import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";
import jobs from "../data/jobs";
import Stats from "../components/Stats";
import Companies from "../components/Companies";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
  <Navbar />

  <Hero />

  <SearchBar />

  <Stats />

  <Companies />

  <section className="max-w-6xl mx-auto py-16 px-6">
    <h2 className="text-3xl font-bold mb-8">
      Featured Jobs
    </h2>

    <div className="grid md:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  </section>

  <Footer />
</>
  );
}

export default Home;