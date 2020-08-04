import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import NavBar from './components/NavBar';

class App extends Component {
  state = {
    fontInfo: [
      {
        fontName: 'Roboto',
        fontAuthor: 'Christian Robertson',
        fontClass: 'roboto',
        addBtn: false,
      },
      {
        fontName: 'Odibee Sans',
        fontAuthor: 'James Barnard',
        fontClass: 'odibeeSans',
        addBtn: false,
      },
      {
        fontName: 'Open Sans',
        fontAuthor: 'Steve Matteson',
        fontClass: 'openSans',
        addBtn: false,
      },
      {
        fontName: 'Sriracha',
        fontAuthor: 'Cadson Demak',
        fontClass: 'sriracha',
        addBtn: false,
      },
      {
        fontName: 'Recursive',
        fontAuthor: 'Stephen Nixon',
        fontClass: 'recursive',
        addBtn: false,
      },
      {
        fontName: 'Mulish',
        fontAuthor: 'Vernon Adams, Cyreal, Jacques Le Bailly',
        fontClass: 'mulish',
        addBtn: false,
      },
      {
        fontName: 'Montserrat',
        fontAuthor: 'Julieta Ulanovsky, Sol Matas, Juan Pablo del Peral',
        fontClass: 'montserrat',
        addBtn: false,
      },
      {
        fontName: 'Lato',
        fontAuthor: 'Łukasz Dziedzic',
        fontClass: 'lato',
        addBtn: false,
      },
      {
        fontName: 'Oswald',
        fontAuthor: 'Vernon Adams, Kalapi Gajjar, Cyreal',
        fontClass: 'oswald',
        addBtn: false,
      },
      {
        fontName: 'Red Rose',
        fontAuthor: 'Jaikishan Patel',
        fontClass: 'redRose',
        addBtn: false,
      },
    ],
    text: 'Almost before we knew it, we had left the ground.',
    textAreaInput: null,
    searchTerm: '',
    filteredFontInfo: [],
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
    // console.log('change');
    // console.log(index);
    let fontInfoCopy = [...this.state.fontInfo];
    // console.log(fontInfoCopy[index].addBtn);
    fontInfoCopy[index].addBtn = true;
    this.setState({
      textAreaInput: e.target.value,
      fontInfo: fontInfoCopy,
    });
  };

  clickHandlerBtn = () => {
    console.log(this.state.textAreaInput);
    console.log(this.state.text);
    let inp = this.state.textAreaInput;
    console.log(inp);
    this.setState({
      text: inp,
    });
  };

  render() {
    return (
      <div className='container'>
        <NavBar
          valueProp={this.state.searchTerm}
          handleSearch={(e) => this.handleSearch(e)}
        />
        {this.state.filteredFontInfo.map((font, index) => {
          return (
            <Card
              key={index}
              fontInfo={font}
              text={this.state.text}
              textChangeHandlers={(e) => this.handleTextChange(e, index)}
              applyToAllBtn={font}
              handleClickApply={this.clickHandlerBtn}
              addBtn={font.addBtn}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
