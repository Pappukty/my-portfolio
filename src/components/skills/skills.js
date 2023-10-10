import React from "react";
import "./skills.css";
import html from "../../images/html.png";
import css from "../../images/css.png";
import javascript from "../../images/javascript.png";
import react from "../../images/react.png";
import bootstrap from "../../images/bootstrap.png";
import nodejs from "../../images/node.js.png";
import { review } from "../../data";
const skills = () => {
  return (
    <div className="skills-1">
      {review.map((item) => {
        return (
          <div key={item.id} className="skils">
            <img src={item.image} className="skills-img"></img>
          </div>
        );
      })}
      <div className="skills-logo_container"></div>
    </div>
  );
};

export default skills;
