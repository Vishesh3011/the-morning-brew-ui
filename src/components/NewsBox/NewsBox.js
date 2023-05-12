import React, { useState } from "react";
import {
  NewsBoxContainer,
  NewsBoxContent,
  NewsBoxFooter,
  NewsBoxHeader,
  NewsBoxImage,
  NewsBoxTitle,
  NewsDate,
  NewsLikeIcon,
  NewsTitleDescHeader,
} from "./NewsBoxStyles";
import { saveNews, unSaveNews } from "../../apis/SaveNewsForUser";
import { addInterests } from "../../apis/Interests";
import { useSelector } from "react-redux";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NewsBox = ({ newsId, title, summary, image_url, url, publishedAt }) => {
  const [saved, setSaved] = useState(false);

  const user = useSelector((state) => state.user.user);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const handleSaveNews = async () => {
    const responseSave = await saveNews(user.userId, newsId);
    console.log(responseSave);
    const responseInterest = await addInterests(user.userId, title);
    console.log(responseInterest);
    setSaved(true);
  };

  const handleUnSaveNews = async () => {
    console.log(newsId, title, user.userId);
    const responseSave = await unSaveNews(user.userId, newsId);
    console.log(responseSave);
    setSaved(false);
  };

  const handleInterests = async () => {
    console.log(newsId, title, user.userId);
    const responseInterest = await addInterests(user.userId, title);
    console.log(responseInterest);
  };

  return (
    <NewsBoxContainer>
      <Link
        to={`/news/content/${newsId}`}
        onClick={(event) => {
          handleInterests({ newsId, title });
        }}
      >
        <NewsBoxHeader>
          <NewsTitleDescHeader>
            <NewsBoxTitle>{truncate(title, 100)}</NewsBoxTitle>
            <NewsBoxContent>{truncate(summary, 200)}</NewsBoxContent>
          </NewsTitleDescHeader>
          <NewsBoxImage>
            <img src={image_url} />
          </NewsBoxImage>
        </NewsBoxHeader>
      </Link>

      <NewsBoxFooter>
        {publishedAt && <NewsDate>Published on {publishedAt}</NewsDate>}
        {!saved ? (
          <NewsLikeIcon onClick={() => handleSaveNews({ newsId, title })}>
            <FavoriteBorderIcon />
          </NewsLikeIcon>
        ) : (
          <NewsLikeIcon onClick={() => handleSaveNews({ newsId, title })}>
            <FavoriteIcon />
          </NewsLikeIcon>
        )}
      </NewsBoxFooter>
    </NewsBoxContainer>
  );
};

export default NewsBox;
