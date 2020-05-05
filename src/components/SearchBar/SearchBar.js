import * as React from 'react';
import { useState } from 'react';
import './SearchBar.css';

export default function Searchbar({ search, setSearchResults }) {
  const [searchInput, setSearchInput] = useState('');
  const searchAndSetTracks = async (term) => {
    const result = await search(term);
    setSearchResults(result);
  };
  return (
    <div className="SearchBar">
      <input
        placeholder="Enter a Song, album, or Artist"
        value={searchInput}
        onChange={({ target: { value } }) => setSearchInput(value)}
      />
      <button
        className="SearchButton"
        onClick={() => searchAndSetTracks(searchInput)}
      >
        SEARCH
      </button>
    </div>
  );
}
