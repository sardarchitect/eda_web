import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <div className="nav__wrapper">
        <h1 className="logo">
          <Link to="/"><img src="/eda_logo.png" alt='logo' /></Link>
        </h1>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
