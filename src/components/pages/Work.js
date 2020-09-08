import React from "react";
import { PageBanner } from "../PageBanner";
import { GridItem } from "./GridItem";
import { projectList } from "../../data";
import "./_Work.scss";

export const Work = () => {
  return (
    <div className="work">
      <PageBanner title="Work" img="https://picsum.photos/300/600?random=422" />
      <div className="work-wrapper">
      <h1>Our Process</h1>

        <div className="work-description">
          <div>
            Edge Design Associates, Inc. was formed by Ron Thomas and Daniel P.
            Mooney after working together since 2000. <br />
            <br />
            The business is a Corporation licensed to practice architecture in
            the state of Michigan. Dan and Ron were principals at
            Luckenbach|Ziegelman Architects Ann Arbor, PLLC until Carl
            Luckenbach closed his practice in December of 2012. <br />
            <br />
            During their time at LZA Ann Arbor, they worked on a diverse range
            of project types from smaller scale sustainable projects to large
            scale public projects including libraries and parking garages,
            higher education buildings, corporate offices, mixed-use projects
            and a high technology office park.
          </div>
          <div>
            Edge Design Associates provides architectural, planning and graphic
            design services for commercial and institutional clients,
            collaborating with other professionals as necessary to serve the
            specific needs of our clients. <br />
            <br />
            Whatever the challenge, our most rewarding projects share similar
            traits: Shared vision for success Team building collaborative
            approach Enhanced value at each stage of development Project
            leadership by firm principals <br />
            <br />
            Current and recent clients include the Michigan League of
            Conservation Voters, Ann Arbor DDA, Journey of Faith Christian
            Church, Haggerty Dental, Republic Parking Systems, Branch Line
            School and Linear Mold and Engineering.
          </div>
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
