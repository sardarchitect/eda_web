import React from "react";
import { PageBanner } from "../../Misc/PageBanner";
import { GridItem } from "./GridItem";
import { projectList } from "../../../data";
import './index.css';

export const Work = () => {
  return (
    <div className="work">
      <PageBanner title="Work" img="https://picsum.photos/300/600?random=422" />
      <div className="work-wrapper">
        <div className="work-description">
          <h1><i>Our work is realized by mission</i></h1>
        </div>
        <div className="work-grid">
          {projectList.map((project) => (
            <GridItem 
              key={project.id}
              id={project.id}
              title={project.title}
              thumbnail={project.thumbnail}
              />
          ))}
        </div>
      </div>
    </div>
  );
};
