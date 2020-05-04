import * as React from "react";
import "./Track.css";

export default function Track({
  id,
  name,
  artist,
  album,
  isRemoval,
  setPlaylistTracks,
}) {
  const renderAction = isRemoval ? "-" : "+";
  const toggleToPlayList = () =>
    isRemoval
      ? setPlaylistTracks((tracks) => tracks.filter((track) => track.id !== id))
      : setPlaylistTracks((tracks) => [...tracks, { id, name, artist, album }]);

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{name}</h3>
        <p>
          {artist} | {album}
        </p>
      </div>
      <button className="Track-action" onClick={toggleToPlayList}>
        {renderAction}
      </button>
    </div>
  );
}
