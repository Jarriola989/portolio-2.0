import React, { Component } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      loading: false,
      response: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  sendEmail = () => {
    const { name, email, message } = this.state;
    this.setState({loading: true});
    let result = fetch(
      `https://contact-janeth.netlify.app/.netlify/functions/server/contact`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, email: email, message: message }),
      }
    );
    let response = result.then((response) => response.json());
    response.then((data) =>
      this.setState({
        response: data.message,
        loading: false,
      })
    );
  };

  render() {
    return (
      <div className="contact">
        <h1>Contact</h1>
        <div className="bottom-border"></div>
        <div className="message">
          <div className="name">
            Name: &nbsp;{" "}
            <input type="text" id="name" onChange={this.handleChange} />
          </div>
          <div className="email">
            Email: &nbsp;{" "}
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="body">
            Message: <br />
            <textarea
              id="message"
              placeholder="Write your message here."
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button onClick={this.sendEmail}>Send</button>
          <div className="email-response">
            <SyncLoader color={"#f6d8ae"} loading={this.state.loading} />{" "}
            {this.state.response}
          </div>
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
