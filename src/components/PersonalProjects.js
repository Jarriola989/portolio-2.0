import React, { Component } from "react";
import GeekText from "./projects/GeekText";
import geekText from "../images/geektext.png";
import graphTheory from "../images/graphtheory.png";
import RHAZ from "../images/rhaz.png";
import Rhaz from "./projects/Rhaz";
import GraphTheory from "./projects/GraphTheory";
class PersonalProjects extends Component {
  constructor() {
    super();
    this.state = {
      geektext: false,
      graphtheory: false,
      rhaz: false,
    };
  }

  selectProject = (project) => {
    if (this.state[project]) {
      this.setState({ [project]: false });
    } else {
      this.setState({ [project]: true });
    }
  };

  render() {
    const { geektext, graphtheory, rhaz } = this.state;
    return (
      <div className="all-projects">
        <div
          className={
            geektext || graphtheory || rhaz ? "overlay top" : "overlay"
          }
        ></div>

        <div
          className={geektext ? "project-box select" : "project-box"}
          onClick={() => this.selectProject("geektext")}
        >
          <img src={geekText} alt="geek text web app" />
        </div>
        <GeekText display={geektext} />
        <div
          className={
            graphtheory ? "project-box bottom select" : "project-box bottom"
          }
          onClick={() => this.selectProject("graphtheory")}
        >
          <img src={graphTheory} alt="graph theory web app" />
        </div>
        <GraphTheory display={graphtheory} />
        <div
          className={rhaz ? "project-box select" : "project-box"}
          onClick={() => this.selectProject("rhaz")}
        >
          <img src={RHAZ} alt="rhaz game app" />
        </div>
        <Rhaz display={rhaz} />
      </div>
    );
  }
}

export default PersonalProjects;
