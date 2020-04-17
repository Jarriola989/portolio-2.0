import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCodeBranch,
  faDatabase,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="bottom-border"></div>
      <div className="skills-box">
        <div className="languages">
          <FontAwesomeIcon icon={faCode} className="skill-icon" />
          <h3>Languages</h3>
          <p>
            <span>Javascript</span> &nbsp;
            <span>Typescript</span> &nbsp;
            <span>Java</span> &nbsp;
            <span>GraphQL</span> &nbsp;
            <span>C++</span> &nbsp;
            <span>HTML5</span> &nbsp;
            <span>CSS3</span> &nbsp;
          </p>
        </div>
        <div className="frameworks">
          <FontAwesomeIcon icon={faLaptopCode} className="skill-icon" />
          <h3>Frameworks</h3>
          <p>
            <span>React</span> &nbsp;
            <span>Node</span> &nbsp;
            <span>Express</span> &nbsp;
            <span>Springboot</span> &nbsp;
            <span>Prisma</span> &nbsp;
            <span>GraphQL-Yoga</span> &nbsp;
          </p>
        </div>
        <div className="databases">
          <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
          <h3>Databases</h3>
          <p>
            <span>Postgresql</span> &nbsp;
            <span>Mongodb</span> &nbsp;
            <span>MySQL</span> &nbsp;
            <span>Redis</span> &nbsp;
          </p>
        </div>
        <div className="tools">
          <FontAwesomeIcon icon={faCodeBranch} className="skill-icon" />
          <h3>Tools</h3>
          <p>
            <span>Github</span> &nbsp;
            <span>Gitlab</span> &nbsp;
            <span>Heroku</span> &nbsp;
            <span>Kubernetes</span> &nbsp;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
