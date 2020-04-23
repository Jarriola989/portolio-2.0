import React, { Component } from "react";
import { Document, Page } from "react-pdf";
// import resume from "./resume.pdf";

//TODO: Update React and pdf viewer
class Resume extends Component {
  constructor() {
    super();
    this.state = {
      numPages: null,
    };
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    return (
      <div>
        <Document
          file="./resume.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
          onLoadError={console.error}
        >
          <Page pageNumber={1} width={500} />
        </Document>
        {console.log(this.state.file)}
        {/* <a href={resume}></a> */}
      </div>
    );
  }
}

export default Resume;
