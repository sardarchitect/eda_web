import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { ProjectPage } from "./ProjectPage";

export const GridItem = ({
  id,
  title,
  thumbnail,
  setShowProjectWithId
}) => {
  const [hover, setHover] = useState(false);

  const handleClick = (id) => {
    setShowProjectWithId (id);
  }
  return (
      <div
        className="grid_item"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick = {
          () => handleClick(id)
        }
      >
        {hover && <h1>{title}</h1>}
        <img src={thumbnail} alt={title} />
      </div>
  );
};
