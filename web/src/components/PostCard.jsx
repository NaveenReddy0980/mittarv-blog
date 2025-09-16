import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        {post.title}
      </h2>
      <p className="text-gray-600 mb-4">
        {post.content.slice(0, 150)}...
      </p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">By {post.author}</span>
        <Link
          to={`/post/${post.id}`}
          className="text-blue-600 hover:underline font-medium"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
