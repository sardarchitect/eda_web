import React from "react";
import { PageBanner } from "../PageBanner";

export const About = () => {
  return (
    <div className="about">
      <PageBanner title="About" img="https://picsum.photos/300/600?random=454"/>
      <div className="content-body">
        <div className="about-description">
          <h1>Context</h1>
          <p>
            Edge Design Associates, Inc. was formed by Ron Thomas and Daniel P.
            Mooney after working together since 2000. The business is a
            Corporation licensed to practice architecture in the state of
            Michigan. Dan and Ron were principals at Luckenbach|Ziegelman
            Architects Ann Arbor, PLLC until Carl Luckenbach closed his practice
            in December of 2012. During their time at LZA Ann Arbor, they worked
            on a diverse range of project types from smaller scale sustainable
            projects to large scale public projects including libraries and
            parking garages, higher education buildings, corporate offices,
            mixed-use projects and a high technology office park.
            <br />
            <br />
            Prior to his work at LZA Ann Arbor, Ron served as Executive Vice
            President for MAVDevelopment, a real estate development company
            working in Michigan and Colorado. Ron successfully completed over
            twenty commercial development projects and numerous capital
            improvements. Prior to that Ron owned a successful architectural
            practice for 15 years until the firm was purchased by
            MAVDevelopment. Ron has practiced as a principal since 1990, has
            over 30 years' experience in the profession and is licensed in the
            state of Michigan. As Principal at LZA Ann Arbor, Dan managed the
            day-today operations of the firm and served as project manager for
            all of the firm's projects, maintained client relations and headed
            up the firm's sustainable design initiatives. Prior to that, he was
            a Senior Associate at Hobbs & Black Architects for 12 years where he
            specialized in healthcare projects throughout southeast Michigan and
            the greater Lansing area. Dan has over 25 years' experience in the
            profession and is licensed in the state of Michigan. Current and
            recent clients include the Michigan League of Conservation Voters,
            Ann Arbor DDA, Journey of Faith Christian Church, Haggerty Dental,
            Republic Parking Systems, Branch Line School and Linear Mold and
            Engineering.
          </p>
        </div>
        <div className="about-team">
          <h1>Our Team</h1>
          <p>Dan Ron Heather Stephen Gary Dave Arvinder</p>
        </div>
      </div>
    </div>
  );
};
