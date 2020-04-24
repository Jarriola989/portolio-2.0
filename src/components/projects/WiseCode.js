import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faEyeSlash, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./ProjectInfo.css";

const WiseCode = (props) => {
  return (
    <div
      className={
        props.display
          ? "project-info project-one display"
          : "project-info project-one"
      }
    >
      <h3 className="project-title">WISE Code-Mobile</h3>
      <FontAwesomeIcon icon={faTimes} className="exit-project-info" />
      <div className="contributions">
        <strong>My Contributions:</strong>
        <ul>
          <li>
            Node/Graphql API for data management app (WiseDB) used by WiseCode.
          </li>
        </ul>
      </div>
      <div className="tech-stack">
        <strong>Stack:</strong>
        <ul className="stack">
          <li>Typescript</li>
          <li>NodeJS</li>
          <li>Graphql</li>
          <li>Prisma</li>
          <li>Yoga</li>
          <li>Redis</li>
          <li>Kubernetes</li>
          <li>Docker</li>
          <li>Mongodb</li>
        </ul>
      </div>
      <div className="links">
        <a href="https://wisecode.io" rel="noopener noreferrer" target="_blank">
          <button className="live">
            <FontAwesomeIcon icon={faLink} /> Live
          </button>
        </a>
        <button disabled>
          <FontAwesomeIcon icon={faEyeSlash} /> Source Code
        </button>
      </div>
    </div>
  );
};

export default WiseCode;
