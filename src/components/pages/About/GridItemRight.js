import React from 'react'

export const GridItemRight = ({name, img, text}) => {
    return(
        <div className="staff-item-right">
        <div className="staff-description">
          <h3>{name}</h3>
         {text}
        </div>
        <div className="staff-photo">
          <img src={img} />
        </div>
      </div>
    )
}