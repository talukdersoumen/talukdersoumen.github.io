import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const SideBar = () => {
  return (
    <div class="lefttSideBar sideBar">
      <div class="icon-container flex flex-row items-center justify-start cursor-pointer mb-5 relative hover:w-48">
        <a
          href="https://github.com/talukdersoumen?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="icn text-2xl mt-2.5" />
        </a>
        <a
          href="https://github.com/talukdersoumen?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="icon-name left-7 absolute opacity-0 top-1/2 -translate-y-1/2 p-2.5">
            GitHub
          </span>
        </a>
      </div>
      <div class="icon-container flex flex-row items-center justify-start cursor-pointer mb-5 relative hover:w-48">
        <a
          href="https://www.linkedin.com/in/soumensagor/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icn text-2xl mt-2.5" />
        </a>
        <a
          href="https://www.linkedin.com/in/soumensagor/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="icon-name left-7 absolute opacity-0 top-1/2 -translate-y-1/2 p-2.5">
            LinkedIN
          </span>
        </a>
      </div>
      <div class="icon-container flex flex-row items-center justify-start cursor-pointer mb-5 relative hover:w-48">
        <a
          href="http://wa.me/+8801521527428"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="icn text-2xl mt-2.5" />
        </a>
        <a
          href="http://wa.me/+8801521527428"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="icon-name left-7 absolute opacity-0 top-1/2 -translate-y-1/2 p-2.5">
            WhatsAPP
          </span>
        </a>
      </div>
      <div class="icon-container flex flex-row items-center justify-start cursor-pointer mb-5 relative hover:w-48">
        <a
          href="mailto:soumen.sagor@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTelegram} className="icn text-2xl mt-2.5" />
        </a>
        <a
          href="mailto:soumen.sagor@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="icon-name left-7 absolute opacity-0 top-1/2 -translate-y-1/2 p-2.5">
            Mail
          </span>
        </a>
      </div>
    </div>
  );
};

export default SideBar;
