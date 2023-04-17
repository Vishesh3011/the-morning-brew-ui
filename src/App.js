import './App.css';

import { Routes, Route, useNavigate } from 'react-router-dom';

import SignUp from './components/Login/Signup';
import Login from './components/Login/Login';
import ResponsiveDrawer from './components/Sidebar/Sidebar';

import { AuthProvider, useAuth } from './components/Login/AuthContext';
import { useContext, useEffect, useRef } from 'react';
import DatedNews from './components/DatedNews/DatedNews';
import NewsPage from './components/Home/NewsPage';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  const context = useAuth();
  const navigate = useNavigate()
  

  useEffect(() => {
    if(context == undefined ) {
      console.log(context,"context");
      navigate("/login")
    }

    // requireAuth()
    // if (!currentUser) {
    //   // Redirect to the login route
    //   // return <Router><Navigate to="/login" /></Router>;
    // }

  }, [])

  

  {/* {!currentUser } */}
  return (
      <AuthProvider>
      <div>
        <ResponsiveDrawer />
        <Routes>
          <Route path = "/" element = {<NewsPage type = "top-headlines" country = "in"/>}/>
          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/signup" element = {<SignUp/>}/>
          <Route path = "/datedNews" element = {<DatedNews/>}/>
          <Route path = "/news/:category" element = {<NewsPage type = "top-headlines" country = "in"/>}/>
          <Route path = "/aboutUs" element = {<AboutUs/>}/>
          {/* <Route path = "" */}
        </Routes>
      </div>
      </AuthProvider>
  );
}

export default App;
