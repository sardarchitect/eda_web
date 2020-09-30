import React from 'react'

export const GridItemLeft = ({name, img, text}) => {
    return(
        <div className="staff-item-left">
              <div className="staff-photo">
                <img src={img} />
              </div>
              <div className="staff-description">
                <h3>{name}</h3>
                {text}
              </div>
            </div>
    );
}