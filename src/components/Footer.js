import React from "react";
import { Link } from "react-router-dom";
import "./_Footer.scss";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";

export const Footer = () => {
  return (
    <footer>
        <div className="footer-nav">
          <div>
            <Link to="/">About</Link>
          </div>
          <div>
            <Link to="/work">Work</Link>
          </div>
          <div>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="footer_contact">
          24 Frank Lloyd Wright Drive <br /> Suite H1800 PO Box 533
          <br /> Ann Arbor MI 48106
        </div>
        <div className="footer_social">
          <a href="https://www.facebook.com/edgedesignassociates/">
            <TiSocialFacebook size="25px" />
          </a>
          <a href="https://www.linkedin.com/company/edge-design-associates">
            <TiSocialLinkedin size="25px" />
          </a>
        </div>
        <p> &#169;2020 | Edge Design Associates, Inc.</p>
    </footer>
  );
};