import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <div className="column">
        <h1>{this.props.name}</h1>
        <img src={this.props.src} alt={this.props.name} />
      </div>
    );
  }
}

export default Hero;
