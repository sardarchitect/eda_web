import React from "react";
import { projectList } from "../../data";
import "./_ProjectPage.scss";
import { Carousel } from "antd";

export const ProjectPage = ({ id, setShowProjectWithId }) => {
  const currentProject = projectList.find((project) => project.id === id);
  console.log(currentProject);

  return (
    <div
      className="project__page__wrapper"
    >
      <div className="project__page">
        <div className="project__page__close" onClick={()=>setShowProjectWithId(null)}>
          <strong>X</strong>
        </div>
        <div className="project__page__gallery">
          <Carousel autoplay>
            {currentProject.images.map((img) => (
              <div className="carousel__image">
                <img key={img.title} alt={img.title} src={img.address} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="project__page__meta">
          <h1>{currentProject.title}</h1>
          <p>{currentProject.year}</p>
          <p>{currentProject.text}</p>
        </div>
      </div>
    </div>
  );
};
