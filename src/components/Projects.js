import React, { Component } from "react";
import ProfessionalProjects from "./ProfessionalProjects";
import PersonalProjects from "./PersonalProjects";
import "./Projects.css";
import ScrollableAnchor from "react-scrollable-anchor";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      professional: false,
      personal: true,
    };
  }

  switchToProfessional = () => {
    this.setState({
      professional: true,
      personal: false,
    });
  };

  switchToPersonal = () => {
    this.setState({
      professional: false,
      personal: true,
    });
  };

  render() {
    return (
      <ScrollableAnchor id={"projects"}>
        <div className="projects">
          <h1 className="section--title">Projects</h1>
          <div className="project-menu">
            <button
              className={!this.state.professional ? "active" : ""}
              onClick={this.switchToPersonal}
            >
              Personal
            </button>
            <button
              className={this.state.professional ? "active" : ""}
              onClick={this.switchToProfessional}
            >
              Professional
            </button>
          </div>
          {this.state.professional ? (
            <ProfessionalProjects />
          ) : (
            <PersonalProjects />
          )}
        </div>
      </ScrollableAnchor>
    );
  }
}
export default Projects;
