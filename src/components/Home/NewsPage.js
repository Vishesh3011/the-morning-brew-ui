import React, { useEffect, useState } from 'react';

import './NewsPage.css';

import NewsCard from '../NewsCard/NewsCard';
import { useParams } from 'react-router-dom';
import { getNewsByCategory } from '../../apis/NewsCategory';

import SearchIcon from '@mui/icons-material/Search';

function NewsPage({ type, country, q }) {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const [reload, setReload] = useState(false);
  const category = useParams()
  useEffect(() => {
    async function newsArticles() {
      const request = await getNewsByCategory({ type, country, category: category.category, q:search });
      console.log(request.data);
      setNews(request.data.articles);
    }
    newsArticles();
  }, [category, reload]);

  const handleSearchBarChange = async (event) => {
    const q = event.target.value;
    console.log(q);
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
        {news.map((ns, index) => (
          // ns.urlToImage &&
          <NewsCard className='homeNewsCard' key={index} title={ns.title} description={ns.description} image={ns.image} link={ns.url} datePublished={ns.publishedAt} author={ns.author} source={ns.source.name} />
        ))}
      </section>
    </div>
  )
}

export default NewsPage