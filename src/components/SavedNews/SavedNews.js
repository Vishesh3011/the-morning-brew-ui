import React, { useEffect, useState } from 'react';

import { db } from '../../firebase';
import { useStateValue } from '../stateProvider';
import { useAuth } from '../Login/AuthContext';

import NewsCard from '../NewsCard/NewsCard';

import './SavedNews.css'
import { fetchSavedNews } from '../../apis/SaveNewsForUser';
import { useSelector } from 'react-redux';


function SavedNews() {
    const [news, setNews] = useState([]);

    const user = useSelector(state => state.user.user)

    useEffect (() => {
        const fetchNews = async () => {
          const savedNewsResponse = await fetchSavedNews(user.userId)
          console.log("zzzzzzzzzz", savedNewsResponse)
          setNews(savedNewsResponse)
        }
        fetchNews()
    }, [])

  return (
    <div className='home'>
      <section className='news' id = "home">
            {news.map(ns => (
            <NewsCard className='homeNewsCard' key = {ns.newsId} title = {ns.title} image = {ns.image} link = {ns.url}/>
            ))}
      </section>
    </div>
  )
}

export default SavedNews