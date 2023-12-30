import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navBar.css";
import logo from "../images/logo.png";
import menu from "../images/menu.png";
import arrow from "../images/arrow.png";

const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <nav>
      <div className="header">
        <div id="nameIcon">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div id="navDiv">
          <ul className={menuOpen ? "open" : " "}>
            <li className="nav-item">
              <NavLink
                onClick={() => {
                  setmenuOpen(!menuOpen);
                }}
                to="/Home"
                className="nav-item-inner"
              >
                <span> Home </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                onClick={() => {
                  setmenuOpen(!menuOpen);
                }}
                to="/About"
                className="nav-item-inner"
              >
                <span> About </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                onClick={() => {
                  setmenuOpen(!menuOpen);
                }}
                to="/Projects"
                className="nav-item-inner"
              >
                <span> Projects </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                onClick={() => {
                  setmenuOpen(!menuOpen);
                }}
                to="/Blogs"
                className="nav-item-inner"
              >
                <span> Blogs </span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className="menu"
          onClick={() => {
            setmenuOpen(!menuOpen);
          }}
        >
          {menuOpen ? (
            <img src={arrow} className="btn" name="close-circle-outline" />
          ) : (
            <img src={menu} className="btn" name="add-circle-outline" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
