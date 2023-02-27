import React from "react";

const Home = () => {
  return (
    <div
      className="HomeBody flex flex-col justify-start items-center gap-4 relative h-screen w-full text-white bg-black p-12 font-bold bg-cover bg-no-repeat"
      id="home"
    >
      {" "}
      <div className="body-image-container h-64 w-64 flex items-center justify-center">
        <div className="img-border h-full w-full flex items-center justify-center">
          <div className="avatar flex items-center justify-center h-44 w-44 opacity-100 z-444 overflow-hidden bg-cover bg-center rounded-full"></div>
        </div>
      </div>
      <span className=" text-base relative mt-9">Hey there!</span>
      <span className=" text-4xl font-extrabold relative  text-amber-400">
        I am Soumen TALUKDER
      </span>
      <span className=" text-2xl relative">I write codes for living</span>
    </div>
  );
};

export default Home;
