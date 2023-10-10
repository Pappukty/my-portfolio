import React from "react";

import "./SkillsContainer.css";
import LinearProgress from "@mui/material/LinearProgress";

import skills from "../../images/skills.jpg";
import { review } from "../../data";

const SkillsContainer = () => {
  return (
    <div className="skillContainer">
      {/* 

  {review.map((item => {
      
    
  const {id, name, image} = item;
return(


          )
      }))} */}
      <div className="image-container">
        <img src={skills} alt="skills" className="image"></img>
      </div>

      <div className="skillContainer_text" id="skills">
        <h2>SkillsList</h2>
        <div className="skillContainer_skillSet">
          <h3>React</h3>
          <div className="skillContainer_slider skillContainer_slider1">
            <LinearProgress variant="determinate" value={90} />
          </div>
        </div>
        <div className="skillContainer_skillSet">
          <h3>HTML</h3>
          <div className="skillContainer_slider skillContainer_slider2">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
        <div className="skillContainer_skillSet">
          <h3>CSS</h3>
          <div className="skillContainer_slider skillContainer_slider3">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
        <div className="skillContainer_skillSet">
          <h3>Javascript</h3>
          <div className="skillContainer_slider skillContainer_slider4">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsContainer;
