import React, { Component } from "react";
import "./LandingPage.css";

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      mobilemenu: false,
    };
  }

  toggleMobileMenu = () => {
    if (this.state.mobilemenu === true) {
      this.setState({ mobilemenu: false });
    } else {
      this.setState({ mobilemenu: true });
    }
  };

  render() {
    return (
      <div className="landing">
        <div className="block one">Janeth</div>
        <div className="block two">Arriola's</div>
        <div className="block three">Portfolio</div>
      </div>
    );
  }
}

export default LandingPage;
