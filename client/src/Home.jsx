import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div
        style={{
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Welcome to my Playground</h1>
      </div>
    );
  }
}
