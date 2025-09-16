import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600 tracking-wide">
          MittArv Blog
        </Link>

        {/* Links */}
        <div className="space-x-6 text-gray-700 font-medium hidden md:flex">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/newpost" className="hover:text-blue-600 transition">
            New Post
          </Link>
          <Link to="/login" className="hover:text-blue-600 transition">
            Login
          </Link>
          <Link to="/register" className="hover:text-blue-600 transition">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
