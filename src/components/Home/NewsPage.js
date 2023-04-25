import React, { useEffect, useState } from 'react';

import './NewsPage.css';
import './Loader.css'

import NewsCard from '../NewsCard/NewsCard';
import { useParams } from 'react-router-dom';
// import { getNewsByCategory } from '../../apis/NewsCategory';

import SearchIcon from '@mui/icons-material/Search';
import { getNewsByCategory } from '../../Feature/newsSlice';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { NewsData } from '../../Feature/newsSlice';
import { SyncLoader } from 'react-spinners';

function NewsPage({ type, country, q }) {
  const [newsData, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const [reload, setReload] = useState(false);
  
  const category = useParams()
  const dispatch = useDispatch();


  const { news, isLoading } = useSelector(NewsData);

  useEffect(() => {
    async function getNewsArticles() {
      dispatch(getNewsByCategory({ type, country, category: category.category, q: search }));
      console.log("here", news)
      setNews(news);
    }
    
     getNewsArticles();
  }, [category, reload, news]);

  const handleSearchBarChange = async (event) => {
    const q = event.target.value;
    setSearch(q);
  }

  return (
    <div className='home'>
      {/* <section className='appName'>
        <h1>The Morning Brew</h1>
      </section> */}
      <div className='navbarSearch'>
        <div className='navbarSearchDiv'>
          <input value={search} type='text' name='search' className='navbarSearchBar' onChange={handleSearchBarChange} />
        </div>
        <div>
          <SearchIcon className='navbarOptionsIcon' onClick={() => setReload(!reload)} />
        </div>
      </div>
      <section className='news' id="home">
        {isLoading ? 
        <div className='loader book'>
          <figure class="page"></figure>
          <figure class="page"></figure>
          <figure class="page"></figure>
        </div>
        // <div className='loader'>
        //   <SyncLoader color="#fffff"/>
        // </div> 
        :  news.map((ns, index) => (
          // ns.urlToImage &&
          <NewsCard className='homeNewsCard' key={index} title={ns.title} description={ns.description} image={ns.image} link={ns.url} datePublished={ns.publishedAt} author={ns.author} source={ns.source.name} />
        ))}
      </section>
    </div>
  )
}

export default NewsPage