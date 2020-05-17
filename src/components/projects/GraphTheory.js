import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCode, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./ProjectInfo.css";

const GraphTheory = (props) => {
  return (
    <div className={props.display ? "project-info display" : "project-info"}>
      <h3 className="project-title">Graph Theory</h3>
      <FontAwesomeIcon
        icon={faTimes}
        className="exit-project-info"
        onClick={props.closeProject}
      />
      <div className="summary">
        Graph Theory is a graph algorithm visualization app. It generates random
        graphs based on the number of nodes selected by a user. This app is
        currently IN PROGRESS and has not been deployed yet.
      </div>
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
