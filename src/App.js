import './App.css';

import { Routes, Route, useNavigate } from 'react-router-dom';

import SignUp from './components/Login/Signup';
import Login from './components/Login/Login';
import ResponsiveDrawer from './components/Sidebar/Sidebar';

import { AuthProvider, useAuth } from './components/Login/AuthContext';
import { useContext, useEffect, useRef, useState } from 'react';
import DatedNews from './components/DatedNews/DatedNews';
import NewsPage from './components/Home/NewsPage';
import AboutUs from './components/AboutUs/AboutUs';
import { getLocalStorage } from './util/LocalStorage';
import { useSelector } from 'react-redux';
import SavedNews from './components/SavedNews/SavedNews';
import SearchBar from './SearchBar/searchBar';
import SearchedNews from './components/SearchedNews/searchedNews';
import UserInterestedNews from './components/Home/UserInterestedNews';

function App() {
  const navigate = useNavigate()
  const user = useSelector(state => state.user.user)

  useEffect(() => {
    console.log(user)
    user !== null ? navigate("/") : navigate("/login")
  }, [])


  const [search, setSearch] = useState("");
  const [ShowSearchedNews, setShowSearchedNews] = useState(false)
  return (
      // <AuthProvider>
      <div>
        <ResponsiveDrawer setSearch= {setSearch} search = {search} ShowSearchedNews={ShowSearchedNews}  setShowSearchedNews={setShowSearchedNews} />
        {/* <SearchBar setSearch = {setSearch} search = {search} ShowSearchedNews={ShowSearchedNews}  setShowSearchedNews={setShowSearchedNews}/> */}
        <Routes>
          <Route path = "/" element = {<UserInterestedNews/>}/>
          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/signup" element = {<SignUp/>}/>
          <Route path = "/news/dated" element = {<DatedNews/>}/>
          <Route path = "/news/:category" element = {<NewsPage type = "top-headlines" country = "in"/>}/>
          <Route path = "/about-us" element = {<AboutUs/>}/>
          <Route path = "/news/saved" element = {<SavedNews/>}/>
          <Route path = "/news/search/:search" element = {<SearchedNews setSearch={setSearch}  search = {search}/>}/>
        </Routes>
      </div>
      // </AuthProvider>
  );
}

export default App;
