import * as React from "react";
import { useState } from "react";
import "./SearchBar.css";

export default function Searchbar({ search }) {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="SearchBar">
      <input
        placeholder="Enter a Song, album, or Artist"
        value={searchInput}
        onChange={({ target: { value } }) => setSearchInput(value)}
      />
      <button className="SearchButton" onClick={() => search(searchInput)}>
        SEARCH
      </button>
    </div>
  );
}
