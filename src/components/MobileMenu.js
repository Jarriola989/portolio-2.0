import React, { Component } from "react";
import resume from "../documents/resume.pdf";
import "./MobileMenu.css";

class MobileMenu extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  openMenu = () => {
    this.setState({
      open: true,
    });
  };

  closeMenu = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div className="mobile">
        <input type="checkbox" id="menu" className="menu-checkbox" />
        <label for="menu" className="mobile-menu">
          <span className="mobile-menu-bar"></span>
          <span className="exit-menu-bar"></span>
        </label>

        <div className="side-panel">
          <div></div>
          <a href={resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    );
  }
}

export default MobileMenu;
