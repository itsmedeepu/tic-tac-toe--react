import React from "react";
import { useState } from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const handleSelect = (rowIdx, colIdx, event) => {
    setGameBoard((prevgamebaord) => {
      const updated = [...prevgamebaord.map((innerArray) => [...innerArray])];
      updated[rowIdx][colIdx] = activePlayerSymbol;
      return updated;
    });

    onSelectSquare();
  };
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((playersymbol, colIdx) => (
              <li key={colIdx}>
                <button onClick={() => handleSelect(rowIdx, colIdx)}>
                  {playersymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
