import React, { Component } from "react";
import GeekText from "./projects/GeekText";
import geekText from "../images/geektext.png";
import graphTheory from "../images/graphtheory.png";
import RHAZ from "../images/rhaz.png";
import Rhaz from "./projects/Rhaz";
import GraphTheory from "./projects/GraphTheory";
import greenTours from "../images/green-tours.png";
import GreenTours from "./projects/GreenTours";

class PersonalProjects extends Component {
  constructor() {
    super();
    this.state = {
      geektext: false,
      graphtheory: false,
      rhaz: false,
      greentours: false,
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
    });
  };

  render() {
    const { geektext, graphtheory, rhaz, greentours } = this.state;
    return (
      <div className="all-projects">
        <div
          className={
            geektext || graphtheory || rhaz || greentours
              ? "overlay show"
              : "overlay"
          }
          onClick={this.closeAllProjects}
        ></div>

        <div className="project-box">
          <img src={geekText} alt="geek text web app" />
          <div className="project-details">
            <div className="project-title white">Geek Text</div>
            <button onClick={() => this.selectProject("geektext")}>
              More info
            </button>
          </div>
        </div>
        <GeekText display={geektext} closeProject={this.closeAllProjects} />
        <div className="project-box">
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
        />
        <div className="project-box">
          <img src={greenTours} alt="green tours project" />
          <div className="project-details">
            <div className="project-title white">Green Tours</div>
            <button onClick={() => this.selectProject("greentours")}>
              More info
            </button>
          </div>
        </div>
        <GreenTours display={greentours} closeProject={this.closeAllProjects} />
        <div className="project-box">
          <img src={RHAZ} alt="rhaz game app" />
          <div className="project-details">
            <div className="project-title white">RHAZ</div>
            <button onClick={() => this.selectProject("rhaz")}>
              More info
            </button>
          </div>
        </div>
        <Rhaz display={rhaz} closeProject={this.closeAllProjects} />
      </div>
    );
  }
}

export default PersonalProjects;
