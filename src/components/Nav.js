import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./_Nav.scss";

export const Nav = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <nav>
      <div className="nav__wrapper">
        <h1 className="logo">
          <NavLink to="/" activeClassName='navlink__active'><img src="/eda_logo.png" alt='EDA logo' /></NavLink>
        </h1>
        <ul>
          <li>
            <NavLink to="/about" activeClassName='navlink__active'>About</NavLink>
          </li>
          <li>
            <NavLink to="/work" activeClassName='navlink__active'>Work</NavLink>
          </li>
          <li>
            <NavLink to="/contact"activeClassName='navlink__active'>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
