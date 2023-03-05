import React, { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from '../Login/AuthContext';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LoginIcon from '@mui/icons-material/Login';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HomeIcon from '@mui/icons-material/Home';
import FeedIcon from '@mui/icons-material/Feed';
import CategoryIcon from '@mui/icons-material/Category';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import logo from '../images/logo1.png';

import { SubBarData } from './SubBarData';
import './Sidebar.css';
import SubMenu from './SubMenu';

const drawerWidth = 300;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

function PersistentDrawerLeft() {
  const theme = useTheme();

  let [open, setOpen] = React.useState(true);

  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError('');
    try {
      if (currentUser) {
        await logout();
        navigate('/');
      }
    } catch {
      setError('Failed to log out');
    }
  }
  const [subNav, setSubNav] = useState(false);

  const showSubNav = () => setSubNav(!subNav);
  useEffect(() => {
    if(window.innerWidth <= 850){
      console.log("widht");
      setOpen(false);
    }
  },[window.innerWidth <= 850])
  return (
    <Box sx={{ display: 'flex' }} className="Sidebar">
      {/* <CssBaseline /> */}
      <AppBar position="fixed" open={open}>
        <Toolbar className="navbar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <div className='navbarLogo'>
            <Link to="/">
              <img src={logo} alt="" className='navbarLogoImage' />
            </Link>
          </div>
          <div className='navbarSearch'>
            <div className='navbarSearchDiv'>
              <input type='text' name='search' className='navbarSearchBar' />
            </div>
            <div>
              <SearchIcon className='navbarOptionsIcon' />
            </div>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
           
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#302b31',
            color: '#d5cdc4',
          },
          
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader color='#d5cdc4'>
          <Link to={!currentUser && '/login'}>
            <div onClick={handleLogout} className='navbarOptionsSmall navbarOptions'>
              {/* <div className='navbarOptionsSmall navbarOptions'> */}
              <img alt="" className='navbarUserIcon' />
              <p className='navbarOption'>Hello, &nbsp;</p>
              <p className='navbarOption'>
                {currentUser ? currentUser.email.substr(0, currentUser.email.indexOf('@')) : 'Guest'}
              </p>
            </div>
          </Link>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon sx={{ color: '#d5cdc4' }} /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider color="#d5cdc4" />
        <List>
          <ListItem className = "sideBarListItem">
            <Link to="/">
              <ListItemButton>
                <ListItemIcon sx={{ color: '#d5cdc4' }}>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem className = "sideBarListItem">
            <Link to={!currentUser && '/login'}>
              <div onClick={handleLogout}>
                <ListItemButton>
                  <ListItemIcon sx={{ color: '#d5cdc4' }}>
                    <LoginIcon />
                  </ListItemIcon>
                  <ListItemText>{currentUser ? 'Log out' : 'Login'}</ListItemText>
                </ListItemButton>
              </div>
            </Link>
          </ListItem>
          <ListItem className = "sideBarListItem">
            <Link to="/SavedNews">
              <ListItemButton>
                <ListItemIcon sx={{ color: '#d5cdc4' }}>
                  <BookmarkBorderIcon />
                </ListItemIcon>
                <ListItemText>Saved News</ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
          {/* <ListItem>
            <Link to = "/Help">
              <ListItemButton>
                <ListItemIcon sx={{color: '#d5cdc4'}}>
                  <HelpOutlineIcon/>
                </ListItemIcon>
                <ListItemText>Help</ListItemText>
              </ListItemButton>
            </Link>
          </ListItem> */}
        </List>
        <Divider color="#d5cdc4" />
        <List className = "sideBarList" >
          <ListItem className = "sideBarListItem">
            <Link to="/general">
              <ListItemButton>
                <ListItemIcon sx={{ color: '#d5cdc4' }}>
                  <FeedIcon />
                </ListItemIcon>
                <ListItemText>Latest</ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem className = "sideBarListItem">
            <Link to="/DatedNews">
              <ListItemButton>
                <ListItemIcon sx={{ color: '#d5cdc4' }}>
                  <CalendarMonthIcon />
                </ListItemIcon>
                <ListItemText>Top News by Date</ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem className = "sideBarListItem">
            <div className="toFlex" onClick={showSubNav}>
              <div>
                <ListItemButton>
                  <ListItemIcon sx={{ color: '#d5cdc4' }}>
                    <CategoryIcon />
                  </ListItemIcon>
                  <ListItemText>
                    Categories
                  </ListItemText>
                  <ListItemIcon sx={{ color: '#d5cdc4' }}>{!subNav ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}</ListItemIcon>
                </ListItemButton>
              </div>
              <div>
                {subNav && SubBarData.map((item, index) => {
                  return <SubMenu item={item} key={index} />
                })}
              </div>
            </div>
          </ListItem>
        </List>
        <Divider color="#d5cdc4" />
        <List className = "sideBarList">
          <ListItem className = "sideBarListItem">
            <Link to="/ContactUs">
              <ListItemButton>
                <ListItemIcon sx={{ color: '#d5cdc4' }}>
                  <ContactPageIcon />
                </ListItemIcon>
                <ListItemText>Contact Us</ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem className = "sideBarListItem">
            <Link to="AboutUs">
              <ListItemButton>
                <ListItemIcon sx={{ color: '#d5cdc4' }}>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText>About Our Team</ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

export default PersistentDrawerLeft