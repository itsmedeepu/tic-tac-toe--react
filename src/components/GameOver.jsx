import React from "react";

function GameOver({ winner, newGame }) {
  return (
    <div id="game-over">
      <h2>Game Over !</h2>
      {winner && <p>{winner} won !</p>}
      {!winner && <p>It's a draw</p>}
      <p>
        <button onClick={newGame}>Rematch</button>
      </p>
    </div>
  );
}

export default GameOver;
