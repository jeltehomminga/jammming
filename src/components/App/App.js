import * as React from "react";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "./../SearchResults/SearchResults";
import "./App.css";
import Playlist from "../Playlist/Playlist";
import Spotify from './../../util/Spotify'

const initialSearchResults = [
  { id: 1, name: "name1", artist: "artist1", album: "album1" },
  { id: 2, name: "name2", artist: "artist2", album: "album2" },
  { id: 3, name: "name3", artist: "artist3", album: "album3" },
];

const initialPlaylistTracks = [
  { id: 4, name: "Playlist1name", artist: "artist1", album: "album1" },
  { id: 5, name: "Playlist2name", artist: "artist2", album: "album2" },
  { id: 6, name: "Playlist3name", artist: "artist3", album: "album3" },
];

export default function App() {
  const [searchResults, setSearchResults] = useState(initialSearchResults);
  const [playListName, setPlaylistName] = useState('My playlist')
  const [playlistTracks, setPlaylistTracks] = useState(initialPlaylistTracks)
  const savePlaylist = () => playlistTracks.map(({uri})=> uri)
  // const search = (searchTerm) => console.log(searchTerm)
  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar search={Spotify.search} setSearchResults={searchResults}/>
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} setPlaylistTracks={setPlaylistTracks}/>
          <Playlist playListName={playListName} playlistTracks={playlistTracks} setPlaylistName={setPlaylistName} savePlaylist={savePlaylist}/>
        </div>
      </div>
    </div>
  );
}
