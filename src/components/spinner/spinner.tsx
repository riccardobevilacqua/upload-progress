import React from 'react';
import styles from './styles.module.css';

const Spinner: React.FunctionComponent<{}> = () => {
  const svgSize = 150;
  const circleCenterCoordinate = svgSize / 2;
  const strokeWidth = 10;
  const circleRadius = circleCenterCoordinate - strokeWidth;
  const viewBox = [0, 0, svgSize, svgSize].join(' ');
  const progress = 42;
  const circumference = svgSize * Math.PI;
  const strokeDashoffset = circumference - (circumference * progress) / 100;

  return (
    <div className={styles.spinner__container}>
      <div className={styles.spinner__progress}>
        <svg className={styles.spinner__circle} shapeRendering="geometricPrecision" viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
          <circle
            className={styles.circle__background}
            r={circleRadius}
            cx={circleCenterCoordinate}
            cy={circleCenterCoordinate}
            fill="transparent"
          ></circle>
          <circle
            className={styles.circle__foreground}
            r={circleRadius}
            cx={circleCenterCoordinate}
            cy={circleCenterCoordinate}
            fill="transparent"
            style={{
              strokeDashoffset
            }}
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
