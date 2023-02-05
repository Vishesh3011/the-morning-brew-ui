import React, { useState } from 'react';

import {Link, useNavigate} from 'react-router-dom';

import './Navbar.css';
import { useAuth } from '../Login/AuthContext';

import logo from '../images/logo1.png';

import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
// import TableRowsIcon from '@mui/icons-material/TableRows';

function Navbar() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError('');
    try {
      if(currentUser){
        await logout();
        navigate('/');
      }
    }catch{
        setError('Failed to log out');
    }
}

  return (
    <div className='navbar'>
      <div className='navbarLogo'>
        <Link to = "/">
          <img src = {logo} alt = "" className='navbarLogoImage'/>
        </Link>
      </div>
      <div className='navbarSearch'>
        <div className='navbarSearchDiv'>
          <input type='text' name = 'search' className='navbarSearchBar'/>
        </div>
        <div>
          <SearchIcon className='navbarOptionsIcon'/>
        </div>
      </div>
      <Link to = {!currentUser && '/login'}>
        <div onClick={handleLogout} className='navbarOptionsSmall navbarOptions'>
          <img alt ="" className='navbarUserIcon'/>
            <div className='navbarOpt'>
              <small className='navbarOption1'>Hello,</small>
              <p className='navbarOption2'>
                {currentUser ? currentUser.email.substr(0, currentUser.email.indexOf('@')) : 'Guest'}
              </p>
            </div>
        </div>
      </Link>
      <Link to = {!currentUser && '/login'}>
        <div onClick={handleLogout} className='navbarOptions'>
            <LoginIcon className='navbarOptionsIcon'/>
            <p className='navbarOption'>{currentUser ? 'Log out' : 'Login'}</p>
        </div>
      </Link>
      <Link to = '/savedNews'>
        <div className='navbarOptions'>
            <BookmarkBorderIcon className='navbarOptionsIcon'/>
            <div className='navbarOpt'>
              <small className='navbarOption1'>Saved</small>
              <p className='navbarOption2'>News</p>
            </div>
        </div>
      </Link>
      {!currentUser ? 
      <>
        <Link to = '/help'>
          <div className='navbarOptions'>
              <HelpOutlineIcon className='navbarOptionsIcon'/>
              <p className='navbarOption'>Help</p>
          </div>
        </Link>
      </> :
      ''}
    </div>
  )
}

export default Navbar