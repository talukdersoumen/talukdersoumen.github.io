import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navBar sticky top-0 left-0 right-0 max-w-screen-2xl flex justify-between px-9 py-4">
      <div className=" text-3xl flex gap-2 text-black-400">
        <FontAwesomeIcon icon={faUserSecret} className="icn" />
        <span className="font-bold">{"<Soumen/>"} </span>
      </div>

      <div className="w-auto">
        <div className="flex gap-6 text-lg font-semibold">
          <div className="btn cursor-pointer home">Home</div>
          <div className="btn cursor-pointer about">About</div>
          <div className="btn cursor-pointer education">Education</div>
          <div className="btn cursor-pointer projects">Projects</div>
          <div className="btn cursor-pointer skills">Skills</div>
          <div className="btn cursor-pointer contact">Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
