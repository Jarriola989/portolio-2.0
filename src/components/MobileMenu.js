import React, { Component } from "react";
import resume from "../documents/resume.pdf";
import "./MobileMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faMinus } from "@fortawesome/free-solid-svg-icons";

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
        <button className="mobile-menu" onClick={this.openMenu}>
          <span className="mobile-menu-bar">
            &nbsp;
            {/* <FontAwesomeIcon icon={faMinus} className="first-bar" />
            <FontAwesomeIcon icon={faMinus} className="second-bar" /> */}
          </span>
          {/* <div className="mobile-menu-2">
            <FontAwesomeIcon icon={faMinus} className="first-bar" />
            <FontAwesomeIcon icon={faMinus} className="second-bar" />
          </div>
          <div className="mobile-menu-3">
            <FontAwesomeIcon icon={faMinus} />
          </div> */}
        </button>
        <div
          className={
            this.state.open ? "mobile-overlay" : "mobile-overlay hidden"
          }
        ></div>
        <div className={this.state.open ? "side-panel" : "side-panel hidden"}>
          <FontAwesomeIcon
            icon={faTimes}
            className={
              this.state.open ? "exit-mobile-menu" : "exit-mobile-menu hidden"
            }
            onClick={this.closeMenu}
          />
          <div></div>
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <button onClick={this.closeMenu}>Resume</button>
          </a>
          <a href="#skills">
            <button onClick={this.closeMenu}>Skills</button>
          </a>
          <a href="#projects">
            <button onClick={this.closeMenu}>Projects</button>
          </a>
          <a href="#contact">
            <button onClick={this.closeMenu}>Contact</button>
          </a>
        </div>
      </div>
    );
  }
}

export default MobileMenu;
