import * as React from "react";
import TrackList from "./../TrackList/TrackList";
import "./SearchResults.css";

export default function SearchResults({ searchResults, setPlaylistTracks }) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={searchResults} setPlaylistTracks={setPlaylistTracks}/>
    </div>
  );
}
