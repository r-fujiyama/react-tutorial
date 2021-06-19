import React from 'react';
import { SquareType } from './type';

interface SquareProps {
  value: SquareType;
  onClick: () => void;
}

const Square = (props: SquareProps): JSX.Element => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Square;
