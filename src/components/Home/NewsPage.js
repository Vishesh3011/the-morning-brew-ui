import React, { useEffect, useState } from 'react';

import './NewsPage.css';

import NewsCard from '../NewsCard/NewsCard';
import { useParams } from 'react-router-dom';
import { getNewsByCategory } from '../../apis/NewsCategory';

function NewsPage({ type, country }) {
  const [news, setNews] = useState([]);
  const category = useParams()

  useEffect(() => {
    async function newsArticles() {
      const request = await getNewsByCategory({ type, country, category: category.category});
      console.log(request.data);
      setNews(request.data.articles);
    }
    newsArticles();
  }, [category]);

  return (
    <div className='home'>
      {/* <section className='appName'>
        <h1>The Morning Brew</h1>
      </section> */}
      <section className='news' id="home">
        {news.map((ns, index) => (
          // ns.urlToImage &&
          <NewsCard className='homeNewsCard' key={index} title={ns.title} description={ns.description} image={ns.urlToImage} link={ns.url} datePublished={ns.publishedAt} author={ns.author} source={ns.source.name} />
        ))}
      </section>
    </div>
  )
}

export default NewsPage