import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card";

class App extends Component {
  state = {
    fontInfo: [
      { fontName: "Roboto", fontAuthor: "Christian Robertson", fontClass: "roboto" },
      { fontName: "Odibee Sans", fontAuthor: "James Barnard", fontClass: "odibeeSans" },
      { fontName: "Open Sans", fontAuthor: "Steve Matteson", fontClass: "openSans" },
      { fontName: "Sriracha", fontAuthor: "Cadson Demak", fontClass: "sriracha" },
      { fontName:"Recursive", fontAuthor:"Stephen Nixon", fontClass:"recursive" },
      { fontName:"Mulish", fontAuthor:"Vernon Adams, Cyreal, Jacques Le Bailly", fontClass:"mulish" },
      { fontName:"Montserrat", fontAuthor:"Julieta Ulanovsky, Sol Matas, Juan Pablo del Peral", fontClass:"montserrat" },
      { fontName:"Lato", fontAuthor:"Łukasz Dziedzic", fontClass:"lato" },
      { fontName:"Oswald", fontAuthor:"Vernon Adams, Kalapi Gajjar, Cyreal", fontClass:"oswald" },
      { fontName:"Red Rose", fontAuthor:"Jaikishan Patel", fontClass:"redRose" },
    
    ],
    text: "Almost before we knew it, we had left the ground.",
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
