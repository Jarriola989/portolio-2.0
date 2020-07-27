import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTrello,
} from "@fortawesome/free-brands-svg-icons";
import replit from "../images/replit.png";
import "./LandingPage.css";

const MyProfiles = () => {
  return (
    <section className="profiles">
      <h1 className="section--title">
        Check out my <span className="pink">profiles</span>
      </h1>
      <div className="profiles--links">
        <a
          href="https://www.linkedin.com/in/janeth-arriola-a01463158/"
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn <FontAwesomeIcon icon={faLinkedin} />
          {/* <img src={linkedin} alt="linkedin icon" className="icon-img" /> */}
        </a>

        <a
          href="https://github.com/Jarriola989"
          rel="noopener noreferrer"
          target="_blank"
        >
          Github <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://repl.it/@Jarriola989"
          rel="noopener noreferrer"
          target="_blank"
        >
          Repl&nbsp;
          <img src={replit} alt="repl icon" className="landing--icon-img" />
        </a>
        <a
          href="https://trello.com/janetharriola/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Trello <FontAwesomeIcon icon={faTrello} />
        </a>
      </div>
    </section>
  );
};

export default MyProfiles;
