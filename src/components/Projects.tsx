import React from "react";
import Wrapper from "../assets/wrappers/Projects";
import AllProjects from "./AllProjects";

const Projects = () => {
  // const [viewAll, setViewAll] = useState(false);
  return (
    <Wrapper>
      <div className="projects-container" id="projects">
        <div className="projects-intro span-two">
          <span className="projects-intro-subtitle">LATEST PROJECTS</span>
          <h3 className="projects-intro-title">I've Worked On</h3>
          <p className="projects-intro-details">
            On these projects, I've displayed my flexibility with modern
            technologies and my ability to implement logic. I implemented
            technical functionalities in clean code and ensured adequate
            optimization before deployment
          </p>
        </div>
        <AllProjects />
        {/* <p className="view-more" onClick={() => setViewAll(!viewAll)}>
          {viewAll ? "View Less" : "View More"}
        </p> */}
      </div>
    </Wrapper>
  );
};

export default Projects;
