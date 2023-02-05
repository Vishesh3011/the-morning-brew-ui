import React, {useEffect, useState} from 'react';

import './Home.css';

import axios from '../axios';

import NewsCard from '../NewsCard/NewsCard';

function Home( { category } ) {
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function newsArticles(){
          const request = await axios.get(category);
          console.table(request.data.articles);
          console.table(request.data.articles.source);
          setNews(request.data.articles);
          // console.log(request.data.data);
          // setNews(request.data.data);
          return request;
      }
      newsArticles();
    }, [category]);

  return (
    <div className='home'>
      {/* <section className='appName'>
        <h1>The Morning Brew</h1>
      </section> */}
      <section className='news' id = "home">
        {news.map(ns => (ns.urlToImage &&
        <NewsCard className='homeNewsCard' key = {ns.source.id} title = {ns.title} description = {ns.description} image = {ns.urlToImage} link = {ns.url} datePublished = {ns.publishedAt} author = {ns.author} source = {ns.source.name}/>
        ))}
        </section>
    </div>
  )
}

export default Home