import React, { useState } from 'react';
import Board from './Board';
import Moves from './Moves';
import { SquareType, History } from './type';

const Game = (): JSX.Element => {
  const [history, setHistory] = useState<History[]>([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState<number>(0);
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const handleClick = (i: number): void => {
    const _history = history.slice(0, stepNumber + 1);
    const current = _history[stepNumber];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(history.concat([{ squares: squares }]));
    setStepNumber(history.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step: number): void => {
    setHistory(history.slice(0, step + 1));
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const current = history[history.length - 1];
  const winner = calculateWinner(current.squares);

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <Moves history={history} onClick={jumpTo} />
      </div>
    </div>
  );
};

const calculateWinner = (squares: Array<SquareType>): SquareType => {
  const lines = [
    [0, 1, 2], // 横
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // 縦
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // 斜め
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default Game;
