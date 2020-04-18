import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h1>Contact</h1>
        <div className="bottom-border"></div>
        <div className="message">
          <div className="name">
            Name: &nbsp; <input type="text" />
          </div>
          <div className="email">
            Email: &nbsp; <input type="email" />
          </div>
          <div className="body">
            Message: <br /> <textarea placeholder="Coming Soon..."></textarea>
          </div>
          <button>Send</button>
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
        </div>
      </div>
    );
  }
}
export default Contact;
