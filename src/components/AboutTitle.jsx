import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

class AboutTitle extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <h1>{`< About />`}</h1>
      </Jumbotron>
    );
  }
}

export default AboutTitle;
