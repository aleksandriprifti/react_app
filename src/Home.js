import React, { Component } from "react";
/* A router allows your application to navigate between different 
components. Router change the browser URL, modify the browser history */
import { Link } from "react-router-dom";
import dcComics from "./dc-comics.png";
import marvelLogo from "./marvel-comics.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Heros App!!!</h1>
        <div className="container">
          <Link className="column" to="/dc-comics">
            <img src={dcComics} alt="DC Logo" />
          </Link>
          <Link className="column" to="/marvel">
            <img src={marvelLogo} alt="Marvel Logo" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
