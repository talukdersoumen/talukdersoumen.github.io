import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";

function Resume() {
  return (
    <div className="resume-body max-w-screen-2xl flex justify-start items-start font-bold pt-8 pl-12 pb-8">
      <Link to="/">
        <div className="g-btn" title="Home">
          Back
        </div>
      </Link>

      <div className="resume-content h-full w-full flex justify-center items-center gap-20">
        <img src="./WorkCV.png" alt="resume" />
        <a
          href="./WorkCV.pdf"
          download
          className="g-btn"
          title="Download Resume"
        >
          Download
        </a>
      </div>
      <SideBar />
    </div>
  );
}

export default Resume;
