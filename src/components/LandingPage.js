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
        <div className="block one">Janeth Arriola</div>
        <div className="block two">Software</div>
        <div className="block three">Developer</div>
      </div>
    );
  }
}

export default LandingPage;
