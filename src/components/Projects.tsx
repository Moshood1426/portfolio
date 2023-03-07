import React from "react";
import Wrapper from "../assets/wrappers/Projects";
import AllProjects from "./AllProjects";

const Projects = () => {
  // const [viewAll, setViewAll] = useState(false);
  return (
    <Wrapper>
      <div className="project-header">
        <span className="projects-intro-subtitle">LATEST PROJECTS</span>
        <h3 className="projects-intro-title">I've Worked On</h3>
      </div>
      <div className="projects-container" id="projects">
        <AllProjects />
        {/* <p className="view-more" onClick={() => setViewAll(!viewAll)}>
          {viewAll ? "View Less" : "View More"}
        </p> */}
      </div>
    </Wrapper>
  );
};

export default Projects;
