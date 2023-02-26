import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCode } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      id="projects"
      className="AboutBody grid grid-cols-2 gap-8 pt-8 pb-8 pr-12 pl-12 h-screen w-full
relative bg-cover bg-no-repeat bg-fixed text-black"
    >
      <div className=" bg-black/50 relative rounded flex items-center justify-center font-semibold text-xl text-white hover:bg-black/80 cursor-pointer">
        <div
          className="card"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="card-image absolute p-2 top-0 left-0 w-full h-full object-cover"
            src="./src/assets/Images/Project1.png"
            alt="Card"
          />
          {isHovered && (
            <div className="card-overlay absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center  gap-5 opacity-0">
              <a
                className="card-button p-3 rounded bg-green-500 flex gap-2 items-center hover:bg-green-600"
                href="https://inquisitive-zuccutto-841c56.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faEye} />
                Live Demo
              </a>
              <a
                className="card-button p-3 rounded bg-green-500 flex gap-2 items-center hover:bg-green-600"
                href="https://github.com/talukdersoumen/rick_and_morty-react"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faCode} />
                View Source
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="bg-black/50 rounded flex items-center justify-center font-semibold text-xl text-white hover:bg-black/80 cursor-pointer">
        Coming Soon
      </div>
      <div className="bg-black/50 rounded flex items-center justify-center font-semibold text-xl text-white hover:bg-black/80 cursor-pointer">
        Coming Soon
      </div>
      <div className="bg-black/50 rounded flex items-center justify-center font-semibold text-xl text-white hover:bg-black/80 cursor-pointer">
        Coming Soon
      </div>
    </div>
  );
};

export default Projects;
