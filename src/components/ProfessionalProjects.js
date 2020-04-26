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
          className={wisecode || wisedb ? "overlay top" : "overlay"}
          onClick={this.closeAllProjects}
        ></div>

        <div
          className={wisecode ? "project-box select" : "project-box"}
          onClick={() => this.selectProject("wisecode")}
        >
          <img src={wiseCode} alt="wise-code mobile app" />
        </div>
        <WiseCode display={wisecode} closeProject={this.closeAllProjects} />

        <div
          className={
            wisedb ? "project-box bottom select" : "project-box bottom"
          }
          onClick={() => this.selectProject("wisedb")}
        >
          <img src={wiseDB} alt="wisedb app" />
        </div>
        <Wisedb display={wisedb} closeProject={this.closeAllProjects} />
      </div>
    );
  }
}

export default ProfessionalProjects;
