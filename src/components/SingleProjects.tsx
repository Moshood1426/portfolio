import React from "react";
import Wrapper from "../assets/wrappers/SingleProjects";

interface SingleProjectProps {
  title: string;
  stack: string[];
  details: string;
  spanTwo?: "1 / 3" | "3 / 5";
}

const SingleProjects: React.FC<SingleProjectProps> = ({
  title,
  stack,
  details,
  spanTwo,
}) => {
  return (
    <Wrapper spanTwo={spanTwo}>
      <h4 className="single-project-title">{title}</h4>
      <p className="single-project-stack">{stack.join(" + ")}</p>
      <p className="single-project-details">{details}</p>
      <div className="single-project-links">
        {spanTwo && <p>View details</p>}
        <p>Live</p>
        <p>Code</p>
      </div>
    </Wrapper>
  );
};

export default SingleProjects;
