import React from 'react';
import PropTypes from 'prop-types';
import './styles/ArticleDetail.css';

const ArticleDetail = ({ article }) => {
  return (
    <div className="article-detail">
      <h2>{article.title}</h2>
      <p>{article.byline}</p>
      <p>{article.abstract}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read Full Article
      </a>
    </div>
  );
};

ArticleDetail.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    byline: PropTypes.string,
    abstract: PropTypes.string,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArticleDetail;