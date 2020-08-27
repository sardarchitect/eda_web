import React from "react";
import { PageBanner } from "../../PageBanner";
import { GridItem } from "./GridItem";
import { projectList } from "./projectData";

export const Work = () => {
  return (
    <div className="work">
      <PageBanner title="Work" />
      <div className="content-body">
        <div className="work-description">
          <h1>Our work is realized by mission</h1>
          <p>
            Edge Design Associates provides architectural, planning and graphic
            design services for commercial and institutional clients,
            collaborating with other professionals as necessary to serve the
            specific needs of our clients. Whatever the challenge, our most
            rewarding projects share similar traits:
            <br />
            <br />
          </p>
            <ul>
              <li>Shared vision for success</li>
              <li> Team building collaborative approach</li>
              <li>Enhanced value at each stage of developments</li>
              <li>Project leadership by firm principals</li>
            </ul>
            <br />
            <p>
            Current and recent clients include the Michigan League of
            Conservation Voters, Ann Arbor DDA, Journey of Faith Christian
            Church, Haggerty Dental, Republic Parking Systems, Branch Line
            School and Linear Mold and Engineering.
          </p>
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
