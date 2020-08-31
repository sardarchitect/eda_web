import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import {TiSocialFacebook, TiSocialLinkedin} from 'react-icons/ti'

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
      <div className="footer_contact">
          24 Frank Lloyd Wright Drive <br /> Suite H1800 PO Box 533
          <br /> Ann Arbor MI 48106
      </div>
      <div className="footer_social">
          <a href='https://www.facebook.com/edgedesignassociates/'>
            <TiSocialFacebook size="25px" />
          </a>
          <a href='https://www.linkedin.com/company/edge-design-associates'>
          <TiSocialLinkedin size="25px" />
          </a>
      </div>
      <p> &#169;2020 | Edge Design Associates, Inc.</p>
    </footer>
  );
};
