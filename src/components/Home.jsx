import React, { Component } from "react";
import AboutTitle from "./AboutTitle";
import PortfolioTitle from "./PortfolioTitle";
import ContactOption from "./ContactOption";
import { Link } from "@reach/router";

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="About">
          <AboutTitle />
        </Link>
        <Link to="Portfolio">
          <PortfolioTitle />
        </Link>
        <Link to="Contact">
          <ContactOption />
        </Link>
      </div>
    );
  }
}

export default Home;
