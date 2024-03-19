import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import { useLocation } from 'react-router-dom';

const SearchResult = ({ apiKey }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const searchParams = new URLSearchParams(location.search);
      const query = searchParams.get('query');

      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${apiKey}`);
        const data = await response.json();
        setSearchResults(data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [location.search, apiKey]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='container'>
        <div className="row">
      {searchResults.map((article, index) => (
        <div className="col-md-4" key={index}>
          <NewsItem
            title={article.title ? article.title : ''}
            description={article.description ? article.description : ''}
            imageUrl={
              article.urlToImage
                ? article.urlToImage
                : 'https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg'
            }
            newsUrl={article.url}
            author={article.author}
            date={article.publishedAt}
            source={article.source.name}
          />
        </div>
      ))}
      </div>
    </div>
  );
};

export default SearchResult;
