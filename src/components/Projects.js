import React, { Component } from "react";
import "./Projects.css";
import ScrollableAnchor from "react-scrollable-anchor";
import { PROJECTS } from "../projects";
import { PROJECT_TYPE } from "../constants";
import ProjectModal from "./ProjectModal";

const ProjectFilter = {
  all: "All",
  personal: "Personal",
  professional: "Professional",
};
class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projectFilter: ProjectFilter.all,
      projectSelected: null,
    };
  }

  switchToAll = () => {
    this.setState({
      projectFilter: ProjectFilter.all,
    });
  };

  switchToProfessional = () => {
    this.setState({
      projectFilter: ProjectFilter.professional,
    });
  };

  switchToPersonal = () => {
    this.setState({
      projectFilter: ProjectFilter.personal,
    });
  };

  displayDetails = (e) => {
    this.setState({ projectSelected: e.target.id });
    console.log(e.target.id);
  };

  closeProject = () => {
    this.setState({ projectSelected: null });
  };

  render() {
    const { projectFilter, projectSelected } = this.state;
    const all = projectFilter === ProjectFilter.all;
    const personal = projectFilter === ProjectFilter.personal;
    const professional = projectFilter === ProjectFilter.professional;
    console.log(all);
    const FILTER = personal ? PROJECT_TYPE.personal : PROJECT_TYPE.professional;
    // console.log(filter);
    return (
      <ScrollableAnchor id={"projects"}>
        <div className="projects">
          <h1 className="section--title">Projects</h1>
          <div className="project-menu">
            <button className={all ? "active" : ""} onClick={this.switchToAll}>
              All
            </button>
            <button
              className={personal ? "active" : ""}
              onClick={this.switchToPersonal}
            >
              Personal
            </button>
            <button
              className={professional ? "active" : ""}
              onClick={this.switchToProfessional}
            >
              Professional
            </button>
          </div>
          <div className="project--display">
            <div
              className={projectSelected ? "overlay show" : "overlay"}
              onClick={this.closeAllProjects}
            ></div>
            {Object.keys(PROJECTS)
              .filter(
                (key) =>
                  PROJECTS[key].type === (all ? PROJECTS[key].type : FILTER)
              )
              .map((key) => {
                const firstImage = PROJECTS[key].images[0].src;
                const altMessage = PROJECTS[key].images[0].alt;
                return (
                  <div className="project--container" key={key}>
                    <img
                      className="project--img"
                      src={firstImage}
                      alt={altMessage}
                    />
                    <div className="project--container-overlay">
                      <button
                        id={key}
                        className="project--btn"
                        onClick={this.displayDetails}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
          <ProjectModal
            project={PROJECTS[this.state.projectSelected]}
            closeProject={this.closeProject}
          />
        </div>
      </ScrollableAnchor>
    );
  }
}
export default Projects;
