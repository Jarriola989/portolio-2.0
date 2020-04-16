import React, { Component } from "react";
import ProfessionalProjects from "./ProfessionalProjects";
import PersonalProjects from "./PersonalProjects";
import "./Projects.css";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      professional: true,
      personal: false,
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
    if (this.state.professional) {
      return (
        <div className="projects" id="projects">
          <h1>Projects</h1>
          <div className="bottom-border"></div>
          <div className="project-menu">
            <button className="active" onClick={this.switchToProfessional}>
              Professional
            </button>
            <button onClick={this.switchToPersonal}>Personal</button>
          </div>
          <ProfessionalProjects />
        </div>
      );
    }
    if (this.state.personal) {
      return (
        <div className="projects" id="projects">
          <h1>Projects</h1>
          <div className="bottom-border"></div>
          <div className="project-menu">
            <button onClick={this.switchToProfessional}>Professional</button>
            <button className="active" onClick={this.switchToPersonal}>
              Personal
            </button>
          </div>
          <PersonalProjects />
        </div>
      );
    }
  }
}
export default Projects;
