import React from 'react';
import { History } from './type';

const Moves = (history: History[], jumpTo: (i: number) => void): JSX.Element => {
  return (
    <ol>
      {history.map((_, move): JSX.Element => {
        const desc = move ? 'Go to move #' + move : 'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{desc}</button>
          </li>
        );
      })}
    </ol>
  );
};
export default Moves;
