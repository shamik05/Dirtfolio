import React from "react";
import repos from "../helpers/constants";
import ProjectCard from "./ProjectCard";

// // import "./Projects.scss";

const Projects = () => {
  console.log(repos);

  return (
    <>
      {repos.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          name={project.name}
          description={project.description}
        />
      ))}
    </>

  );
};

export default Projects;
