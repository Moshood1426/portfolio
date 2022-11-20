import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Projects";
import AllProjects from "./AllProjects";

const Projects = () => {
  // const [viewAll, setViewAll] = useState(false);
  return (
    <Wrapper>
      <div className="projects-container">
        <div className="projects-intro span-two">
          <span className="projects-intro-subtitle">LATEST PROJECTS</span>
          <h3 className="projects-intro-title">I've Worked On</h3>
          <p className="projects-intro-details">
            On these projects, I've displayed how well versed i am with
            technologies like REACT + TS, CSS, SCSS, REDUX, Templating
            Engines(EJS, Handlebar) for frontend development: NODEJS, EXPRESSJS,
            TYPESCRIPT, MYSQL,POSTGRESQL, MONGODB, ORM(mongoose, sequelize) for
            backend development and AWS, Heroku, Render and Vercel for
            deployment
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
