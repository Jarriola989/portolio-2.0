import React, { Component } from "react";
import geekText from "../images/geektext.png";
import graphTheory from "../images/graphtheory.png";
import RHAZ from "../images/rhaz.png";
class PersonalProjects extends Component {
  constructor() {
    super();
    this.state = {
      geektext: false,
      graphtheory: false,
      rhaz: false
    }
  }
  render() {
    const {geektext, graphtheory, rhaz} = this.state;
    return (
      <div className="all-projects">
        <div className={geektext || graphtheory || rhaz ? "overlay top" : "overlay"}></div>

        <div className="project-box">
          <img src={geekText} alt="geek text web app" />
        </div>
        <div className="project-box bottom">
          <img src={graphTheory} alt="graph theory web app" />
        </div>
        <div className="project-box">
          <img src={RHAZ} alt="rhaz game app" />
        </div>
      </div>
    );
  }
}

export default PersonalProjects;
