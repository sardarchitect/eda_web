import React from "react";

export const PageBanner = ({title, img}) => {
  return (
    <div className="page-banner">
      <img src={img} alt={title} />
      <h1>{title}</h1>
    </div>
  );
};
