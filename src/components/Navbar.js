import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/aboutme">Resume</Link>
        <Link to="/">Skills</Link>
        <Link to="/#projects">Projects</Link>
        <Link to="/">Contact</Link>
      </div>
    );
  }
}

export default Navbar;
