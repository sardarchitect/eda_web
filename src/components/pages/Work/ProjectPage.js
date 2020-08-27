import React from "react";
import { PageBanner } from "../../PageBanner";
import { useParams } from "react-router-dom";
import { projectList } from "./projectData";

export const ProjectPage = () => {
  const {id} = useParams();
  const currentProject = projectList.find(project =>project.id === id);
  console.log(currentProject);
  return (
    <div className="project_page">
      <PageBanner title={currentProject.title} />
      <div className="content-body">
        {
          currentProject.images.map(img => <img src={img.address} alt={img.title} />)
        }
      </div>
    </div>
  );
};
