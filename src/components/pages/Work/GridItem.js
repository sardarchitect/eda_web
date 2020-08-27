import React, { useState } from "react";
import { Link } from "react-router-dom";

export const GridItem = ({title, thumbanil, text, year, images}) => {
  const [hover, setHover] = useState(false);
  return (
    <Link to='home'>
    <div className="grid_item" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
      {
        hover && (
        <h1>{title}</h1>
        )
      }
    </div>
    </Link>
  );
};
