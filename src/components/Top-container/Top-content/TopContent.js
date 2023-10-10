import React, { useState } from "react";
import mypic from "../../../images/ajay-1.jpg";

import "./TopContent.css";
import { Link } from "react-scroll";

const TopContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="TopContent" id="about">
      {/* {resume.map((item=>{
  const {id,docu}=item;
  return( */}
      <div className="TopContent_Container">
        <div className="img-container">
          <img src={mypic} alt="" className="img-my" />
        </div>
        <div className="profile-detail">
          <h3 className="name">K.Ajay</h3>
          <p className="content"> web developer</p>
          <p className="description">
            i have a passion for building intuitive
            <br /> ,user-friendly interfaces that provide an <br />
            enjoyable and seamless user experience
          </p>
          <a href="www.google.com"></a>
        </div>
      </div>
      {/* )
  
}))} */}
    </div>
  );
};

export default TopContent;
