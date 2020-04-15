import React from "react";
import wisecode from "../images/wise-code.png";
import wisedb from "../images/wisedb.png";

const ProfessionalProjects = () => {
  return (
    <div className="all-projects">
      <div className="project-box">
        <img src={wisecode} alt="wise-code mobile app" />
      </div>
      <div className="project-box bottom">
        <img src={wisedb} alt="wisedb app" />
      </div>
    </div>
  );
};

export default ProfessionalProjects;
