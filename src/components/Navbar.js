import React, { Component } from "react";
import { Link } from "react-router-dom";
import resume from "../documents/resume.pdf";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <a href={resume} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
        <Link to="/">Skills</Link>
        <Link to="/#projects">Projects</Link>
        <Link to="/">Contact</Link>
      </div>
    );
  }
}

export default Navbar;
