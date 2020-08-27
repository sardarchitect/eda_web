import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "./projectData";

export const ProjectPage = () => {
  const { id } = useParams();
  const currentProject = projectList.find((project) => project.id === id);
  console.log(currentProject);
  return (
    <div className="project_page">
      <div className="content-body">
        <div className="project-description">
          <h1> {currentProject.title}</h1>
          <h2> {currentProject.year}</h2>
          <p> {currentProject.text}</p>
        </div>
        <div className="project-images">
          {currentProject.images.map((img) => (
            <img src={img.address} alt={img.title} />
          ))}
        </div>
      </div>
    </div>
  );
};
