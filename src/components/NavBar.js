import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import '../styles/NavBar.css';

export default function NavBar({ valueProp, handleSearch }) {
  console.log(valueProp);
  return (
    <div className='nav-bar'>
      <SearchIcon style={{ color: 'grey', marginRight: 10 }} />
      <input
        className='input'
        placeholder='Search'
        type='text'
        value={valueProp}
        onChange={handleSearch}
      />
    </div>
  );
}
