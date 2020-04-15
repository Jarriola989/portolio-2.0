import React, { Component } from "react";
import "./LandingPage.css";

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
        <div className="nav-block"></div>
      </div>
    );
  }
}

export default LandingPage;
