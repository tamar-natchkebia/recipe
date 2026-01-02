// src/App.jsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import RecipeDetail from "./pages/RecipeDetail";
import BlogPost from "./pages/BlogPost";
import Recipes from "./pages/Recipes"; 

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content">
      <Navbar onSearch={setSearchQuery} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes searchQuery={searchQuery} />} /> {/* ✅ Pass searchQuery */}
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </main>
      <footer className="footer footer-center p-8 bg-base-200 mt-12">
        <aside>
          <p className="font-semibold">
            © {new Date().getFullYear()} Gemuani — Crafted with love
          </p>
        </aside>
      </footer>
    </div>
  );
}
