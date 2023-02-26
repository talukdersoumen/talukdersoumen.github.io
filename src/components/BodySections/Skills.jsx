import React from "react";

const Skills = () => {
  return (
    <div
      className="AboutBody flex flex-col justify-center items-center h-screen w-full
relative bg-cover bg-no-repeat bg-fixed text-white"
      id="skills"
    >
      <div className="skills-body-title text-3xl font-extrabold absolute right-10 top-6 font-mono">
        ..// skills
      </div>

      <div className="flex w-9/12 gap-16 justify-center items-center">
        <div className="skill-sec1 flex flex-col text-left gap-5">
          <span className="text-3xl font-semibold">Web Technologies</span>

          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript-ES6</li>
            <li>React</li>
            <li>Vue</li>
            <li>TailWindCSS</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="skill-sec2 flex flex-col text-center gap-5">
          <span className="text-3xl font-semibold">Tools</span>
          <ul>
            <li>Git, Github</li>
            <li>Vite.js</li>
            <li>Bash</li>
            <li>Postman</li>
            <li>AdobeXD, Figma</li>
            <li>Chrome/Firefox Dev Tools</li>
            <li>Visual Studio Code</li>
          </ul>
        </div>
        <div className="skill-sec3 flex flex-col text-right gap-5">
          <span className="text-3xl font-semibold">Others</span>
          <ul>
            <li>React Router</li>
            <li>RestAPI/RestFulAPI</li>
            <li>English (IELTS-7.0)</li>
            <li>Google/Microsoft Workspace</li>
            <li>Critical Thinking</li>
            <li>Multi-tasking</li>
            <li>Adaptability</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
