import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCode } from "@fortawesome/free-solid-svg-icons";

const Rhaz = (props) => {
  return (
    <div className={
      props.display
        ? "project-info project-three display"
        : "project-info project-three"
    }>
      <h3 className="project-title">RHAZ</h3>

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
          className="project-link"
        >
          <button>
            <FontAwesomeIcon icon={faLink} /> Live
          </button>
        </a>
        <button disabled>
          <FontAwesomeIcon icon={faCode} /> Source Code
        </button>
      </div>
    </div>
  );
};

export default Rhaz;
