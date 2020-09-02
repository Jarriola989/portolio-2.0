import React from "react";
// import { render } from "react-dom";
import { useInView } from "react-intersection-observer";
import "./LandingPage.css";
import "./Skills.css";
import ScrollableAnchor from "react-scrollable-anchor";
import { LANGUAGE, FRAMEWORK, STACK, DATABASE } from "../constants";

const Skills = () => {
  // languagesInView
  const [languages] = useInView({
    threshold: 0,
  });

  // frameworksInView
  const [frameworks] = useInView({
    threshold: 0,
  });

  return (
    <ScrollableAnchor id={"skills"}>
      <section className="skills">
        <h1 className="section--title">Skills</h1>
        <div className="skills--grid">
          <ul className="skills--list" ref={languages}>
            {Object.keys(LANGUAGE).map((key) => (
              <li className="skills--skill" key={key}>
                {LANGUAGE[key]}
              </li>
            ))}
          </ul>
          <h2 className="skills--subtitle">Languages</h2>

          <ul className="skills--list" ref={frameworks}>
            {Object.keys(FRAMEWORK).map((key) => (
              <li className="skills--skill" key={key}>
                {FRAMEWORK[key]}
              </li>
            ))}
          </ul>
          <h2 className="skills--subtitle">Frameworks</h2>

          <ul className="skills--list" ref={frameworks}>
            {Object.keys(DATABASE).map((key) => (
              <li className="skills--skill" key={key}>
                {DATABASE[key]}
              </li>
            ))}
          </ul>
          <h2 className="skills--subtitle">Databases</h2>

          <ul className="skills--list" ref={frameworks}>
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
