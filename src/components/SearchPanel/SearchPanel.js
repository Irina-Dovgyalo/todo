import React from 'react';
import './SearchPanel.css';

const SearchPanel = () => {
    const searchText = 'Type here to search';
    return <input className='search-input' placeholder={searchText} />
  }

  export default SearchPanel;