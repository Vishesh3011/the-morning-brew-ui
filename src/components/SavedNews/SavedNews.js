import React, { useEffect, useState } from "react";

import { db } from "../../firebase";
import { useStateValue } from "../stateProvider";
import { useAuth } from "../Login/AuthContext";

import NewsCard from "../NewsCard/NewsCard";

import "./SavedNews.css";
import { fetchSavedNews } from "../../apis/SaveNewsForUser";
import { useSelector } from "react-redux";
import NewsBox from "../NewsBox/NewsBox";
import NewsBoxForSaved from "../NewsBox/NewsBoxForSaved";
import FavoriteIcon from "@mui/icons-material/Favorite";

function SavedNews() {
  const [news, setNews] = useState([]);

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const fetchNews = async () => {
      const savedNewsResponse = await fetchSavedNews(user.userId);
      console.log("zzzzzzzzzz", savedNewsResponse);
      setNews(savedNewsResponse);
    };
    fetchNews();
  }, []);

  return (
    <div className="home">
      <section className="news" id="home">
        {/* {news.map((ns) => (
          <NewsBoxForSaved
            className="homeNewsCard"
            setNews={setNews}
            key={ns.newsId}
            newsId={ns.newsId}
            title={ns.title}
            image_url={ns.image_url}
            summary={ns.summary}
            url={ns.url}
            publishedAt={ns.published_date}
          />
        ))} */}
        {news?.length > 0 ? (
          news.map((ns) => (
            <NewsBoxForSaved
              className="homeNewsCard"
              setNews={setNews}
              key={ns.newsId}
              newsId={ns.newsId}
              title={ns.title}
              image_url={ns.image_url}
              summary={ns.summary}
              url={ns.url}
              publishedAt={ns.published_date}
            />
          ))
        ) : (
          <div className="messageDisplay">
            <FavoriteIcon fontSize="large" />
            <div>No liked news found.</div>
          </div>
        )}
      </section>
    </div>
  );
}

export default SavedNews;
