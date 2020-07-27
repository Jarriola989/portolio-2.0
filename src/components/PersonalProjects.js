import React, { Component } from "react";

import graphTheory from "../images/graphtheory.png";
import RHAZ from "../images/rhaz.png";
import Rhaz from "./projects/Rhaz";
import GraphTheory from "./projects/GraphTheory";
import hackerTracker from "../images/hacker-tracker.png";
import HackerTracker from "./projects/HackerTracker";
import { PROJECTS } from "../projects";
import { PROJECT_TYPE } from "../constants";

class PersonalProjects extends Component {
  constructor() {
    super();
    this.state = {
      geektext: false,
      graphtheory: false,
      rhaz: false,
      greentours: false,
      hackertracker: false,
    };
  }

  selectProject = (project) => {
    if (this.state[project]) {
      this.setState({ [project]: false });
    } else {
      this.setState({ [project]: true });
    }
  };

  closeAllProjects = () => {
    this.setState({
      geektext: false,
      graphtheory: false,
      rhaz: false,
      greentours: false,
      hackertracker: false,
    });
  };

  render() {
    const {
      geektext,
      graphtheory,
      rhaz,
      greentours,
      hackertracker,
    } = this.state;
    return (
      <div className="project--display">
        <div
          className={
            geektext || graphtheory || rhaz || greentours || hackertracker
              ? "overlay show"
              : "overlay"
          }
          onClick={this.closeAllProjects}
        ></div>
        {Object.keys(PROJECTS)
          .filter((key) => PROJECTS[key].type === PROJECT_TYPE.personal)
          .map((key) => {
            const firstImage = PROJECTS[key].images["image1"].src;
            const altMessage = PROJECTS[key].images["image1"].alt;
            return (
              <div className="project--container" key={key}>
                <img
                  className="project--img"
                  src={firstImage}
                  alt={altMessage}
                />
                <div className="project--container-overlay">
                  <button className="project--btn">Learn More</button>
                </div>
              </div>
            );
          })}

        {/* <div className="project-box">
          <img src={graphTheory} alt="graph theory web app" />
          <div className="project-details">
            <div className="project-title">Graph Theory</div>
            <button onClick={() => this.selectProject("graphtheory")}>
              More info
            </button>
          </div>
        </div>
        <GraphTheory
          display={graphtheory}
          closeProject={this.closeAllProjects}
        /> */}
      </div>
    );
  }
}

export default PersonalProjects;
