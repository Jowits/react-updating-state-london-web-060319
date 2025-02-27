import React, { Component } from "react";

class ClickityClick extends Component {
  constructor() {
    super();
    this.state = {
      hasBeenClicked: false
    };
  }

  handleClick = () => {
    // update state here
    this.setState({
      hasBeenClicked: true
    });
  };

  render() {
    return (
      <div>
        <p>I have {this.hasBeenClicked ? null : "not"} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick;
