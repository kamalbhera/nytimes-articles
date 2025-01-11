import React, { useState, useEffect } from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        /*eslint no-undef: "off"*/
        const response = await fetch(
          `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`
        );
        const data = await response.json();
        setArticles(data.results);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="app">
      <h1>NY Times Most Popular Articles</h1>
      <div className="content">
        <ArticleList articles={articles} onSelectArticle={setSelectedArticle} />
        {selectedArticle && <ArticleDetail article={selectedArticle} />}
      </div>
    </div>
  );
};


export default App;
