import React, { Component } from "react";
import AboutTitle from "./AboutTitle";
import PortfolioTitle from "./PortfolioTitle";
import ContactOption from "./ContactOption";
import { Link } from "@reach/router";
import "../css/app.css";

class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <Link to="About" className="aboutTitle">
          <AboutTitle />
        </Link>
        <Link to="Portfolio" className="portfolioTitle">
          <PortfolioTitle />
        </Link>
        {/* <Link to="Contact" className="contactLink">
          <ContactOption />
        </Link> */}
      </div>
    );
  }
}

export default Home;
