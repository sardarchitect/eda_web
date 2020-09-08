import React from "react";
import { PageBanner } from "../PageBanner";
import "./_Home.scss";

export const Home = () => {
  return (
    <div className="home">
      <PageBanner title="Home" img="https://picsum.photos/300/600?random=1258"/>
      <div className="home-wrapper">
        Hello
      </div>
    </div>
  );
};
