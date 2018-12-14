import React, { Component } from "react";
import { BrowserRouter as Roter, Route } from "react-router-dom";

import Home from "./Home";
import DCComic from "./Components/DcComics";
import Marvel from "./Components/Marvel";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Roter>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/dc-comics" component={DCComic} />
          <Route path="/marvel" component={Marvel} />
        </div>
      </Roter>
    );
  }
}

export default App;
