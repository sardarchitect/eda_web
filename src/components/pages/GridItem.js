import React, { useState } from "react";
import { Link } from "react-router-dom";

export const GridItem = ({id, title, thumbnail}) => {
  const [hover, setHover] = useState(false);
  return (
    <Link to={`/work/${id}`}>
    <div className="grid_item" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
      {
        hover && (
        <h1>{title}</h1>
        )
      }
      <img src={thumbnail} alt={title} />
    </div>
    </Link>
  );
};
