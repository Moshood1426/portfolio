import React from "react";
import Wrapper from "../assets/wrappers/SingleProjects";

interface SingleProjectProps {
  title: string;
  stack: string[];
  details: string;
  gitPage: string;
  livePage: string;
  spanTwo?: "1 / 3" | "3 / 5";
}

const SingleProjects: React.FC<SingleProjectProps> = ({
  title,
  stack,
  details,
  gitPage,
  livePage,
  spanTwo,
}) => {
  return (
    <Wrapper>
      <h4 className="single-project-title">{title}</h4>
      <p className="single-project-stack">{stack.join(" + ")}</p>
      <p className="single-project-details">{details}</p>
      <div className="single-project-links">
        <a href={livePage} target="_blank" rel="noreferrer">
          Live
        </a>
        <a href={gitPage} target="_blank" rel="noreferrer">
          Code
        </a>
      </div>
    </Wrapper>
  );
};

export default SingleProjects;
