import React, { Component } from "react";
import image from "../../images/logo.png";

class Logo extends Component {
  render() {
    return (
      <>
        <img src={image} alt="logo" />
        <h2>
          <b>ResumeDebugger</b>
        </h2>
      </>
    );
  }
}

export default Logo;
