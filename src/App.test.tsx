import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders KARPOLAN link', () => {
  render(<App />);
  const copyrightLink = screen.getByText(/KARPOLAN/i);
  expect(copyrightLink).toBeInTheDocument();
});
