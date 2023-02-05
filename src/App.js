import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

import { AuthProvider } from './components/Login/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          {/* <Navbar/> */}
          <ResponsiveDrawer/>
          <Routes>
              <Route path = "/" element = {<><Home category = {requests.general1}/></>}></Route>
              <Route path = "/general" element = {<><Home category = {requests.general2}/></>}></Route>
              <Route path = "/sports" element = {<><Home  category={requests.sports}/></>}></Route>
              <Route path = "/business" element = {<><Home category = {requests.business}/></>}></Route>
              <Route path = "/entertainment" element = {<><Home  category={requests.entertainment}/></>}></Route>
              <Route path = "/science" element = {<><Home category = {requests.science}/></>}></Route>
              <Route path = "/lifestyle" element = {<><Home  category={requests.lifestyle}/></>}></Route>
              <Route path = "/india" element = {<><Home  category={requests.india}/></>}></Route>
              <Route path = "/world" element = {<><Home  category={requests.world}/></>}></Route>
              <Route path = "/health" element = {<><Home  category={requests.health}/></>}></Route>
              
              <Route path = '/login' element={<><Login/></>}></Route>
              <Route path = '/signup' element={<><SignUp/></>}></Route>

              {/* <Route path = '/savedNews' element={<><SavedNews/></>}></Route> */}
          </Routes>
          {/* <Footer/> */}
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
