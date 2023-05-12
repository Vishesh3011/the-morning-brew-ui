import React, { useEffect, useRef, useState } from "react";

import "./searchBar.css";

import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { addInterests } from "../apis/Interests";
import { useNavigate } from "react-router-dom";

const SearchBar = ({
  setSearch,
  ShowSearchedNews,
  search,
  setShowSearchedNews,
}) => {
  // const searchBarRef = useRef();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);

  // const handleSearchChange = (event) => {
  //     const q = event.target.value;
  //     setSearch(q);
  // }
  const handleSearchClick = async () => {
    // console.log("ddddddddddd", user.userId, searchBarRef.current.value)
    let responseInterest;
    if (user !== null) {
      responseInterest = await addInterests(user.userId, search);
    }

    navigate(`/news/search/${search}`);
    // console.log(responseInterest)
    // setSearch("")
    // setSearch(searchBarRef.current.value)
    setShowSearchedNews(!ShowSearchedNews);
  };

  return (
    <div className="navbarSearch">
      <div className="navbarSearchDiv">
        <input
          placeholder="Search for News, topics, keywords, etc..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="search"
          className="navbarSearchBar"
        />
      </div>
      <div>
        <SearchIcon className="navbarOptionsIcon" onClick={handleSearchClick} />
      </div>
    </div>
  );
};

export default SearchBar;
