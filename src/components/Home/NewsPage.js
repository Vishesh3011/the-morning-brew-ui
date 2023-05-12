import React, { useEffect, useState } from "react";

import "./NewsPage.css";
// import './Loader.css'

import NewsCard from "../NewsCard/NewsCard";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsByCategory } from "../../apis/NewsClient";
import { newsArray } from "../../util/data";
import NewsBox from "../NewsBox/NewsBox";
import { fetchSavedNews } from "../../apis/SaveNewsForUser";

function NewsPage({ type, country, q }) {
  const [newsData, setNews] = useState([]);
  const [search, setSearch] = useState("");

  const { category } = useParams();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);

  // newsdata

  useEffect(() => {
    async function getNewsArticles() {
      const news = await fetchNewsByCategory(category);

      console.log("news", news);

      const savedNews = await fetchSavedNews(user.userId);
      let count = 0;

      var newsArray;
      if (savedNews?.length > 0) {
        newsArray = news.map((ns) => {
          const savedArticle = savedNews.find((sn) => sn.newsId === ns.newsId);
          const isSaved = Boolean(savedArticle);

          return { ...ns, isSaved };
        });
      } else {
        newsArray = news.map((ns) => {
          return { ...ns, isSaved: false };
        });
      }

      console.log("newsArray", newsArray);

      setNews(newsArray);
    }

    getNewsArticles();
  }, [category]);

  return (
    <div className="home">
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
      <section className="news" id="home">
        {/* {isLoading ? 
        <div className='loader'>
          <PropagateLoader size="30" color="#b1aeae"/>
        </div> 
        :  
        news.map((ns, index) => (
          // ns.urlToImage &&
          <NewsCard className='homeNewsCard' key={index} title={ns.title} description={ns.description} image={ns.image} link={ns.url} datePublished={ns.publishedAt} author={ns.author} source={ns.source.name} />
        ))} */}

        {newsData.map((ns) => (
          <NewsBox
            className="homeNewsCard"
            key={ns.newsId}
            newsId={ns.newsId}
            title={ns.title}
            image_url={ns.image_url}
            summary={ns.summary}
            url={ns.url}
            publishedAt={ns.published_date}
            isSaved={ns.isSaved}
          />
        ))}

        {/* Mongo DB */}
        {/* { newsData.map(ns => (
          <NewsCard className='homeNewsCard' key={ns._id} newsId = {ns._id} title={ns.title} image={ns.image} link={ns.url} datePublished={ns.publishedAt} summary = {ns.summary}/>
        ))} */}
      </section>
    </div>
  );
}

export default NewsPage;
