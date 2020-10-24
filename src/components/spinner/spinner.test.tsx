import React from 'react';
import { render, screen } from '@testing-library/react';
import { Spinner } from './spinner';

describe('Spinner', () => {
  test('renders spinner', () => {
    const { getByTestId } = render(<Spinner />);

    expect(getByTestId('spinner')).toBeInTheDocument();
  });

  test('shows given percentage on spinner', () => {
    const progress = 42;

    render(<Spinner progress={progress} />);
    expect(screen.getByText(`${progress}`)).toBeInTheDocument();
  });
});
