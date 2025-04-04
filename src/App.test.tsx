import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders virtual properties dashboard', () => {
  render(<App />);
  const titleElement = screen.getByText(/Virtual Properties/i);
  expect(titleElement).toBeInTheDocument();
});
