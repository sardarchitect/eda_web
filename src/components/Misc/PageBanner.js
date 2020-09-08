import React, { useState, useEffect } from "react";
import "./index.css";

export const PageBanner = ({ title }) => {
  const [bgImg, setBgImg] = useState(null);

  useEffect(() => {
    switch (title) {
      case "Home":
        setBgImg("https://picsum.photos/300/600?random=45");
        break;
      case "About Us":
        setBgImg("https://picsum.photos/300/600?random=4");
        break;
      case "Work":
        setBgImg("https://picsum.photos/300/600?random=49");
        break;
      case "Contact":
        setBgImg("https://picsum.photos/300/600?random=46");
        break;
      default:
        setBgImg("");
        break;
    }
  }, []);

  return (
    <div className="page-banner">
      <h1>{title}</h1>
      <img src={bgImg} alt={title} />
    </div>
  );
};
