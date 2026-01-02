// src/pages/BlogPost.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../Data/blogPosts";

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <p className="p-6 text-center text-gray-700 text-lg">Post not found</p>
    );
  }

  return (
    <div className="p-6 sm:p-10 max-w-3xl mx-auto">
      {/* Category */}
      <span className="text-sm md:text-base text-[#BFA38C] font-semibold">
        {post.category}
      </span>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-8 text-gray-900">
        {post.title}
      </h1>

      {/* Hero Image */}
      <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl mb-10 shadow-lg">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="text-gray-700 text-lg md:text-xl leading-relaxed whitespace-pre-line">
        {post.content}
      </div>

      {/* Back Link */}
      <div className="mt-8">
        <Link
          to="/blog"
          className="text-[#BFA38C] hover:underline font-semibold"
        >
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}
