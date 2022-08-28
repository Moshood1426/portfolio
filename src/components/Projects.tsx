import React from "react";
import Wrapper from "../assets/wrappers/Projects";
import AllProjects from "./AllProjects"

const Projects = () => {
  return (
    <Wrapper>
      <div className="projects-container">
        <div className="projects-intro">
          <span className="projects-intro-subtitle">LATEST PROJECTS</span>
          <h2 className="projects-intro-title">I've Worked On</h2>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industriesLorem ipsum is placeholder text commonly
            used in the graphic, print, and publis
          </p>
        </div>
        <AllProjects />
        <p className="view-more">View more</p>
      </div>
    </Wrapper>
  );
};

export default Projects;
