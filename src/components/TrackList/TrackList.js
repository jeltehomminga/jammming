import * as React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

export default function TrackList({
  tracks,
  setPlaylistTracks,
  isRemoval,
  setSearchResults,
}) {
  return (
    <div className="TrackList">
      {tracks.map((track, i) => (
        <Track
          {...track}
          setPlaylistTracks={setPlaylistTracks}
          setSearchResults={setSearchResults}
          key={i}
          isRemoval={isRemoval}
        />
      ))}
    </div>
  );
}
