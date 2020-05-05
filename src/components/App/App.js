import * as React from 'react';
import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from './../SearchResults/SearchResults';
import './App.css';
import Playlist from '../Playlist/Playlist';
import Spotify from './../../util/Spotify';

export default function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('My playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  React.useEffect(() => {
    Spotify.getAccesToken();
  }, []);

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar
          search={Spotify.search}
          setSearchResults={setSearchResults}
        />
        <div className="App-playlist">
          <SearchResults
            searchResults={searchResults}
            setPlaylistTracks={setPlaylistTracks}
            setSearchResults={setSearchResults}
          />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            setPlaylistName={setPlaylistName}
            setPlaylistTracks={setPlaylistTracks}
            savePlaylist={Spotify.savePlaylist}
            setSearchResults={setSearchResults}
          />
        </div>
      </div>
    </div>
  );
}
