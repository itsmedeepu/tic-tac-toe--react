import React from "react";

function GameBoard({ onSelectSquare, board }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  // const handleSelect = (rowIdx, colIdx, event) => {
  //   setGameBoard((prevgamebaord) => {
  //     const updated = [...prevgamebaord.map((innerArray) => [...innerArray])];
  //     updated[rowIdx][colIdx] = activePlayerSymbol;
  //     return updated;
  //   });

  //   onSelectSquare();
  // };
  return (
    <ol id="game-board">
      {board.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((playersymbol, colIdx) => (
              <li key={colIdx}>
                <button
                  onClick={() => onSelectSquare(rowIdx, colIdx)}
                  disabled={playersymbol !== null}
                >
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
