import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Home from "../components/Body/Home";
import About from "../components/Body/About";
import Education from "../components/Body/Education";
import Skills from "../components/Body/Skills";
import Contact from "../components/Body/Contact";
import ScrollToTopButton from "../components/ScrollUpButton";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <SideBar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Contact />
      <ScrollToTopButton />
    </div>
  );
};

export default HomePage;
