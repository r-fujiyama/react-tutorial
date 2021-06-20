import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Game from './Game';

describe('Game', () => {
  test('初期表示を確認', () => {
    render(<Game />);
    expect(screen.queryByText('X')).toBeNull();
    expect(screen.queryByText('O')).toBeNull();
    expect(screen.getByText('Next player: X')).toBeInTheDocument();
    expect(screen.getByText('Go to game start')).toBeInTheDocument();
  });

  test('Xが勝利すること', () => {
    render(<Game />);
    const squares = screen.getAllByRole('button');

    // X
    userEvent.click(squares[0]);
    expect(screen.getByText('X')).toBeInTheDocument();

    // XO
    userEvent.click(squares[1]);
    expect(screen.getByText('X')).toBeInTheDocument();
    expect(screen.getByText('O')).toBeInTheDocument();

    // XO
    // X
    userEvent.click(squares[3]);
    expect(screen.getAllByText('X')).toHaveLength(2);
    expect(screen.getByText('O')).toBeInTheDocument();

    // XO
    // XO
    userEvent.click(squares[4]);
    expect(screen.getAllByText('X')).toHaveLength(2);
    expect(screen.getAllByText('O')).toHaveLength(2);

    // XO
    // XO
    //  X
    userEvent.click(squares[7]);
    expect(screen.getAllByText('X')).toHaveLength(3);
    expect(screen.getAllByText('O')).toHaveLength(2);

    // XOO
    // XO
    //  X
    userEvent.click(squares[2]);
    expect(screen.getAllByText('X')).toHaveLength(3);
    expect(screen.getAllByText('O')).toHaveLength(3);

    // XOO
    // XOX
    //  X
    userEvent.click(squares[5]);
    expect(screen.getAllByText('X')).toHaveLength(4);
    expect(screen.getAllByText('O')).toHaveLength(3);

    // XOO
    // XOX
    //  XO
    userEvent.click(squares[8]);
    expect(screen.getAllByText('X')).toHaveLength(4);
    expect(screen.getAllByText('O')).toHaveLength(4);

    // XOO
    // XOX
    // XXO
    userEvent.click(squares[6]);
    expect(screen.getAllByText('X')).toHaveLength(5);
    expect(screen.getAllByText('O')).toHaveLength(4);
    expect(screen.getByText('Winner: X')).toBeInTheDocument();
  });

  test('Oが勝利すること', () => {
    render(<Game />);
    const squares = screen.getAllByRole('button');

    // X
    userEvent.click(squares[0]);
    expect(screen.getByText('X')).toBeInTheDocument();

    // XO
    userEvent.click(squares[1]);
    expect(screen.getByText('X')).toBeInTheDocument();
    expect(screen.getByText('O')).toBeInTheDocument();

    // XO
    // X
    userEvent.click(squares[3]);
    expect(screen.getAllByText('X')).toHaveLength(2);
    expect(screen.getByText('O')).toBeInTheDocument();

    // XO
    // XO
    userEvent.click(squares[4]);
    expect(screen.getAllByText('X')).toHaveLength(2);
    expect(screen.getAllByText('O')).toHaveLength(2);

    // XOX
    // XO
    userEvent.click(squares[2]);
    expect(screen.getAllByText('X')).toHaveLength(3);
    expect(screen.getAllByText('O')).toHaveLength(2);

    // XOX
    // XO
    // O
    userEvent.click(squares[6]);
    expect(screen.getAllByText('X')).toHaveLength(3);
    expect(screen.getAllByText('O')).toHaveLength(3);

    // XOX
    // XOX
    // O
    userEvent.click(squares[5]);
    expect(screen.getAllByText('X')).toHaveLength(4);
    expect(screen.getAllByText('O')).toHaveLength(3);

    // XOX
    // XOX
    // OO
    userEvent.click(squares[7]);
    expect(screen.getAllByText('X')).toHaveLength(4);
    expect(screen.getAllByText('O')).toHaveLength(4);
    expect(screen.getByText('Winner: O')).toBeInTheDocument();
  });

  test('ターンを進めるとmoveボタンが出現すること', () => {
    render(<Game />);
    const squares = screen.getAllByRole('button');

    userEvent.click(squares[0]);
    expect(screen.getByText('Go to game start')).toBeInTheDocument();
    expect(screen.getByText('Go to move #1')).toBeInTheDocument();

    userEvent.click(squares[1]);
    expect(screen.getByText('Go to game start')).toBeInTheDocument();
    expect(screen.getByText('Go to move #1')).toBeInTheDocument();
    expect(screen.getByText('Go to move #2')).toBeInTheDocument();

    userEvent.click(squares[3]);
    expect(screen.getByText('Go to game start')).toBeInTheDocument();
    expect(screen.getByText('Go to move #1')).toBeInTheDocument();
    expect(screen.getByText('Go to move #2')).toBeInTheDocument();
    expect(screen.getByText('Go to move #3')).toBeInTheDocument();

    userEvent.click(squares[4]);
    expect(screen.getByText('Go to game start')).toBeInTheDocument();
    expect(screen.getByText('Go to move #1')).toBeInTheDocument();
    expect(screen.getByText('Go to move #2')).toBeInTheDocument();
    expect(screen.getByText('Go to move #3')).toBeInTheDocument();
    expect(screen.getByText('Go to move #4')).toBeInTheDocument();

    userEvent.click(squares[7]);
    expect(screen.getByText('Go to game start')).toBeInTheDocument();
    expect(screen.getByText('Go to move #1')).toBeInTheDocument();
    expect(screen.getByText('Go to move #2')).toBeInTheDocument();
    expect(screen.getByText('Go to move #3')).toBeInTheDocument();
    expect(screen.getByText('Go to move #4')).toBeInTheDocument();
    expect(screen.getByText('Go to move #5')).toBeInTheDocument();

    userEvent.click(squares[2]);
    expect(screen.getByText('Go to game start')).toBeInTheDocument();
    expect(screen.getByText('Go to move #1')).toBeInTheDocument();
    expect(screen.getByText('Go to move #2')).toBeInTheDocument();
    expect(screen.getByText('Go to move #3')).toBeInTheDocument();
    expect(screen.getByText('Go to move #4')).toBeInTheDocument();
    expect(screen.getByText('Go to move #5')).toBeInTheDocument();
    expect(screen.getByText('Go to move #6')).toBeInTheDocument();

    userEvent.click(squares[5]);
    expect(screen.getByText('Go to game start')).toBeInTheDocument();
    expect(screen.getByText('Go to move #1')).toBeInTheDocument();
    expect(screen.getByText('Go to move #2')).toBeInTheDocument();
    expect(screen.getByText('Go to move #3')).toBeInTheDocument();
    expect(screen.getByText('Go to move #4')).toBeInTheDocument();
    expect(screen.getByText('Go to move #5')).toBeInTheDocument();
    expect(screen.getByText('Go to move #6')).toBeInTheDocument();
    expect(screen.getByText('Go to move #7')).toBeInTheDocument();

    userEvent.click(squares[8]);
    expect(screen.getByText('Go to game start')).toBeInTheDocument();
    expect(screen.getByText('Go to move #1')).toBeInTheDocument();
    expect(screen.getByText('Go to move #2')).toBeInTheDocument();
    expect(screen.getByText('Go to move #3')).toBeInTheDocument();
    expect(screen.getByText('Go to move #4')).toBeInTheDocument();
    expect(screen.getByText('Go to move #5')).toBeInTheDocument();
    expect(screen.getByText('Go to move #6')).toBeInTheDocument();
    expect(screen.getByText('Go to move #7')).toBeInTheDocument();

    userEvent.click(squares[6]);
    expect(screen.getByText('Go to game start')).toBeInTheDocument();
    expect(screen.getByText('Go to move #1')).toBeInTheDocument();
    expect(screen.getByText('Go to move #2')).toBeInTheDocument();
    expect(screen.getByText('Go to move #3')).toBeInTheDocument();
    expect(screen.getByText('Go to move #4')).toBeInTheDocument();
    expect(screen.getByText('Go to move #5')).toBeInTheDocument();
    expect(screen.getByText('Go to move #6')).toBeInTheDocument();
    expect(screen.getByText('Go to move #7')).toBeInTheDocument();
    expect(screen.getByText('Go to move #8')).toBeInTheDocument();
    expect(screen.getByText('Go to move #9')).toBeInTheDocument();
  });

  test('「Go to game start」ボタンを押下するとゲームが最初からスタートされること', () => {
    render(<Game />);
    const squares = screen.getAllByRole('button');
    expect(screen.queryByText('X')).toBeNull();
    expect(screen.queryByText('O')).toBeNull();
    expect(screen.getByText('Next player: X')).toBeInTheDocument();
    expect(screen.getByText('Go to game start')).toBeInTheDocument();

    userEvent.click(squares[0]);
    expect(screen.getByText('X')).toBeInTheDocument();
    expect(screen.getByText('Next player: O')).toBeInTheDocument();
    expect(screen.getByText('Go to game start')).toBeInTheDocument();
    expect(screen.getByText('Go to move #1')).toBeInTheDocument();

    userEvent.click(squares[9]);
    expect(screen.queryByText('X')).toBeNull();
    expect(screen.queryByText('O')).toBeNull();
    expect(screen.getByText('Next player: X')).toBeInTheDocument();
    expect(screen.getByText('Go to game start')).toBeInTheDocument();
    expect(screen.queryByText('Go to move #1')).toBeNull();
  });

  test('「Go to move #*」ボタンを押下すると指定のターンへジャンプすること', () => {
    render(<Game />);
    let squares = screen.getAllByRole('button');

    userEvent.click(squares[0]);
    expect(screen.getByText('X')).toBeInTheDocument();
    expect(screen.getByText('Next player: O')).toBeInTheDocument();
    expect(screen.getByText('Go to game start')).toBeInTheDocument();
    expect(screen.getByText('Go to move #1')).toBeInTheDocument();

    userEvent.click(squares[1]);
    expect(screen.getByText('X')).toBeInTheDocument();
    expect(screen.getByText('O')).toBeInTheDocument();
    expect(screen.getByText('Next player: X')).toBeInTheDocument();
    expect(screen.getByText('Go to game start')).toBeInTheDocument();
    expect(screen.getByText('Go to move #1')).toBeInTheDocument();
    expect(screen.getByText('Go to move #2')).toBeInTheDocument();

    squares = screen.getAllByRole('button');

    userEvent.click(squares[10]);
    expect(screen.getByText('X')).toBeInTheDocument();
    expect(screen.getByText('Next player: O')).toBeInTheDocument();
    expect(screen.getByText('Go to game start')).toBeInTheDocument();
    expect(screen.getByText('Go to move #1')).toBeInTheDocument();
    expect(screen.queryByText('Go to move #2')).toBeNull();
  });

  test('ターンを進めるとプレイヤーが入れ替わること', () => {
    render(<Game />);
    const squares = screen.getAllByRole('button');

    userEvent.click(squares[0]);
    expect(screen.getByText('Next player: O')).toBeInTheDocument();

    userEvent.click(squares[1]);
    expect(screen.getByText('Next player: X')).toBeInTheDocument();

    userEvent.click(squares[3]);
    expect(screen.getByText('Next player: O')).toBeInTheDocument();

    userEvent.click(squares[4]);
    expect(screen.getByText('Next player: X')).toBeInTheDocument();

    userEvent.click(squares[7]);
    expect(screen.getByText('Next player: O')).toBeInTheDocument();

    userEvent.click(squares[2]);
    expect(screen.getByText('Next player: X')).toBeInTheDocument();

    userEvent.click(squares[5]);
    expect(screen.getByText('Next player: O')).toBeInTheDocument();

    userEvent.click(squares[8]);
    expect(screen.getByText('Next player: X')).toBeInTheDocument();

    userEvent.click(squares[6]);
    expect(screen.getByText('Winner: X')).toBeInTheDocument();
  });
});
