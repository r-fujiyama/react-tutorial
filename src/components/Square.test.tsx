import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Square from './Square';

describe('Square', () => {
  test('ボタンに「X, O」が表示されないこと', () => {
    const mockFn = jest.fn();
    render(<Square value={null} onClick={mockFn} />);
    expect(screen.queryByText('X')).toBeNull();
    expect(screen.queryByText('O')).toBeNull();
  });
  test('ボタンにXが表示されること', () => {
    render(<Square value={'X'} onClick={jest.fn()} />);
    expect(screen.getByText('X')).toBeInTheDocument();
  });

  test('ボタンにOが表示されること', () => {
    render(<Square value={'O'} onClick={jest.fn()} />);
    expect(screen.getByText('O')).toBeInTheDocument();
  });

  test('ボタンクリック時に関数が呼び出されること', () => {
    const mockFn = jest.fn();
    render(<Square value={'X'} onClick={mockFn} />);
    userEvent.click(screen.getByText('X'));
    expect(mockFn).toBeCalledTimes(1);
  });
});
