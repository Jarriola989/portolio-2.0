import React, { Component } from "react";
import resume from "../documents/resume.pdf";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <a href={resume} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    );
  }
}

export default Navbar;
