import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <a
        href="https://www.linkedin.com/in/janeth-arriola-a01463158/"
        rel="noopener noreferrer"
        target="_blank"
        className="linkedin"
      >
        <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
      </a>

      <a
        href="https://github.com/Jarriola989"
        rel="noopener noreferrer"
        target="_blank"
        className="github"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </footer>
  );
};

export default Footer;
