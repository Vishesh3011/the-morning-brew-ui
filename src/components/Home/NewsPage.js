import React, { useEffect, useState } from 'react';

import './NewsPage.css';
// import './Loader.css'

import NewsCard from '../NewsCard/NewsCard';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsByCategory } from '../../apis/NewsClient';
import { newsArray } from '../../util/data';
import NewsBox from '../NewsBox/NewsBox';

function NewsPage({ type, country, q }) {
  const [newsData, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const [reload, setReload] = useState(false);
  
  const {category} = useParams()
  const dispatch = useDispatch();

  useEffect(() => {
    // async function getNewsArticles() {
    //   // dispatch(getNewsByCategory({ type, country, category: category.category, q: search }));
    //   console.log(category)
    //   const news = await fetchNewsByCategory(category)
    //   // Mongo DB
    //   // const news = await fetchAllNews(category)
    //   console.log("here", news)
    //   setNews(news);
    // }
    
    //  getNewsArticles();
  }, [category, reload]);

  return (
    <div className='home'>
      {/* <section className='appName'>
        <h1>The Morning Brew</h1>
      </section> */}
      {/* <div className='navbarSearch'>
        <div className='navbarSearchDiv'>
          <input value={search} type='text' name='search' className='navbarSearchBar' onChange={handleSearchBarChange} />
        </div>
        <div>
          <SearchIcon className='navbarOptionsIcon' onClick={() => setReload(!reload)} />
        </div>
      </div> */}
      <section className='news' id="home">
        {/* {isLoading ? 
        <div className='loader'>
          <PropagateLoader size="30" color="#b1aeae"/>
        </div> 
        :  
        news.map((ns, index) => (
          // ns.urlToImage &&
          <NewsCard className='homeNewsCard' key={index} title={ns.title} description={ns.description} image={ns.image} link={ns.url} datePublished={ns.publishedAt} author={ns.author} source={ns.source.name} />
        ))} */}

      { newsArray.map(ns => (
          <NewsBox className='homeNewsCard' key={ns.newsId} newsId = {ns.newsId} title={ns.title} image_url={ns.image_url} summary={ns.summary} url={ns.url} publishedAt={ns.published_date}/>
        ))}

        {/* Mongo DB */}
        {/* { newsData.map(ns => (
          <NewsCard className='homeNewsCard' key={ns._id} newsId = {ns._id} title={ns.title} image={ns.image} link={ns.url} datePublished={ns.publishedAt} summary = {ns.summary}/>
        ))} */}
      </section>
    </div>
  )
}

export default NewsPage