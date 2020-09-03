import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import repl from "../images/repl-icon.png";
import trello from "../images/trello-icon.png";
import linkedin from "../images/linkedin-icon.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-name">
        <h1>Janeth Arriola</h1>
        <h3>Software Engineer</h3>
      </div>

      <div className="copyright">
        This portfolio was built by Janeth Arriola using React, Javascript,
        HTML5, CSS3, Apollo and Github's GraphQL API.
      </div>
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/janeth-arriola-a01463158/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin icon" className="icon-img" />
        </a>

        <a
          href="https://github.com/Jarriola989"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://repl.it/@Jarriola989"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={repl} alt="repl icon" className="icon-img" />
        </a>
        <a
          href="https://trello.com/janetharriola/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={trello} alt="trello icon" className="icon-img" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
