import React from "react";
import "./css/app.css";
import Home from "./components/Home";
import { Router } from "@reach/router";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import ExternalLinks from "./components/ExternalLinks";

function App() {
  return (
    <div className="app">
      <Router className="main">
        <Home path="/" />
        <About path="About" />
        <Portfolio path="Portfolio" />
        <Contact path="Contact" />
      </Router>
      <ExternalLinks className="externalLinks" />
    </div>
  );
}

export default App;
