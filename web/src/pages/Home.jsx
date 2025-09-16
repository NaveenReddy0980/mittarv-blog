import React, { useState } from "react";
import PostCard from "../components/PostCard";

const defaultPosts = [
  { id: 1, title: "Welcome to Mittarv Blog", author: "Admin", content: "This is your first post. Start sharing your thoughts!", createdAt: "2025-09-17" },
  { id: 2, title: "How to Use the Blog", author: "Admin", content: "Learn how to create posts, edit them, and view all posts here.", createdAt: "2025-09-17" },
  { id: 3, title: "Tailwind CSS is Awesome", author: "Admin", content: "Style your components easily using Tailwind classes.", createdAt: "2025-09-17" },
  { id: 4, title: "React Tips", author: "Admin", content: "Use hooks to manage state and side effects efficiently.", createdAt: "2025-09-17" },
  { id: 5, title: "Writing Good Posts", author: "Admin", content: "Keep your posts clear, concise, and informative.", createdAt: "2025-09-17" },
  { id: 6, title: "Understanding Redux", author: "Admin", content: "Centralize your state management for better app structure.", createdAt: "2025-09-17" },
  { id: 7, title: "Using React Router", author: "Admin", content: "Navigate between pages without full reloads.", createdAt: "2025-09-17" },
  { id: 8, title: "NeonDB & Prisma", author: "Admin", content: "Set up your PostgreSQL database easily with Prisma ORM.", createdAt: "2025-09-17" },
  { id: 9, title: "SEO Best Practices", author: "Admin", content: "Improve visibility by using meta tags and proper URLs.", createdAt: "2025-09-17" },
  { id: 10, title: "Keep Learning", author: "Admin", content: "Web development is ever-evolving. Stay curious!", createdAt: "2025-09-17" },
];

const Home = () => {
  const [posts] = useState(defaultPosts);
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Latest Blog Posts</h1>

      {/* Search bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md p-3 border rounded shadow focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Posts */}
      {filteredPosts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-8">
          No posts found. Be the first to write one!
        </p>
      )}
    </div>
  );
};

export default Home;
