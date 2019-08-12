import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

class PortfolioTitle extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <h1>{`< Portfolio />`}</h1>
      </Jumbotron>
    );
  }
}

export default PortfolioTitle;
