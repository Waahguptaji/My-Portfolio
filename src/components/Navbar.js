import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "../images/logo.png";
import menu from "../images/menu.png";
import arrow from "../images/arrow.png";

const Navbar = () => {
  return (
    <div id="main_bg">
      {/* <!-- navbar -->*/}
      <nav>
        <header className="header">
          <div id="nameIcon">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div id="navDiv">
            <ul className="list">
              <li className="nav-item">
                <Link to="/Home" className="nav-item-inner">
                  <span className="textAni"> Home </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-item-inner">
                  <span> About </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Projects" className="nav-item-inner">
                  <span> Projects </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Blogs" className="nav-item-inner">
                  <span> Blogs </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mobilenav">
            <img src={menu} className="btn" name="add-circle-outline" />
            <img src={arrow} className="btn" name="close-circle-outline" />
          </div>
        </header>
      </nav>
    </div>
  );
};

export default Navbar;
