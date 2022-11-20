import React from "react";
import { projects } from "../utils/project-actions";
import SingleProjects from "./SingleProjects";

// interface AllProjectInterface {
//   viewAll: boolean;
// }

const AllProjects: React.FC = () => {
  return (
    <>
      {projects.map((item, index) => {
        return <SingleProjects {...item} key={index} />;
      })}
    </>
  );
};

export default AllProjects;
