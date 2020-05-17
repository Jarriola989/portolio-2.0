import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCode, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./ProjectInfo.css";

const GeekText = (props) => {
  return (
    <div className={props.display ? "project-info display" : "project-info"}>
      <h3 className="project-title">Geek Text</h3>
      <FontAwesomeIcon
        icon={faTimes}
        className="exit-project-info"
        onClick={props.closeProject}
      />
      <div className="summary">
        Geek Text is a bookstore app for all of your favorite Computer Science
        books.
      </div>
      <div className="contributions">
        <strong>My Contributions:</strong>
        <ul>
          <li>Login feature.</li>
          <li>Create-account feature.</li>
          <li>Implemented Stripe API for payment storage/verification.</li>
        </ul>
      </div>
      <div className="tech-stack">
        <strong>Stack:</strong>
        <ul className="stack">
          <li>ReactJS</li>
          <li>Java</li>
          <li> Springboot</li>
          <li>Postgresql</li>
        </ul>
      </div>
      <div className="links">
        <a
          href="https://geek-text.netlify.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button className="live">
            <FontAwesomeIcon icon={faLink} /> Live
          </button>
        </a>
        <a
          href="https://github.com/raroche/geek-text-ui"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button>
            <FontAwesomeIcon icon={faCode} /> UI
          </button>
        </a>
        <a
          href="https://github.com/raroche/geek-text-api"
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

export default GeekText;
