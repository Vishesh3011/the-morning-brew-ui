import React, { useEffect, useState } from "react";
import {
  NewsContent,
  NewsDetailsContainer,
  NewsDetailsContent,
  NewsDetailsFooter,
  NewsDetailsHeader,
  NewsImage,
  NewsLikeIcon,
  NewsMid,
  NewsSmall,
  NewsTitle,
} from "./NewsDetailsStyles";
import { useParams } from "react-router-dom";
import { fetchNewsByID } from "../../apis/NewsClient";
import { NewsBoxHeader } from "../NewsBox/NewsBoxStyles";
import {
  checkIfNewsSaved,
  saveNews,
  unSaveNews,
} from "../../apis/SaveNewsForUser";
import { useSelector } from "react-redux";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const NewsDetails = () => {
  const [news, setNews] = useState();
  const [saved, setSaved] = useState(false);
  const [saveCheck, setSaveCheck] = useState(false);

  const user = useSelector((state) => state.user.user);

  const { newsId } = useParams();

  useEffect(() => {
    async function getNewsByID() {
      const response = await fetchNewsByID(newsId);
      console.log("news by id", response);
      setNews(response);
    }

    async function checkForNewsSaved() {
      const response = await checkIfNewsSaved(user.userId, newsId);
      setSaved(response);
    }

    getNewsByID();
    checkForNewsSaved();
  }, [newsId]);

  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  //   const dateTimeFormat = new Intl.DateTimeFormat('en-IN', options);

  const handleSaveNews = async () => {
    const responseSave = await saveNews(user.userId, newsId);
    console.log(responseSave);
    setSaved(true);
  };

  const handleUnSaveNews = async () => {
    const responseSave = await unSaveNews(user.userId, newsId);
    console.log(responseSave);
    setSaved(false);
  };

  //   const formattedDateTime = dateTimeFormat.format(new Date(news.published_date));
  return (
    <NewsDetailsContainer>
      {news && (
        <>
          <NewsDetailsHeader>
            <NewsTitle>{news.title}</NewsTitle>
          </NewsDetailsHeader>
          <NewsMid>
            {news.published_date && (
              <NewsSmall>
                Published on{" "}
                {news.published_date.toLocaleString("en-IN", options)}
              </NewsSmall>
            )}
            {!saved ? (
              <NewsLikeIcon onClick={() => handleSaveNews({ newsId })}>
                <FavoriteBorderIcon fontSize="large" />
              </NewsLikeIcon>
            ) : (
              <NewsLikeIcon onClick={() => handleUnSaveNews({ newsId })}>
                <FavoriteIcon fontSize="large" />
              </NewsLikeIcon>
            )}
          </NewsMid>
          <NewsDetailsContent>
            <NewsImage>
              <img src={news.image_url} />
            </NewsImage>
            <NewsContent>{news.summary}</NewsContent>
          </NewsDetailsContent>
          <NewsDetailsFooter>
            <a href={news.url} target="_blank">
              Tap to Read more
            </a>
          </NewsDetailsFooter>
        </>
      )}
    </NewsDetailsContainer>
  );
};

export default NewsDetails;
