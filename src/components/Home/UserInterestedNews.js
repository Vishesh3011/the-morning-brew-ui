import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NewsData, getInterestedNews } from "../../Feature/newsSlice";
import NewsCard from "../NewsCard/NewsCard";

import "./NewsPage.css";
import { PropagateLoader } from "react-spinners";
import { fetchInterestedNews } from "../../apis/InterestedNews";
import NewsBox from "../NewsBox/NewsBox";
import NewsBoxWithOutSave from "../NewsBox/NewsBoxWithoutSave";
import { useNavigate } from "react-router-dom";

const UserInterestedNews = () => {
  const [newsData, setNews] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const { news, isLoading } = useSelector(NewsData);

  useEffect(() => {
    async function getInterestedNewsArticles() {
      console.log("user id ", user.userId);

      if (news.length === 0) {
        await dispatch(getInterestedNews(user.userId));
      }
      // const news = await fetchInterestedNews(user.userId)
      // console.log("here", news);
      // setNews(news);
    }

    if (user !== null) {
      if (user?.interests?.length > 0) {
        user?.userId && getInterestedNewsArticles();
      }

      if (user?.interests == null) {
        console.log("interest is zerpo");
        navigate("/news/world");
      }
    }
  }, [user]);

  return (
    <div className="home">
      <section className="news" id="home">
        {isLoading ? (
          <div className="loader">
            <PropagateLoader size="30" color="#b1aeae" />
          </div>
        ) : (
          news.map((ns) => (
            <NewsBoxWithOutSave
              className="homeNewsCard"
              key={ns.newsId}
              newsId={ns.newsId}
              title={ns.title}
              image_url={ns.image_url}
              summary={ns.summary}
              url={ns.url}
              publishedAt={ns.published_date}
            />
          ))
        )}
        {/* {newsData.map(ns => (
          <NewsBoxWithOutSave className='homeNewsCard' key={ns.newsId} newsId = {ns.newsId} title={ns.title} image_url={ns.image_url} summary={ns.summary} url={ns.url} publishedAt={ns.published_date}/>
        ))} */}
      </section>
    </div>
  );
};

export default UserInterestedNews;
