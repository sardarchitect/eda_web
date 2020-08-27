import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
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
        <p> &#169;2020 | Edge Design Associates, Inc.</p>
    </footer>
  );
};