import React, { useState } from 'react'
import { NewsBoxContainer, NewsBoxContent, NewsBoxFooter, NewsBoxHeader, NewsBoxImage, NewsBoxTitle, NewsDate, NewsLikeIcon, NewsTitleDescHeader } from './NewsBoxStyles'
import { saveNews, unSaveNews } from '../../apis/SaveNewsForUser'
import { addInterests } from '../../apis/Interests'
import { useSelector } from 'react-redux'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


const NewsBoxWithOutSave = ({ newsId, title, summary, image_url, url, publishedAt }) => {
  const user = useSelector(state => state.user.user)

  function truncate(str, n){
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

  const handleInterests = async () => {
    console.log(newsId, title, user.userId)
     const responseInterest = await addInterests(user.userId, title)
    console.log(responseInterest)
  }

  const options = { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' };

  const dateTimeFormat = new Intl.DateTimeFormat('en-IN', options);

  return (
    <a target = "_blank" href = {url} onClick={() => handleInterests({newsId, title})}>
      <NewsBoxContainer>
        <NewsBoxHeader>
            <NewsTitleDescHeader>
                <NewsBoxTitle>{truncate(title, 100)}</NewsBoxTitle>
                <NewsBoxContent>{truncate(summary, 200)}</NewsBoxContent>
            </NewsTitleDescHeader>
            <NewsBoxImage><img src={image_url}/></NewsBoxImage>
        </NewsBoxHeader>
        <NewsBoxFooter>
            {publishedAt && <NewsDate>Published on {dateTimeFormat.format(new Date(publishedAt))}</NewsDate>}
        </NewsBoxFooter>
      </NewsBoxContainer>
    </a>
  )
}

export default NewsBoxWithOutSave