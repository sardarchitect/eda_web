import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./_Nav.scss";
import { MenuOutlined } from "@ant-design/icons";
import { MobileNav } from "./MobileNav";

export const Nav = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <>
    <MobileNav collapsed={collapsed} />

    <nav>
      <div className="nav__wrapper">
        <h1 className="logo">
          <NavLink to="/" activeClassName="navlink__active">
            <img src="/eda_logo.svg" alt="EDA logo" />
          </NavLink>
        </h1>
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
        <span id="toggleMenu" onClick={() => setCollapsed(!collapsed)}>
          <MenuOutlined />
        </span>
      </div>
    </nav>
    </>
  );
};
