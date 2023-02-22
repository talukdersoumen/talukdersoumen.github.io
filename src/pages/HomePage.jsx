import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Home from "../components/Body/Home";
import About from "../components/Body/About";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <SideBar />
      <Home />
      <About />
    </div>
  );
};

export default HomePage;
