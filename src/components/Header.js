import React from "react";
import { useState, useEffect } from "react";
import { ImMenu } from "react-icons/im";

import "./Header.css";
const Header = () => {
  //menu navbar create
  const [toggleMenu, setToggleMenu] = useState(false);
  // screen size control
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  //menu function
  const toggleNew = () => {
    setToggleMenu(!toggleMenu);
  };
  //resize function and change the menu nav
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    //length  desktop to lap size remove the menu
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className="header-container">
      <div className="navbar">
        <h2 className="logo">
          De<span>ve</span>lop<span>er</span>
        </h2>

        <nav>
          <ul
            className={toggleMenu ? "nav-mobile-link" : "nav-link"}
            onClick={() => setToggleMenu(false)}
          >
            <li className="nav">
              <a href="#about" className="about">
                About
              </a>
            </li>
            <li className="nav">
              <a href="#skills" className="skills">
                Skills
              </a>
            </li>
            <li className="nav">
              <a href="#projects" className="projects">
                projects
              </a>
            </li>
            <li className="nav">
              <a href="#contact" className="contact">
                footer
              </a>
            </li>
          </ul>
        </nav>
        <button>X</button>
        <button className="menu" onClick={() => setToggleMenu(!toggleMenu)}>
          {toggleMenu ? <h2>X</h2> : <ImMenu />}
        </button>
      </div>
    </div>
  );
};

export default Header;
