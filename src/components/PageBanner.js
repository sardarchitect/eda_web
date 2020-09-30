import React, { useState, useEffect } from "react";
import "./_PageBanner.scss";

import about from '../assets/img_banner/IMG_9722.jpg';
import work from '../assets/img_banner/RoyalOak-1.jpg';
import contact from '../assets/img_banner/DOT-Offices_2.jpg';

export const PageBanner = ({ title }) => {
  const [bgImg, setBgImg] = useState(null);

  useEffect(() => {
    switch (title) {
      case "About Us":
        setBgImg(about);
        break;
      case "Work":
        setBgImg(work);
        break;
      case "Contact":
        setBgImg(contact);
        break;
      default:
        setBgImg("");
        break;
    }
  }, [title]);

  return (
    <div className="page-banner">
      <h1>{title}</h1>
      <img src={bgImg} alt={title} />
    </div>
  );
};