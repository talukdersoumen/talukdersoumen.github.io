import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Home from "../components/Body/Home";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <SideBar />
      <Home />
    </div>
  );
};

export default HomePage;
