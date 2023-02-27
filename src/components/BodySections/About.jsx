import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div
      className="AboutBody flex justify-center items-center gap-2.5 relative h-screen
       w-full text-white font-bold bg-cover bg-no-repeat"
      id="about"
    >
      <div className="wrapper flex h-4/5 w-5/6">
        <div className="about-body-left h-full w-1/2 flex items-center justify-center"></div>
        <div className="about-body-right h-full w-1/2 flex flex-col gap-10 items-center justify-center">
          <div className="about-body-right-title h-10 flex items-center justify-center text-3xl  text-amber-400">
            About me:{" "}
          </div>
          <div className="about-body-right-content h-auto flex items-center justify-center text-justify">
            Hi there! I'm a 24-year-old front-end developer who loves to explore
            new places, try different foods, and play games in my free time. I
            grew up in Chittagong, Bangladesh, and have always had a passion for
            travel. Someday, I dream of traveling the world on my bike and
            experiencing all the different cultures it has to offer. I have a
            bachelor's degree in Information Technology and graduated in 2021.
            On top of all that, I'm a fan of memes, so we've already got
            something in common!
          </div>
          <Link to="/resume">
            {" "}
            <div className="g-btn">Resume</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
