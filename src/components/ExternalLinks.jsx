import React, { Component } from "react";
import { Image, Container } from "react-bootstrap";
import linkedIn from "../images/linkedin-3-256.png";
import gitHub from "../images/github-8-256.png";
import email from "../images/email-256.png";
import "../css/externalLinks.css";

class ExternalLinks extends Component {
  render() {
    return (
      <Container>
        <Image src={linkedIn} className={"linkImage"} />
        <Image src={gitHub} className={"linkImage"} />
        <Image src={email} className={"linkImage"} />
      </Container>
    );
  }
}

export default ExternalLinks;
