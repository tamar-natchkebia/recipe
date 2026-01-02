import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar({ onSearch }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const q = query.trim();
    onSearch?.(q);
    navigate("/recipes");
  };

  // Clear search input whenever the route changes
  useEffect(() => {
    setQuery("");
  }, [location.pathname]);

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md text-gray-800 shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Left: Logo */}
          <div className="text-2xl font-bold font-quicksand hover:text-red-500 transition-colors duration-300">
            <Link to="/">Gemuani</Link>
          </div>

          {/* Middle: Nav Links */}
          <ul className="flex items-center justify-center gap-6 text-base md:text-lg font-medium">
            {[
              { path: "/", label: "Home" },
              { path: "/recipes", label: "Recipes" },
              { path: "/about", label: "About" },
              { path: "/blog", label: "Blog" },
              { path: "/contact", label: "Contact" },
            ].map(({ path, label }) => (
              <li key={label} className="relative group">
                <Link
                  to={path}
                  className="hover:text-red-500 transition-colors duration-300"
                >
                  {label}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: Search */}
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-auto flex items-center justify-center"
          >
            <div className="relative w-full md:w-64">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search recipes..."
                className="w-full bg-white/80 text-gray-800 placeholder-gray-400 rounded-full border border-gray-300 px-4 py-2 pl-10 outline-none focus:ring-2 focus:ring-red-300 transition"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
                />
              </svg>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}
