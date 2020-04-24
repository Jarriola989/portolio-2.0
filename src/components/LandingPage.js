import React, { Component } from "react";
import "./LandingPage.css";
import "./MobileMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="landing">
        <div className="block one">Janeth</div>
        <div className="block two">Arriola's</div>
        <div className="block three">Portfolio</div>
        <button className="mobile-menu">
          <div className="mobile-menu-1">
            <FontAwesomeIcon icon={faMinus} className="first-bar" />
            <FontAwesomeIcon icon={faMinus} className="second-bar"/>
          </div>
          <div className="mobile-menu-2">
            <FontAwesomeIcon icon={faMinus} className="first-bar" />
            <FontAwesomeIcon icon={faMinus} className="second-bar" />
          </div>
          <div className="mobile-menu-3">
            <FontAwesomeIcon icon={faMinus} />
          </div>
        </button>
      </div>
    );
  }
}

export default LandingPage;
