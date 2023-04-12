import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import SecondNavbar from './components/SecondNavbar/SecondNavbar';
import SignUp from './components/Login/Signup';
import Login from './components/Login/Login';
import SavedNews from './components/SavedNews/SavedNews';
import ResponsiveDrawer from './components/Sidebar/Sidebar';

// import Profile from './components/Profile/Profile';

import requests from './components/requests';

import { AuthProvider, useAuth } from './components/Login/AuthContext';
import { useEffect } from 'react';

const routes = [
  { path: "/", category: requests.general1 },
  { path: "/sports", category: requests.sports },
  { path: "/general", category: requests.general2 },
  { path: "/business", category: requests.business },
  { path: "/entertainment", category: requests.entertainment },
  { path: "/science", category: requests.science },
  { path: "/lifestyle", category: requests.lifestyle },
  { path: "/india", category: requests.india },
  { path: "/world", category: requests.world },
  { path: "/health", category: requests.health },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  // { path: "/savedNews", element: <SavedNews/> },
];


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
          {routes.map(({ path, category, element }) => (
            <Route key={path} path={path} element={element || <Home category={category} />} />
          ))}
        </Routes>
      </div>
      </AuthProvider>
  );
}

export default App;
