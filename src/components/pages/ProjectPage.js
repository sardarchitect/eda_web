import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../../data";
import { Carousel } from "antd";

export const ProjectPage = () => {
  const { id } = useParams();
  const currentProject = projectList.find((project) => project.id === id);
  console.log(currentProject);
  
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  
  return (
    <div className="project_page">
      <div className="content-body">
        <div className="project-description">
          <h1> {currentProject.title}</h1>
          <h2> {currentProject.year}</h2>
          <p> {currentProject.text}</p>
        </div>
        <div className="project-images">
         
        </div>
        <div className="carousel">
          <Carousel autoplay>
          {
          currentProject.images.map((img) => (
            <div style={contentStyle}>
            <img  src={img.address} alt={img.title} />
            </div>
          ))
          }
          </Carousel>
        </div>
      </div>
    </div>
  );
};
