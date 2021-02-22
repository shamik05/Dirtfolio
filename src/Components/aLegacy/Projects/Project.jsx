import React from "react";
import repos from "../../helpers/projects";
import ProjectCard from "./ProjectCard";

const Project = () => (
  <>
    {repos.map(({
      id, name, description, repo, depo,
    }) => (
      <ProjectCard
        key={id}
        id={id}
        name={name}
        description={description}
        repo={repo}
        depo={depo}
      />
    ))}
  </>

);
export default Project;
