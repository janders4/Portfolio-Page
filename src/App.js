import React from "react";
import "./css/app.css";
import Home from "./components/Home";
import { Router } from "@reach/router";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <About path="About" />
        <Portfolio path="Portfolio" />
        <Contact path="Contact" />
      </Router>
    </div>
  );
}

export default App;
