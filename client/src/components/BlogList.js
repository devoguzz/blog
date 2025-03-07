import React from "react";

const BlogList = () => {
  const blogs = [
    { title: "How to Build a MERN Blog", author: "John Doe", date: "March 7, 2025" },
    { title: "Understanding React Hooks", author: "Jane Smith", date: "March 6, 2025" },
    { title: "The Power of Node.js", author: "Alex Brown", date: "March 5, 2025" }
  ];

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-semibold text-dark mb-6">Latest Posts</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p className="text-gray-600 text-sm mt-2">By {blog.author} - {blog.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
