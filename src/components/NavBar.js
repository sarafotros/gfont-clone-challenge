import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import '../styles/NavBar.css';

export default function NavBar() {
  return (
    <div className='nav-bar'>
      <SearchIcon style={{ color: 'grey', marginRight: 10 }} />
      <input className='input' placeholder='Search' type='text' />
    </div>
  );
}
