import React from "react";
import geektext from "../images/geektext.png";
import graphtheory from "../images/graphtheory.png";
import rhaz from "../images/rhaz.png";
const PersonalProjects = () => {
  return (
    <div className="all-projects">
      <div className="project-box">
        <img src={geektext} alt="geek text web app" />
      </div>
      <div className="project-box bottom">
        <img src={graphtheory} alt="graph theory web app" />
      </div>
      <div className="project-box">
        <img src={rhaz} alt="rhaz game app" />
      </div>
    </div>
  );
};

export default PersonalProjects;
