import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import './NewsCard.css'

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function NewsCard({ title, description, image, link, datePublished, author, source }) {
    // const [{ savedNews }, dispatch] = useStateValue();
    // console.log(savedNews);
  
  function truncate(str, n){
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <a href = {link} target = '_blank' className='newsCardLink'>
      <div className='newsCard'>
          <img className='newsImage' src={image} alt=""/>
          <h2 className='newsTitle'>{title}</h2>
          <p className='newsDescription'>{truncate(description, 200)}</p>
          {/* {image ? <img className='newsImage' src={image} alt=""/> : ''} */}
          {author ? <h4 className='publishedBy'>Published by {author} on {moment(datePublished).format('LL')}</h4> : <h4 className='publishedBy'>Published on {moment(datePublished).format('LL')}</h4>}
          {source ? <h4 className="source">Source: {source}</h4> : ''}
          <div className='newsCardLower'>
            <p className='readMore'>Tap to Read more</p>
            <a href="javascript:void(0);" className='savedIcon'><BookmarkBorderIcon/></a>
          </div>
      </div>
    </a>
  )
}

export default NewsCard