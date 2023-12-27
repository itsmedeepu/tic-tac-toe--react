import React from "react";
import { useState } from "react";

function Player({ playername, symbol, isActive, OnChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [player, setplayer] = useState(playername);
  const handleClick = () => {
    setIsEditing((editing) => !editing);
    if (isEditing) OnChangeName(symbol, player);
  };
  const handleSave = (event) => {
    setplayer(() => event.target.value);
  };
  return (
    <li className={isActive ? "active" : "undefined"}>
      <span className="player">
        {isEditing ? (
          <input value={player} type="text" onChange={handleSave} required />
        ) : (
          <>
            <span className="player-name">{player}</span>
            <span className="player-symbol">{symbol}</span>
          </>
        )}
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
