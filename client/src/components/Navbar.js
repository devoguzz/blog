import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-2xl font-bold text-dark">
          MERN Blog
        </Link>
        <div className="space-x-4">
          <Link to="/login" className="text-gray-700 hover:text-primary">Login</Link>
          <Link to="/register" className="bg-primary text-white px-4 py-2 rounded hover:bg-green-700">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
