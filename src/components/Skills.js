import React from "react";
import { render } from "react-dom";
import { useInView } from "react-intersection-observer";
// import Wrapper from "./elements/Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCodeBranch,
  faDatabase,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import "./LandingPage.css";
import "./Skills.css";
import ScrollableAnchor from "react-scrollable-anchor";
import { LANGUAGE, FRAMEWORK, STACK, DATABASE } from "../constants";

const Skills = () => {
  const [languages, languagesInView] = useInView({
    threshold: 0,
  });
  const [frameworks, frameworksInView] = useInView({
    threshold: 0,
  });

  return (
    <ScrollableAnchor id={"skills"}>
      <section className="skills">
        <h1 className="section--title">Skills</h1>
        <div className="skills--grid">
          <ul className="skills--list" ref={languages}>
            {Object.keys(LANGUAGE).map((key) => (
              <li className="skills--skill">{LANGUAGE[key]}</li>
            ))}
          </ul>
          <h2 className="skills--subtitle">Languages</h2>

          <ul className="skills--list" ref={frameworks}>
            {Object.keys(FRAMEWORK).map((key) => (
              <li className="skills--skill">{FRAMEWORK[key]}</li>
            ))}
          </ul>
          <h2 className="skills--subtitle">Frameworks</h2>

          <ul className="skills--list" ref={frameworks}>
            {Object.keys(DATABASE).map((key) => (
              <li className="skills--skill">{DATABASE[key]}</li>
            ))}
          </ul>
          <h2 className="skills--subtitle">Databases</h2>

          <ul className="skills--list" ref={frameworks}>
            {Object.keys(STACK).map((key) => (
              <li className="skills--skill">{STACK[key]}</li>
            ))}
          </ul>
          <h2 className="skills--subtitle">Tools</h2>
        </div>
      </section>
      {/* <div className="skills">

        <div className="skills-box">
          <div className="languages">
            <FontAwesomeIcon icon={faCode} className="skill-icon" />
            <h3>Languages</h3>
            <p>
              <span>Javascript</span> &nbsp;
              <span>Typescript</span> &nbsp;
              <span>Java</span> &nbsp;
              <span>GraphQL</span> &nbsp;
              <span>Python</span> &nbsp;
              <span>C++</span> &nbsp;
              <span>HTML5</span> &nbsp;
              <span>CSS3</span> &nbsp;
              <span>SASS</span> &nbsp;
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
              <span>GraphQLYoga</span> &nbsp;
              <span>Flask</span> &nbsp;
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
      </div> */}
    </ScrollableAnchor>
  );
};

export default Skills;
