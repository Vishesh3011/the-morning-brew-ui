import { useEffect, useState } from "react";
import { fetchNewsBySearch } from "../../apis/NewsClient";

import './searchedNews.css'
import NewsCard from "../NewsCard/NewsCard";
import { useParams } from "react-router-dom";

function SearchedNews({ search, setSearch }) {
  const [news, setNews] = useState([]);
  const { search: querySearch } = useParams();
  console.log("seacrh terms", search)

  useEffect(() => {
    const fetchSearchedNews = async () => {
      const searchedNewsResponse = await fetchNewsBySearch(querySearch)
      console.log("zzzzzzzzzz", searchedNewsResponse)
      setNews(searchedNewsResponse)
      setSearch("")
    }
    fetchSearchedNews()

  }, [querySearch])

  return (
    <div className='home'>
      <section className='news' id="home">
        {news.map(ns => (
          <NewsCard className='homeNewsCard' key={ns.newsId} title={ns.title} image={ns.image} link={ns.url} />
        ))}
      </section>
    </div>
  )
}

export default SearchedNews