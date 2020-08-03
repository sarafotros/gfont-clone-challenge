import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import NavBar from './components/NavBar';
import { colors } from '@material-ui/core';

class App extends Component {
  state = {
    fontInfo: [
      {
        fontName: 'Roboto',
        fontAuthor: 'Christian Robertson',
        fontClass: 'roboto',
      },
      {
        fontName: 'Odibee Sans',
        fontAuthor: 'James Barnard',
        fontClass: 'odibeeSans',
      },
      {
        fontName: 'Open Sans',
        fontAuthor: 'Steve Matteson',
        fontClass: 'openSans',
      },
      {
        fontName: 'Sriracha',
        fontAuthor: 'Cadson Demak',
        fontClass: 'sriracha',
      },
    ],
    text: 'Almost before we knew it, we had left the ground.',
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

  render() {
    return (
      <div className='container'>
        <NavBar
          valueProp={this.state.searchTerm}
          handleSearch={(e) => this.handleSearch(e)}
        />
        {this.state.filteredFontInfo.map((font, index) => {
          return <Card key={index} fontInfo={font} text={this.state.text} />;
        })}
      </div>
    );
  }
}

export default App;
