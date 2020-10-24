import React, { useState } from 'react';

import { useInterval } from './utils/use-interval';
import { Spinner } from './components/spinner/spinner';

import logo from './logo.svg';
import './App.css';

export interface AppProps {
  delay?: number | null;
}

export const App: React.FunctionComponent<AppProps> = ({
  delay = 50
}) => {
  const [progress, setProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // Clicking "Start" a tick will increment the progress based on the delay
  useInterval(
    // callback
    () => progress === 100 ? setIsActive(false) : setProgress(progress + 1),
    // delay
    isActive ? delay : null
  );

  const toggleIsActive = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setIsActive(!isActive);
  }

  return (
    <div className="App">
      <Spinner progress={progress} />
      <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => toggleIsActive(e)}>
        {isActive ? 'Pause' : 'Play'}
      </button>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
