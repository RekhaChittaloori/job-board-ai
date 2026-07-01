import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <Link
          to="/"
          className="text-3xl font-bold text-blue-600"
        >
          JobBoard
        </Link>

        <div className="flex gap-8 font-medium">
          <Link className="hover:text-blue-600" to="/">Home</Link>
          <Link className="hover:text-blue-600" to="/jobs">Jobs</Link>
          <Link className="hover:text-blue-600" to="/post-job">Post Job</Link>
          <Link className="hover:text-blue-600" to="/about">About</Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;