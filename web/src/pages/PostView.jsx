import React from "react";

const PostView = ({ post }) => {
  if (!post) return <p className="text-center mt-10">Post not found</p>;

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-6">By {post.author}</p>
      <p className="text-gray-700 leading-relaxed">{post.content}</p>
    </div>
  );
};

export default PostView;
