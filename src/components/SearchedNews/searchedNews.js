import { useEffect, useState } from "react";
import { fetchNewsBySearch } from "../../apis/NewsClient";

import './searchedNews.css'
import NewsCard from "../NewsCard/NewsCard";
import { useParams } from "react-router-dom";
import NewsBox from "../NewsBox/NewsBox";

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
          <NewsBox className='homeNewsCard' key={ns.newsId} newsId = {ns.newsId} title={ns.title} image_url={ns.image_url} summary={ns.summary} url={ns.url} publishedAt={ns.published_date}/>
        ))}
      </section>
    </div>
  )
}

export default SearchedNews