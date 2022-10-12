import React from "react";
import { projects } from "../utils/project-actions";
import SingleProjects from "./SingleProjects";

interface AllProjectInterface {
  viewAll: boolean;
}

const AllProjects: React.FC<AllProjectInterface> = ({ viewAll }) => {
  return (
    <>
      {projects.map((item, index) => {
        return viewAll ? (
          <SingleProjects {...item} />
        ) : (
          index < 3 && <SingleProjects {...item} />
        );
      })}
    </>
  );
};

export default AllProjects;
