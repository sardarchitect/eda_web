import React from "react";
import { PageBanner } from "../../PageBanner";
import "./_About.scss";

import arvinder from "../../../assets/img_team/IMG_9542.jpg";
import stephen from "../../../assets/img_team/IMG_9612.jpg";
import dan from "../../../assets/img_team/IMG_9635.jpg";
import ron from "../../../assets/img_team/IMG_9665.jpg";
import heather from "../../../assets/img_team/IMG_9709.jpg";
import { GridItemLeft } from "./GridItemLeft";
import { GridItemRight } from "./GridItemRight";

export const About = () => {
  return (
    <div className="about">
      <PageBanner title="About Us" />
      <div className="about-wrapper">
        <h1 className="section-heading">Our History</h1>
        <div className="about-description">
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
        <div className="about-staff">
          <h1 className="section-heading">Our Team</h1>
          <div className="about-staff-grid">
            <GridItemLeft
              name="Dan Mooney"
              img={dan}
              text="Prior to his work at LZA Ann Arbor, Ron served as Executive Vice
          President for MAVDevelopment, a real estate development company
          working in Michigan and Colorado. Ron successfully completed
          over twenty commercial development projects and numerous capital
          improvements. Prior to that Ron owned a successful architectural
          practice for 15 years until the firm was purchased by
          MAVDevelopment. Ron has practiced as a principal since 1990, has
          over 30 years' experience in the profession and is licensed in
          the state of Michigan."
            />
            <GridItemRight
              name="Ron Thomas"
              img={ron}
              text="Prior to his work at LZA Ann Arbor, Ron served as Executive Vice
          President for MAVDevelopment, a real estate development company
          working in Michigan and Colorado. Ron successfully completed
          over twenty commercial development projects and numerous capital
          improvements. Prior to that Ron owned a successful architectural
          practice for 15 years until the firm was purchased by
          MAVDevelopment. Ron has practiced as a principal since 1990, has
          over 30 years' experience in the profession and is licensed in
          the state of Michigan."
            />
            <GridItemLeft
              name="Heather Buffone"
              img={heather}
              text="Prior to his work at LZA Ann Arbor, Ron served as Executive Vice
          President for MAVDevelopment, a real estate development company
          working in Michigan and Colorado. Ron successfully completed
          over twenty commercial development projects and numerous capital
          improvements. Prior to that Ron owned a successful architectural
          practice for 15 years until the firm was purchased by
          MAVDevelopment. Ron has practiced as a principal since 1990, has
          over 30 years' experience in the profession and is licensed in
          the state of Michigan."
            />
            <GridItemRight
              name="Stephen Bohlen"
              img={stephen}
              text="Prior to his work at LZA Ann Arbor, Ron served as Executive Vice
          President for MAVDevelopment, a real estate development company
          working in Michigan and Colorado. Ron successfully completed
          over twenty commercial development projects and numerous capital
          improvements. Prior to that Ron owned a successful architectural
          practice for 15 years until the firm was purchased by
          MAVDevelopment. Ron has practiced as a principal since 1990, has
          over 30 years' experience in the profession and is licensed in
          the state of Michigan."
            />
            <GridItemLeft
              name="Arvinder Singh"
              img={arvinder}
              text="Prior to his work at LZA Ann Arbor, Ron served as Executive Vice
          President for MAVDevelopment, a real estate development company
          working in Michigan and Colorado. Ron successfully completed
          over twenty commercial development projects and numerous capital
          improvements. Prior to that Ron owned a successful architectural
          practice for 15 years until the firm was purchased by
          MAVDevelopment. Ron has practiced as a principal since 1990, has
          over 30 years' experience in the profession and is licensed in
          the state of Michigan."
            />
          </div>
        </div>
      </div>
    </div>
  );
};