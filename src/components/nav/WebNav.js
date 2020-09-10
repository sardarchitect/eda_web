import React from "react";
import { NavLink } from "react-router-dom";

export const WebNav = () => {
  return (
    <ul className="ul__web">
      <li>
        <NavLink to="/" exact activeClassName="navlink__active">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/work" activeClassName="navlink__active">
          Work
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeClassName="navlink__active">
          Contact
        </NavLink>
      </li>
    </ul>
  );
};
