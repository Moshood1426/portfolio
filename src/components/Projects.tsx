import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Projects";
import AllProjects from "./AllProjects";

const Projects = () => {
  const [viewAll, setViewAll] = useState(false);
  return (
    <Wrapper>
      <div className="projects-container">
        <div className="projects-intro span-two">
          <span className="projects-intro-subtitle">LATEST PROJECTS</span>
          <h3 className="projects-intro-title">I've Worked On</h3>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industriesLorem ipsum is placeholder text commonly
            used in the graphic, print, and publis
          </p>
        </div>
        <AllProjects viewAll={viewAll} />
        <p className="view-more" onClick={() => setViewAll(!viewAll)}>
          {viewAll ? "View Less" : "View More"}
        </p>
      </div>
    </Wrapper>
  );
};

export default Projects;
