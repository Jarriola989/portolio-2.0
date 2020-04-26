import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCode, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./ProjectInfo.css";

const GraphTheory = (props) => {
  return (
    <div
      className={
        props.display
          ? "project-info project-two display"
          : "project-info project-two"
      }
    >
      <h3 className="project-title">Graph Theory</h3>
      <FontAwesomeIcon
        icon={faTimes}
        className="exit-project-info"
        onClick={props.closeProject}
      />
      <p>Individual Project (in progress)</p>
      <div className="contributions">
        <strong>Features</strong>
        <ul>
          <li>Randomly generate a graph with desired amount of nodes.</li>
          <li>UI for graph generation visualization.</li>
          <li>Back-end logic for Dijkstra's algorithm.</li>
        </ul>
      </div>
      <div className="tech-stack">
        <strong>Stack:</strong>
        <ul className="stack">
          <li>Javascript</li>
          <li>ReactJS</li>
          <li>NodeJS</li>
          <li> Heroku</li>
        </ul>
      </div>
      <div className="links">
        <a href="/" rel="noopener noreferrer" target="_blank">
          <button className="live">
            <FontAwesomeIcon icon={faLink} /> Live
          </button>
        </a>
        <a
          href="https://github.com/Jarriola989/graph-theory-ui"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button>
            <FontAwesomeIcon icon={faCode} /> UI
          </button>
        </a>
        <a
          href="https://github.com/Jarriola989/graph-theory-api"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button>
            <FontAwesomeIcon icon={faCode} /> API
          </button>
        </a>
      </div>
    </div>
  );
};

export default GraphTheory;
