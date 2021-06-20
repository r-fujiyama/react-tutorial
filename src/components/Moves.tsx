import React from 'react';
import { History } from './type';

interface MovesProps {
  history: History[];
  onClick: (i: number) => void;
}

const Moves = (props: MovesProps): JSX.Element => {
  return (
    <ol>
      {props.history.map((_, move): JSX.Element => {
        const desc = move ? 'Go to move #' + move : 'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => props.onClick(move)}>{desc}</button>
          </li>
        );
      })}
    </ol>
  );
};
export default Moves;
