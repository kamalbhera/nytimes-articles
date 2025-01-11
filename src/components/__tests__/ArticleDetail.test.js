import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ArticleDetail from '../ArticleDetail';

describe('ArticleDetail Component', () => {
  const mockArticle = {
    title: 'Test Article Title',
    byline: 'By John Doe',
    abstract: 'This is a test abstract for the article.',
    url: 'https://example.com/full-article',
  };

  it('renders article details correctly', () => {
    render(<ArticleDetail article={mockArticle} />);
    expect(screen.getByText(mockArticle.title)).toBeInTheDocument();
    expect(screen.getByText(mockArticle.byline)).toBeInTheDocument();
    expect(screen.getByText(mockArticle.abstract)).toBeInTheDocument();
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', mockArticle.url);
    expect(link).toHaveTextContent('Read Full Article');
  });

  it('should render without crashing when no byline or abstract is provided', () => {
    const articleWithoutOptionalFields = {
      title: 'Test Article Title',
      url: 'https://example.com/full-article',
    };
    render(<ArticleDetail article={articleWithoutOptionalFields} />);
    expect(screen.getByText('Test Article Title')).toBeInTheDocument();
    expect(screen.queryByText('By John Doe')).toBeNull();
    expect(screen.queryByText('This is a test abstract for the article.')).toBeNull();
  });
});
