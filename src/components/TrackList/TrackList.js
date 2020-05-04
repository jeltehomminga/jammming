import * as React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

export default function TrackList({ tracks, setPlaylistTracks }) {
  return (
    <div className="TrackList">
      {tracks.map((track, i) => (
        <Track {...track} setPlaylistTracks={setPlaylistTracks} key={i} isRemoval={true} />
      ))}
    </div>
  );
}
