import React from "react";
import "./TopContainer.css";
import { Element } from "react-scroll";
import TopContent from "./Top-content/TopContent";
const TopContainer = () => {
  return (
    <Element name="about" className="topContainer">
      <div className="topContainer-1">
        <TopContent />
      </div>
    </Element>
  );
};

export default TopContainer;
