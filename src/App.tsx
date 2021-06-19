import React from 'react';
import './App.css';
import Game from './components/Game';

const App = (): JSX.Element => {
  return (
    <div className="main">
      <Game />
    </div>
  );
};

export { App };
