import React, { Component } from "react";
import batman from "../batnam.png";
import robin from "../robin.png";
import wanderWoman from "../wondar-woman.jpg";

import Hero from "./Hero";

class DcComics extends Component {
  render() {
    return (
      <div className="DcComics">
        <h1>This is the DC Comics page.</h1>
        <div className="container">
          <Hero name="Batman" src={batman} />
          <Hero name="Robin" src={robin} />
          <Hero name="Wonder Woman" src={wanderWoman} />
        </div>
      </div>
    );
  }
}

export default DcComics;
