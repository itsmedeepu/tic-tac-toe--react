import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const handleSelect = () => {
    setCurrentPlayer((current) => (current === "X" ? "O" : "X"));
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            isActive={currentPlayer === "X"}
            playername="Player1"
            symbol="X"
          />
          <Player
            isActive={currentPlayer === "O"}
            playername="Player1"
            symbol="O"
          />
        </ol>
        <GameBoard
          activePlayerSymbol={currentPlayer}
          onSelectSquare={handleSelect}
        />
      </div>
    </main>
  );
}

export default App;
