import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BlogList from "../components/BlogList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <BlogList />
    </div>
  );
};

export default Home;
