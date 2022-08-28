import React from "react";
import Wrapper from "../assets/wrappers/SingleProjects"

interface SingleProjectProps {
  title: string;
  stack: string[];
  details: string;
}

const SingleProjects: React.FC<SingleProjectProps> = ({
  title,
  stack,
  details,
}) => {
  return (
    <Wrapper>
      <h4 className="single-project-title">{title}</h4>
      <p className="single-project-stack">{stack.join(" + ")}</p>
      <p className="single-project-details">{details}</p>
      <div className="single-project-links">
        <p>View details</p>
        <p>Live</p>
        <p>Code</p>
      </div>
    </Wrapper>
  );
};

export default SingleProjects;
