import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCode } from "@fortawesome/free-solid-svg-icons";
import "./ProjectInfo.css";

const GeekText = (props) => {
  return (
    <div
      className={
        props.display
          ? "project-info project-one display"
          : "project-info project-one"
      }
    >
      <h3 className="project-title">Geek Text</h3>

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
          className="project-link"
        >
          <button>
            <FontAwesomeIcon icon={faLink} /> Live
          </button>
        </a>

        <button disabled>
          <FontAwesomeIcon icon={faCode} /> API Source Code
        </button>

        <button disabled>
          <FontAwesomeIcon icon={faCode} /> UI Source Code
        </button>
      </div>
    </div>
  );
};

export default GeekText;
