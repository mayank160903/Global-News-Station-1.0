import React, { useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import './search.css';
import {

  Link
} from "react-router-dom";

function Search (props) {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const apiKey = 'fa9248d531e940989b6ba8beb3ab7389';

  const [articles, setArticles] = useState([]);

  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${apiKey}`);
      const data = await response.json();
      setSearchResults(data.articles);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className='searchContainer'
          type="text"
          placeholder="Search for news"
          value={query}
          onChange={handleInputChange}
        />
        <button className='searchContainer' type="submit"><Link to="/Search">Search</Link></button>
      </form>
      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
          >       
          </InfiniteScroll>
      <div className="container">

      <div className="row">
            {searchResults.map((article, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <NewsItem
                    title={article.title ? article.title : ""}
                    description={article.description ? article.description : ""}
                    imageUrl={
                      article.urlToImage
                        ? article.urlToImage
                        : "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"
                    }
                    newsUrl={article.url}
                    author={article.author}
                    date={article.publishedAt}
                    source={article.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
    </div>
  );
}

export default Search;
