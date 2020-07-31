import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import milkyway from "../images/milkyway.mp4";
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
      <section className="section-landing">
        <video className="bg-video__content" autoPlay loop muted>
          <source src={milkyway} type="video/mp4" />
          Your browser is not supported!
        </video>
        <div className="landing--intro">
          Hi, I'm <span className="pink">Janeth Arriola</span>
          <br />
          Software Engineer
          <br />
          <a href="#projects" className="landing--btn">
            View My Work &nbsp; <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </section>
    );
  }
}

export default LandingPage;
