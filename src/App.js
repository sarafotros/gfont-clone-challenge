import React, { Component } from "react";

import "./App.css";
import Card from "./components/Card";

class App extends Component {
  state = {
    fontInfo: [
      { fontName: "Roboto", fontAuthor: "Christian Robertson", fontClass: "roboto" },
      { fontName: "Odibee Sans", fontAuthor: "James Barnard", fontClass: "odibeeSans" },
      { fontName: "Open Sans", fontAuthor: "Steve Matteson", fontClass: "openSans" },
      { fontName: "Sriracha", fontAuthor: "Cadson Demak", fontClass: "sriracha" }
    ],
    text: "Almost before we knew it, we had left the ground."
  };

  render() {
    return (
      <div className="container">
        {this.state.fontInfo.map((font, index) => {
          return <Card key={index} fontInfo={font} text={this.state.text} />;
        })}
      </div>
    );
  }
}

export default App;
