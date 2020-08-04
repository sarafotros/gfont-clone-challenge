import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import NavBar from './components/NavBar';
import CssInfo from './components/CssInfo';

class App extends Component {
  state = {
    fontInfo: [
      {
        id: 1,
        fontName: 'Roboto',
        fontAuthor: 'Christian Robertson',
        fontClass: 'roboto',
        fontLink: 'Roboto',
        addBtn: false,
      },
      {
        id: 2,
        fontName: 'Odibee Sans',
        fontAuthor: 'James Barnard',
        fontClass: 'odibeeSans',
        fontLink: 'Odibe+Sans',
        addBtn: false,
      },
      {
        id: 3,
        fontName: 'Open Sans',
        fontAuthor: 'Steve Matteson',
        fontClass: 'openSans',
        fontLink: 'Open+Sans',
        addBtn: false,
      },
      {
        id: 4,
        fontName: 'Sriracha',
        fontAuthor: 'Cadson Demak',
        fontClass: 'sriracha',
        fontLink: 'Sriracha',
        addBtn: false,
      },
      {
        id: 5,
        fontName: 'Recursive',
        fontAuthor: 'Stephen Nixon',
        fontClass: 'recursive',
        fontLink: 'Recursive',
        addBtn: false,
      },
      {
        id: 6,
        fontName: 'Mulish',
        fontAuthor: 'Vernon Adams, Cyreal, Jacques Le Bailly',
        fontClass: 'mulish',
        fontLink: 'Mulish',
        addBtn: false,
      },
      {
        id: 7,
        fontName: 'Montserrat',
        fontAuthor: 'Julieta Ulanovsky, Sol Matas, Juan Pablo del Peral',
        fontClass: 'montserrat',
        fontLink: 'Montserrat',
        addBtn: false,
      },
      {
        id: 8,
        fontName: 'Lato',
        fontAuthor: 'Łukasz Dziedzic',
        fontClass: 'lato',
        fontLink: 'Lato',
        addBtn: false,
      },
      {
        id: 9,
        fontName: 'Oswald',
        fontAuthor: 'Vernon Adams, Kalapi Gajjar, Cyreal',
        fontClass: 'oswald',
        fontLink: 'Oswald',
        addBtn: false,
      },
      {
        id: 10,
        fontName: 'Red Rose',
        fontAuthor: 'Jaikishan Patel',
        fontClass: 'redRose',
        fontLink: 'Red+Rose',
        addBtn: false,
      },
    ],
    text: 'Almost before we knew it, we had left the ground.',
    showDrawer: false,
    cardId: '',
    searchTerm: '',
    filteredFontInfo: [],
  };

  toggleHandler = (id) => {
    let temp = this.state.showDrawer;
    this.setState({
      showDrawer: !temp,
      cardId: id,
    });
  };
  componentDidMount = () => {
    this.setState({
      filteredFontInfo: [...this.state.fontInfo],
    });
  };

  handleSearch = (e) => {
    // console.log(e.target.value);
    let allFontsArr = [...this.state.fontInfo];
    let filtered = allFontsArr.filter((font) => {
      return font.fontName
        .toLocaleLowerCase()
        .includes(this.state.searchTerm.toLocaleLowerCase());
    });

    if (e.target.value !== '') {
      this.setState({
        searchTerm: e.target.value,
        filteredFontInfo: filtered,
      });
    } else {
      this.setState({
        filteredFontInfo: allFontsArr,
        searchTerm: e.target.value,
      });
    }
  };

  handleTextChange = (e, index) => {
    let fontInfoCopy = [...this.state.fontInfo];
    // console.log(fontInfoCopy[index].addBtn);
    fontInfoCopy[index].addBtn = true;
    this.setState({
      textAreaInput: e.target.value,
      fontInfo: fontInfoCopy,
    });
  };

  clickHandlerBtn = () => {
    let inp = this.state.textAreaInput;
    console.log(inp);
    this.setState({
      text: inp,
    });
  };

  clickRestHandler = () => {
    console.log(this.state.text);
    let inp = this.state.textAreaInput;
    this.setState({
      text: 'Almost before we knew it, we had left the ground.',
      textAreaInput: inp,
    });
  };

  testClickHandle = (index) => {
    console.log('index', index);
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
      <div className='container'>
        {cardInfo}
        <NavBar
          valueProp={this.state.searchTerm}
          handleSearch={(e) => this.handleSearch(e)}
        />
        {this.state.filteredFontInfo.map((font, index) => {
          return (
            <Card
              key={index}
              fontInfo={font}
              id={font.id}
              text={this.state.text}
              cssCard={this.toggleHandler}
              textChangeHandlers={(e) => this.handleTextChange(e, index)}
              applyToAllBtn={font.addBtn}
              handleClickApply={this.clickHandlerBtn}
              handleClickReset={this.clickRestHandler}
              addBtn={font.addBtn}
              testClickHandle={() => this.testClickHandle(index)}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
