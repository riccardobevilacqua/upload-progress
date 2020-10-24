import React from 'react';
import styles from './styles.module.css';

interface SpinnerProps {
  svgSize?: number
  strokeWidth?: number
}

const Spinner: React.FunctionComponent<SpinnerProps> = ({
  svgSize = 150,
  strokeWidth = 10
}: SpinnerProps) => {
  const viewBox = [0, 0, svgSize, svgSize].join(' ');
  const dimensions = {
    width: svgSize + 'px',
    height: svgSize + 'px'
  };

  const circleCenterCoordinate = svgSize / 2;
  const progress = 42;

  // It is necessary to factor in the width of the stroke to get the actual radius
  const circleRadius = circleCenterCoordinate - strokeWidth;

  // strokeDasharray equals to the circle circumference
  const strokeDasharray = Math.round(2 * circleRadius * Math.PI);

  // strokeDashoffset is proportional to the progress
  const strokeDashoffset = Math.round(strokeDasharray * (1 - progress / 100));

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
    <div className={styles.spinner__container}>
      <div
        className={styles.spinner__progress}
        style={dimensions}
      >
        <svg
          shapeRendering="geometricPrecision"
          viewBox={viewBox}
          xmlns="http://www.w3.org/2000/svg"
          style={dimensions}
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

export { Spinner };
