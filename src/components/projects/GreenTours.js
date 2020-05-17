import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faLink, faCode } from "@fortawesome/free-solid-svg-icons";

const GreenTours = (props) => {
  return (
    <div className={props.display ? "project-info display" : "project-info"}>
      <h3 className="project-title">Green Tours</h3>
      <FontAwesomeIcon
        icon={faTimes}
        className="exit-project-info"
        onClick={props.closeProject}
      />
      <div className="summary">
        Green Tours is a front-end landing page to book your favorite nature
        tours.
      </div>
      <div className="contributions">
        <strong>My Contributions:</strong>
        <ul>
          <li>Individual Project.</li>
        </ul>
      </div>
      <div className="tech-stack">
        <strong>Stack:</strong>
        <ul className="stack">
          <li>SASS</li>
          <li>CSS3</li>
          <li> HTML</li>
          <li>Netlify</li>
        </ul>
      </div>
      <div className="links">
        <a
          href="https://green-tours.netlify.app/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button className="live">
            <FontAwesomeIcon icon={faLink} /> Live
          </button>
        </a>
        <a
          href="https://github.com/Jarriola989/green-tours"
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

export default GreenTours;
