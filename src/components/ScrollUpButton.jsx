import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton = () => {
  const handleScroll = () => {
    const upButton = document.querySelector(".ArrowUp");

    // Hide the button initially
    upButton.style.display = "none";

    // Listen for scroll events
    if (window.pageYOffset > 0) {
      // Show the button
      upButton.style.display = "flex";
    } else {
      // Hide the button
      upButton.style.display = "none";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className="ArrowUp btn fixed bottom-6 right-6 bg-gray-500 p-3.5 rounded-full"
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

export default ScrollToTopButton;
