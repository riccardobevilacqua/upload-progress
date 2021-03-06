import React from 'react';
import styles from './spinner.module.css';

export interface SpinnerProps {
  animationPlayState?: 'running' | 'paused';
  progress?: number;
  svgSize?: number;
  strokeWidth?: number;
}

export const Spinner: React.FunctionComponent<SpinnerProps> = ({
  animationPlayState = 'paused',
  progress = 0,
  svgSize = 150,
  strokeWidth = 10
}: SpinnerProps) => {
  const viewBox = [0, 0, svgSize, svgSize].join(' ');
  const dimensions = {
    width: svgSize + 'px',
    height: svgSize + 'px'
  };

  const circleCenterCoordinate = svgSize / 2;

  // It is necessary to factor in the width of the stroke to get the actual radius
  const circleRadius = circleCenterCoordinate - strokeWidth;

  // strokeDasharray equals to the circle circumference
  const strokeDasharray = Math.ceil(2 * circleRadius * Math.PI);

  // strokeDashoffset is proportional to the progress
  const strokeDashoffset = Math.ceil(strokeDasharray * (1 - progress / 100));

  const svgStyle = {
    ...dimensions,
    animationPlayState
  }

  const circleBackgroundStyle = {
    strokeWidth: strokeWidth + 'px',
    ...dimensions
  };

  const circleForegroundStyle = {
    strokeWidth: strokeWidth + 'px',
    strokeDashoffset,
    strokeDasharray,
    ...dimensions
  };

  return (
    <div className={styles.spinner__container} data-testid="spinner">
      <div
        className={styles.spinner__progress}
        style={dimensions}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={viewBox}
          style={svgStyle}
        >
          <circle
            className={[styles.spinner__circle, styles.circle__background].join(' ')}
            r={circleRadius}
            cx={circleCenterCoordinate}
            cy={circleCenterCoordinate}
            style={circleBackgroundStyle}
          ></circle>
          <circle
            className={[styles.spinner__circle, styles.circle__foreground].join(' ')}
            r={circleRadius}
            cx={circleCenterCoordinate}
            cy={circleCenterCoordinate}
            style={circleForegroundStyle}
          ></circle>
        </svg>
      </div>
      <div className={styles.spinner__caption}>
        <span className={styles.spinner__number}>{progress}<span className={styles.spinner__percent}>%</span></span>
      </div>
    </div>
  );
}
