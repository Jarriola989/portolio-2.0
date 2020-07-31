import React, { Component } from "react";
import SyncLoader from "react-spinners/SyncLoader";

import "./Contact.css";
import ScrollableAnchor from "react-scrollable-anchor";

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
      <ScrollableAnchor id={"contact"}>
        <div className="contact">
          <h1 className="section--title">Contact</h1>
          <div className="message">
            <div className="name">
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                onChange={this.handleChange}
              />
              <span className="error">{formErrors.name}</span>
            </div>
            <div className="email">
              <input
                type="email"
                id="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
              <span className="error">{formErrors.email}</span>
            </div>
            <div className="body">
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
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}
export default Contact;
