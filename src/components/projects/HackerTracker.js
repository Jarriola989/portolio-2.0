import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faLink, faCode } from "@fortawesome/free-solid-svg-icons";

const HackerTracker = (props) => {
  return (
    <div className={props.display ? "project-info display" : "project-info"}>
      <h3 className="project-title">Hacker Tracker</h3>
      <FontAwesomeIcon
        icon={faTimes}
        className="exit-project-info"
        onClick={props.closeProject}
      />
      <div className="summary">
        Hacker Tracker is an app to check if your password has been hacked! The
        password you check is immediately hashed, and then the first four
        characters are compared to a database of hacked hashed passwords. Once
        we get those passwords back, we compare to see if yours matches any of
        them.
      </div>
      <div className="contributions">
        <strong>Individual project</strong>
      </div>
      <div className="tech-stack">
        <strong>Stack:</strong>
        <ul className="stack">
          <li>React</li>
          <li>Javascript</li>
          <li> Python</li>
          <li>Flask</li>
          <li>CSS3</li>
          <li>HTML5</li>
          <li>Heroku</li>
          <li>Netlify</li>
        </ul>
      </div>
      <div className="links">
        <a
          href="https://hacker-tracker.netlify.app/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button className="live">
            <FontAwesomeIcon icon={faLink} /> Live
          </button>
        </a>
        <a
          href="https://github.com/Jarriola989/password-checker-ui"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button>
            <FontAwesomeIcon icon={faCode} /> UI
          </button>
        </a>
        <a
          href="https://github.com/Jarriola989/password-checker"
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

export default HackerTracker;
