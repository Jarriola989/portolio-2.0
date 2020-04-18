import React, { Component } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

// TODO: function to check errors and disable submit.

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      loading: false,
      response: "",
      formErrors: {
        name: "",
        email: "",
        message: "",
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
    const { id, value } = e.target;
    let { formErrors } = this.state;

    switch (id) {
      case "name":
        formErrors.name = value.length < 2 ? "Name is required." : "";
        break;
      case "email":
        formErrors.email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          value
        )
          ? ""
          : "Enter valid email.";
        break;
      case "message":
        formErrors.message = value.length < 10 ? "Message is too short" : "";
        break;
      default:
        break;
    }
  };

  sendEmail = () => {
    const { name, email, message } = this.state;
    this.setState({ loading: true });
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
    let { formErrors } = this.state;
    return (
      <div className="contact">
        <h1>Contact</h1>
        <div className="bottom-border"></div>
        <div className="message">
          <div className="name">
            Name: &nbsp;
            <input type="text" id="name" onChange={this.handleChange} />
            <span className="error">{formErrors.name}</span>
          </div>
          <div className="email">
            Email: &nbsp;
            <input type="email" id="email" onChange={this.handleChange} />
            <span className="error">{formErrors.email}</span>
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
