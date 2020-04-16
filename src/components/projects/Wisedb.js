import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

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
      <div className="contributions">
        <strong>My Contributions:</strong>
        <ul>
          <li>Designed/implemented features to parse and match data.</li>
          <li>Scripts to efficiently find/fix faulty data.</li>
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
        <button disabled>
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
