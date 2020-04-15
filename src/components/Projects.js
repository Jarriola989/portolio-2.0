import React, { Component } from "react";
import "./Projects.css";
class Projects extends Component {
  render() {
    return (
      <div className="projects" id="projects">
        <h1>Projects</h1>
        <div className="bottom-border"></div>
        <div className="project-menu">
          <button className="active">Professional</button>
          <button>Personal</button>
        </div>
      </div>
    );
  }
}
export default Projects;
