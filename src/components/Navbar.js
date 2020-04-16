import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/aboutme">About Me</Link>
        <Link to="/">Languages</Link>
        <Link to="/#projects">Projects</Link>
        <Link to="/">Contact Me</Link>
      </div>
    );
  }
}

export default Navbar;
