import React, { Component } from "react";
import { Document } from "react-pdf";

class Resume extends Component {
  render() {
    return (
      <div>
        <Document file="./documents/JanethArriola_Resume.pdf"></Document>
      </div>
    );
  }
}

export default Resume;
