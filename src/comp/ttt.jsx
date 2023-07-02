import React, { useState } from 'react';
import './ttt.css';

function TicTac() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X');

  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
       {board[index]}
      </button>
    );
  };

  const handleClick = (index) => {
    if (board[index] === null) {
      const newBoard = [...board];
      newBoard[index] = player;
      setBoard(newBoard);
      setPlayer(player === 'X' ? 'O' : 'X');
    }

  };

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    if (board.filter((square) => square === null).length === 0) {
      return 'draw';
    }
    //return null;
  };

  const winner = checkWinner();
  let status;
  if (winner) {
    status = winner === 'draw' ? 'Draw' : `Winner: ${winner}`;
  } else {
    status = `Player: ${player}`;
  }

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setPlayer('X');
  };

  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <div className="board mt-3">
       {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => renderSquare(i))}
      </div>
      <div className="status my-2" style={{fontSize:"25px"}}><b>{status}</b></div>
      <button className="btn btn-warning p-1" onClick={handleReset}>New Game</button>
    </div>
  );
}

export default TicTac;
