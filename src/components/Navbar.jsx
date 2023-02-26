import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navBar sticky top-0 max-w-screen-2xl flex justify-between px-9 py-4 z-999">
      <div className=" text-3xl flex gap-2 text-black-400">
        <FontAwesomeIcon icon={faUserSecret} className="icn" />
        <span className="font-bold">{"<Soumen/>"} </span>
      </div>

      <div className="w-auto">
        <div className="flex gap-6 text-lg font-semibold">
          <div className="btn cursor-pointer home">
            {" "}
            <a href="#home" rel="noopener noreferrer">
              Home
            </a>
          </div>
          <div className="btn cursor-pointer about">
            <a href="#about" rel="noopener noreferrer">
              About
            </a>
          </div>
          <div className="btn cursor-pointer education">
            {" "}
            <a href="#education" rel="noopener noreferrer">
              Education
            </a>
          </div>
          <div className="btn cursor-pointer skills">
            {" "}
            <a href="#skills" rel="noopener noreferrer">
              Skills
            </a>
          </div>
          <div className="btn cursor-pointer projects">
            {" "}
            <a href="#projects" rel="noopener noreferrer">
              Projects
            </a>
          </div>
          <div className="btn cursor-pointer contact">
            {" "}
            <a href="#contact" rel="noopener noreferrer">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
