import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faTimes } from "@fortawesome/free-solid-svg-icons";

const Wisedb = (props) => {
  return (
    <div
      className={
        props.display
          ? "project-info project-two display"
          : "project-info project-two"
      }
    >
      <h3 className="project-title">WISEdb</h3>
      <FontAwesomeIcon
        icon={faTimes}
        className="exit-project-info"
        onClick={props.closeProject}
      />
      <div className="summary">
        WISEdb is a data management app that allows a team of data analysts to
        easily parse and match validated ingredients to thousands of recipes and
        foods. This allows the team to have a complete and accurate nutrient
        profile on hundreds of thousands of foods eaten daily by Americans.
      </div>
      <div className="contributions">
        <strong>My Contributions:</strong>
        <ul>
          <li>Designed/implemented features to parse and match data.</li>
          <li>Data migrations for multiple app versions and schema changes</li>
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
        <button disabled className="live">
          <FontAwesomeIcon icon={faEyeSlash} /> Live
        </button>
        <button disabled>
          <FontAwesomeIcon icon={faEyeSlash} /> Source Code
        </button>
      </div>
    </div>
  );
};

export default Wisedb;
