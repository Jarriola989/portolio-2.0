import React, { Component } from "react";
import WiseCode from "./projects/WiseCode";
import wiseCode from "../images/wise-code.png";
import wiseDB from "../images/wisedb.png";
import Wisedb from "./projects/Wisedb";

class ProfessionalProjects extends Component {
  constructor() {
    super();
    this.state = {
      wisecode: false,
      wisedb: false,
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
    this.setState({ wisecode: false, wisedb: false });
  };

  render() {
    const { wisecode, wisedb } = this.state;
    return (
      <div className="all-projects">
        <div
          className={wisecode || wisedb ? "overlay show" : "overlay"}
          onClick={this.closeAllProjects}
        ></div>

        <div className="project-box">
          <img src={wiseCode} alt="wise-code mobile app" />
          <div className="project-details">
            <div className="project-title">WISE Code</div>
            <button onClick={() => this.selectProject("wisecode")}>
              More info
            </button>
          </div>
        </div>
        <WiseCode display={wisecode} closeProject={this.closeAllProjects} />

        <div className="project-box">
          <img src={wiseDB} alt="wisedb app" />
          <div className="project-details">
            <div className="project-title">WISEdb</div>
            <button onClick={() => this.selectProject("wisedb")}>
              More info
            </button>
          </div>
        </div>
        <Wisedb display={wisedb} closeProject={this.closeAllProjects} />

        <div className="project-box">
          <div className="project-details">
            <div className="project-title">BOLO</div>
            <button>Coming soon...</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfessionalProjects;
