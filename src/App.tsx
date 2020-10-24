import React, { useState } from 'react';

import { useInterval } from './utils/use-interval';
import { Spinner } from './components/spinner/spinner';

import styles from './App.module.css';

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
    if (progress === 100) {
      setProgress(0);
    }
    setIsActive(!isActive);
  }

  return (
    <div className={styles.App} data-testid="app">
      <Spinner progress={progress} animationPlayState={isActive ? 'running' : 'paused'} />
      <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => toggleIsActive(e)} data-testid="playPauseButton">
        {isActive ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}
