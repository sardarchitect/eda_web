import React from "react";
import { NavLink } from "react-router-dom";
import './index.css';

export const Nav = () => {
  return (
    <nav>
      <div className="nav__wrapper">
        <h1 className="logo">
          <NavLink to="/" activeClassName='selected-link'><img src="/eda_logo.png" alt='EDA logo' /></NavLink>
        </h1>
        <ul>
          <li>
            <NavLink to="/about" activeClassName='selected-link'>About</NavLink>
          </li>
          <li>
            <NavLink to="/work" activeClassName='selected-link'>Work</NavLink>
          </li>
          <li>
            <NavLink to="/contact"activeClassName='selected-link'>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
