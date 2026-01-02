// src/pages/Blog.jsx
import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../Data/blogPosts";

export default function Blog() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-quicksand font-bold text-center text-[#BFA38C]">
        Our Blog
      </h1>

      {/* Divider line with spacing */}
      <div className="w-24 h-1 bg-[#BFA38C] mx-auto my-6 rounded"></div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="block bg-[#FFF8F0] border border-[#E6DED5] rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition"
          >
            <div>
              {/* Image with hover zoom */}
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="p-4">
              <span className="inline-block bg-[#FBE8D3] text-[#BFA38C] text-xs px-2 py-1 rounded-full">
                {post.category}
              </span>
              <h2 className="text-xl font-semibold mt-2 font-serif text-gray-900">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm mb-2">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-gray-700">{post.excerpt}</p>
              <p className="mt-3 text-[#BFA38C] font-semibold">Read More →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
