import * as React from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";

export default function Playlist({
  playlistTracks,
  setPlaylistName,
  playlistName,
  savePlaylist
}) {
  return (
    <div className="Playlist">
      <input
        defaultValue="New Playlist"
        value={playlistName}
        onChange={({ target }) => setPlaylistName(target.value)}
      />
      <TrackList tracks={playlistTracks} />
      <button className="Playlist-save" onClick={savePlaylist}>Save to Spotify</button>
    </div>
  );
}
