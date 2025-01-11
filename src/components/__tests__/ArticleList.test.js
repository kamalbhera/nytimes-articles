import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleList from '../ArticleList';

const mockArticles = [
  { id: 1, title: 'Test Article 1', byline: 'Author 1' },
  { id: 2, title: 'Test Article 2', byline: 'Author 2' },
];

test('renders a list of articles', () => {
  render(<ArticleList articles={mockArticles} onSelectArticle={jest.fn()} />);
  const firstArticle = screen.getByText(/Test Article 1/i);
  const secondArticle = screen.getByText(/Test Article 2/i);
  expect(firstArticle).toBeInTheDocument();
  expect(secondArticle).toBeInTheDocument();
});