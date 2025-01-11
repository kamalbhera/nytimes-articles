import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders NY Times Most Popular Articles header', () => {
  render(<App />);
  const headerElement = screen.getByText(/NY Times Most Popular Articles/i);
  expect(headerElement).toBeInTheDocument();
});