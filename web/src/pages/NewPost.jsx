import React from "react";

const NewPost = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Create New Post</h1>
      <form className="space-y-4 max-w-2xl">
        <input
          type="text"
          placeholder="Post Title"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Write your content..."
          rows="6"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Publish
        </button>
      </form>
    </div>
  );
};

export default NewPost;
