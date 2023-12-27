import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

import { WINNING_COMBINATIONS } from "./winnig";
import GameOver from "./components/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const dervideCurrentPlayer = (gameTurns) => {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
};

const deriveWinner = (gameBoard, players) => {
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firsSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firsSquareSymbol &&
      firsSquareSymbol === secondSquareSymbol &&
      firsSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firsSquareSymbol];
    }
  }
  return winner;
};

const dervieGameBoard = (gameTurns) => {
  let gameBoard = [...initialGameBoard.map((e) => [...e])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return gameBoard;
};
function App() {
  const [players, setPlayer] = useState({ X: "Player 1", O: "Player 2" });

  const [gameTurns, setGameTurns] = useState([]);
  const currentPlayer = dervideCurrentPlayer(gameTurns);

  const hasDraw = gameTurns.length === 9 && !winner;

  const gameBoard = dervieGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard, players);

  const handleSelect = (rowIdx, colIdx) => {
    setGameTurns((prevturns) => {
      const currPlayer = dervideCurrentPlayer(prevturns);

      const updatedTurns = [
        { square: { row: rowIdx, col: colIdx }, player: currPlayer },
        ...prevturns,
      ];

      return updatedTurns;
    });
  };

  const handleNewGame = () => {
    setGameTurns([]);
  };

  const handlePlayerNamechnage = (symbol, newName) => {
    setPlayer((prevPlayers) => {
      return { ...prevPlayers, [symbol]: newName };
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            playername="Player 1"
            isActive={currentPlayer === "X"}
            symbol="X"
            OnChangeName={handlePlayerNamechnage}
          />
          <Player
            playername="Player 2"
            isActive={currentPlayer === "O"}
            symbol="O"
            OnChangeName={handlePlayerNamechnage}
          />
          <button onClick={handleNewGame}>New Game</button>
        </ol>

        {(winner || hasDraw) && (
          <GameOver winner={winner} newGame={handleNewGame} />
        )}
        <GameBoard board={gameBoard} onSelectSquare={handleSelect} />
        <div>
          <p style={{ "text-align": "center" }}>Designed By Deepak 😁</p>
        </div>
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
