import React from "react";
// import { render } from "react-dom";
import { useInView } from "react-intersection-observer";
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
  const [databases, databasesInView] = useInView({
    threshold: 0,
  });
  const [tools, toolsInView] = useInView({
    threshold: 0,
  });
  return (
    <ScrollableAnchor id={"skills"}>
      <section className="skills">
        <h1 className="section--title">Skills</h1>
        <div className="skills--grid">
          <ul
            className={
              languagesInView ? "skills--list" : "skills--list fade-from-right"
            }
            ref={languages}
          >
            {Object.keys(LANGUAGE).map((key) => (
              <li className="skills--skill" key={key}>
                {LANGUAGE[key]}
              </li>
            ))}
          </ul>
          <h2 className="skills--subtitle">Languages</h2>

          <ul
            className={
              frameworksInView ? "skills--list" : "skills--list fade-from-left"
            }
            ref={frameworks}
          >
            {Object.keys(FRAMEWORK).map((key) => (
              <li className="skills--skill" key={key}>
                {FRAMEWORK[key]}
              </li>
            ))}
          </ul>
          <h2 className="skills--subtitle">Frameworks</h2>

          <ul
            className={
              databasesInView ? "skills--list" : "skills--list fade-from-bottom"
            }
            ref={databases}
          >
            {Object.keys(DATABASE).map((key) => (
              <li className="skills--skill" key={key}>
                {DATABASE[key]}
              </li>
            ))}
          </ul>
          <h2 className="skills--subtitle">Databases</h2>

          <ul
            className={
              toolsInView ? "skills--list" : "skills--list fade-from-right"
            }
            ref={tools}
          >
            {Object.keys(STACK).map((key) => (
              <li className="skills--skill" key={key}>
                {STACK[key]}
              </li>
            ))}
          </ul>
          <h2 className="skills--subtitle">Tools</h2>
        </div>
      </section>
    </ScrollableAnchor>
  );
};

export default Skills;
