import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  const testIds = {
    app: 'app',
    button: 'playPauseButton'
  };

  test('renders app', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId(testIds.app)).toBeInTheDocument();
  });

  test('renders button', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId(testIds.button)).toBeInTheDocument();
  });

  test('shows correct caption in button', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId(testIds.button).textContent).toBe('Play');
  });
});
