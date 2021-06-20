import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Board from './Board';

describe('Board', () => {
  test('初期表示にボタン「X, O」が表示されていないこと', () => {
    render(<Board squares={Array(9).fill(null)} onClick={jest.fn()} />);
    expect(screen.queryByText('X')).toBeNull();
    expect(screen.queryByText('O')).toBeNull();
  });

  test('ボタンXが9個表示', () => {
    render(<Board squares={Array(9).fill('X')} onClick={jest.fn()} />);
    expect(screen.getAllByText('X')).toHaveLength(9);
  });

  test('ボタンOが9個表示', () => {
    render(<Board squares={Array(9).fill('O')} onClick={jest.fn()} />);
    expect(screen.getAllByText('O')).toHaveLength(9);
  });

  test('ボタンクリック時に関数が呼び出されること', () => {
    const mockFn = jest.fn();
    render(<Board squares={Array(9).fill(null)} onClick={mockFn} />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(9);

    buttons.map((button) => {
      userEvent.click(button);
    });
    expect(mockFn).toBeCalledTimes(9);
  });
});
