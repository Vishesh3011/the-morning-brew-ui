import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NewsData, getInterestedNews } from '../../Feature/newsSlice';
import NewsCard from '../NewsCard/NewsCard';

import './NewsPage.css';
import { PropagateLoader } from 'react-spinners';
import { fetchInterestedNews } from '../../apis/InterestedNews';
import NewsBox from '../NewsBox/NewsBox';

const UserInterestedNews = () => {
    const [newsData, setNews] = useState([]);

//   const dispatch = useDispatch();

  const user = useSelector(state => state.user.user)

  const { news, isLoading } = useSelector(NewsData);

  useEffect(() => {
    async function getInterestedNewsArticles() {
        // console.log("zzzzzzzz", user.userId)
    //   dispatch(getInterestedNews(user.userId));
        const news = await fetchInterestedNews(user.userId)
      console.log("here", news)
      setNews(news);
    }
    user?.userId && getInterestedNewsArticles();
  }, [user]);

  return (
    <div className='home'>
      <section className='news' id="home">
      {/* {isLoading ? 
        <div className='loader'>
          <PropagateLoader size="30" color="#b1aeae"/>
        </div> 
        :  news.map((ns) => (
          // ns.urlToImage &&
          <NewsCard className='homeNewsCard' key={ns.newsId} title={ns.title} description={ns.summary} image={ns.image_url} link={ns.url} datePublished={ns.publishedAt}/>
        ))} */}
        
        { newsData.map(ns => (
          <NewsBox className='homeNewsCard' key={ns.newsId} newsId = {ns.newsId} title={ns.title} image_url={ns.image_url} summary={ns.summary} url={ns.url} publishedAt={ns.published_date}/>
        ))}
      </section>
    </div>
  )
}

export default UserInterestedNews