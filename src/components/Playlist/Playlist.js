import * as React from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

export default function Playlist({
  playlistTracks,
  setPlaylistTracks,
  setPlaylistName,
  playlistName,
  savePlaylist,
  setSearchResults
}) {

  const handleSavePlaylist = async () => {
    await savePlaylist(
      playlistName,
      playlistTracks.map(({ uri }) => uri)
    );
    setPlaylistName('New Playlist');
    setPlaylistTracks([]);
    setSearchResults([])
  };

  return (
    <div className="Playlist">
      <input
        value={playlistName}
        onChange={({ target }) => setPlaylistName(target.value)}
      />
      <TrackList
        tracks={playlistTracks}
        setPlaylistTracks={setPlaylistTracks}
        setSearchResults={setSearchResults}
        isRemoval
      />
      <button className="Playlist-save" onClick={handleSavePlaylist}>
        Save to Spotify
      </button>
    </div>
  );
}
