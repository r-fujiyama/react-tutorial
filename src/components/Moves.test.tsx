import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Moves from './Moves';

describe('Board', () => {
  test('「Go to game start」ボタンが表示されていること', () => {
    const history = [{ squares: Array(9).fill(null) }];
    render(<Moves history={history} onClick={jest.fn()} />);
    expect(screen.getByText('Go to game start')).toBeInTheDocument();
  });

  test('「Go to move #*」ボタンが表示されていること', () => {
    const history = [
      { squares: Array(9).fill(null) },
      { squares: Array(9).fill(null) },
      { squares: Array(9).fill(null) },
    ];
    render(<Moves history={history} onClick={jest.fn()} />);
    expect(screen.getByText('Go to move #1')).toBeInTheDocument();
    expect(screen.getByText('Go to move #2')).toBeInTheDocument();
  });

  test('「ボタンクリック時に関数が呼び出されること', () => {
    const history = [{ squares: Array(9).fill(null) }, { squares: Array(9).fill(null) }];
    const mockFn = jest.fn();
    render(<Moves history={history} onClick={mockFn} />);

    userEvent.click(screen.getByText('Go to game start'));
    userEvent.click(screen.getByText('Go to move #1'));
    expect(mockFn).toBeCalledTimes(2);
  });
});
