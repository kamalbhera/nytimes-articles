import React from 'react';
import PropTypes from 'prop-types';
import './styles/ArticleList.css';

const ArticleList = ({ articles, onSelectArticle }) => {
  return (
    <div className="article-list">
      {articles.map((article) => (
        <div
          key={article.id}
          className="article-item"
          onClick={() => onSelectArticle(article)}
        >
          <h3>{article.title}</h3>
          <p>{article.byline}</p>
        </div>
      ))}
    </div>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      byline: PropTypes.string,
    })
  ).isRequired,
  onSelectArticle: PropTypes.func.isRequired,
};

export default ArticleList;