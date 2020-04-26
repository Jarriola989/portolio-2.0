import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCode, faTimes } from "@fortawesome/free-solid-svg-icons";

const Rhaz = (props) => {
  return (
    <div
      className={
        props.display
          ? "project-info project-three display"
          : "project-info project-three"
      }
    >
      <h3 className="project-title">RHAZ</h3>
      <FontAwesomeIcon
        icon={faTimes}
        className="exit-project-info"
        onClick={props.closeProject}
      />
      <div className="contributions">
        <strong>My Contributions:</strong>
        <ul>
          <li>Logic for alien movement and re-generation.</li>
        </ul>
      </div>
      <div className="tech-stack">
        <strong>Stack:</strong>
        <ul className="stack">
          <li>Unity</li>
          <li>C#</li>
        </ul>
      </div>
      <div className="links">
        <a
          href="https://simmer.io/@Dazen/rhaz"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button className="live">
            <FontAwesomeIcon icon={faLink} /> Live
          </button>
        </a>
        <a
          href="https://github.com/wangscs/RHAZ"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button>
            <FontAwesomeIcon icon={faCode} /> Source Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default Rhaz;
