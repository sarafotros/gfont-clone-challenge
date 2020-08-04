import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card";
import CssInfo from "./components/CssInfo";

class App extends Component {
  state = {
    fontInfo: [
      {
        id: 1,
        fontName: "Roboto",
        fontAuthor: "Christian Robertson",
        fontClass: "roboto",
        fontLink: "Roboto",
      },
      {
        id: 2,
        fontName: "Odibee Sans",
        fontAuthor: "James Barnard",
        fontClass: "odibeeSans",
        fontLink: "Odibe+Sans",
      },
      {
        id: 3,
        fontName: "Open Sans",
        fontAuthor: "Steve Matteson",
        fontClass: "openSans",
        fontLink: "Open+Sans",
      },
      {
        id: 4,
        fontName: "Sriracha",
        fontAuthor: "Cadson Demak",
        fontClass: "sriracha",
        fontLink: "Sriracha",
      },
      {
        id: 5,
        fontName: "Recursive",
        fontAuthor: "Stephen Nixon",
        fontClass: "recursive",
        fontLink: "Recursive",
      },
      {
        id: 6,
        fontName: "Mulish",
        fontAuthor: "Vernon Adams, Cyreal, Jacques Le Bailly",
        fontClass: "mulish",
        fontLink: "Mulish",
      },
      {
        id: 7,
        fontName: "Montserrat",
        fontAuthor: "Julieta Ulanovsky, Sol Matas, Juan Pablo del Peral",
        fontClass: "montserrat",
        fontLink: "Montserrat",
      },
      {
        id: 8,
        fontName: "Lato",
        fontAuthor: "Łukasz Dziedzic",
        fontClass: "lato",
        fontLink: "Lato",
      },
      {
        id: 9,
        fontName: "Oswald",
        fontAuthor: "Vernon Adams, Kalapi Gajjar, Cyreal",
        fontClass: "oswald",
        fontLink: "Oswald",
      },
      {
        id: 10,
        fontName: "Red Rose",
        fontAuthor: "Jaikishan Patel",
        fontClass: "redRose",
        fontLink: "Red+Rose",
      },
    ],
    text: "Almost before we knew it, we had left the ground.",
    showDrawer: false,
    cardId: "",
  };

  toggleHandler = (id) => {
    let temp = this.state.showDrawer;
    this.setState({
      showDrawer: !temp,
      cardId: id,
    });
  };

  render() {
    let cardInfo = null;
    if (this.state.showDrawer === true) {
      const selectedCard = this.state.fontInfo.find((font) => {
        return font.id === this.state.cardId;
      });
      cardInfo = (
        <CssInfo fontFam={selectedCard.fontName} link={selectedCard.fontLink} />
      );
    }

    return (
      <div className="container">
        {" "}
        {this.state.fontInfo.map((font, index) => {
          return (
            <Card
              id={font.id}
              key={index}
              fontInfo={font}
              text={this.state.text}
              cssCard={this.toggleHandler}
            />
          );
        })}{" "}
        {cardInfo}{" "}
      </div>
    );
  }
}

export default App;
