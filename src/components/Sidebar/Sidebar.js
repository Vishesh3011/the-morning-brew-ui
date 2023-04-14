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

import logo from '../images/logo3.png';

import { SubBarData } from './SubBarData';
import './Sidebar.css';
import SubMenu from './SubMenu';
import Avatar from 'react-avatar';
import { getNewsBySearch } from '../../apis/NewsCategory';
import NewsPage from '../Home/NewsPage';

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
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
           
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#212121',
            color: "#EEEEEE",
          },
          
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader color='#B2B2B2'>
          <Link to={!currentUser && '/login'}>
            <div onClick={handleLogout} className='navbarOptionsSmall navbarOptions'>
              <Avatar name={`${currentUser ? currentUser.email.substr(0, currentUser.email.indexOf('@')) : 'Guest'}`} round={true} size="65" className='userAvatar'/>
              <p className='navbarOption'>Hello, &nbsp;</p>
              <p className='navbarOption'>
                {currentUser ? currentUser.email.substr(0, currentUser.email.indexOf('@')) : 'Guest'}
              </p>
            </div>
          </Link>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon sx={{ color: '#EEEEEE' }} /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider color="#B2B2B2" />
        <List>
          <ListItem className = "sideBarListItem">
            <Link to="/">
            <ListItemButton sx={{ color: '#B2B2B2', transition: 'ease-out all 500ms', '&:hover': {color: '#EEEEEE', cursor: 'pointer'}}}>
                <ListItemIcon sx={{ color: '#B2B2B2' }}>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem className = "sideBarListItem">
            <Link to={!currentUser && '/login'}>
              <div onClick={handleLogout}>
              <ListItemButton sx={{ color: '#B2B2B2', transition: 'ease-out all 500ms', '&:hover': {color: '#EEEEEE', cursor: 'pointer'}}}>
                  <ListItemIcon sx={{ color: '#B2B2B2' }}>
                    <LoginIcon />
                  </ListItemIcon>
                  <ListItemText>{currentUser ? 'Log out' : 'Login'}</ListItemText>
                </ListItemButton>
              </div>
            </Link>
          </ListItem>
          <ListItem className = "sideBarListItem">
            <Link to="/SavedNews">
              <ListItemButton sx={{ color: '#B2B2B2', transition: 'ease-out all 500ms', '&:hover': {color: '#EEEEEE', cursor: 'pointer'}}}>
                <ListItemIcon sx={{ color: '#B2B2B2' }}>
                  <BookmarkBorderIcon />
                </ListItemIcon>
                <ListItemText>Saved News</ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
          {/* <ListItem>
            <Link to = "/Help">
              <ListItemButton>
                <ListItemIcon sx={{color: '#B2B2B2'}}>
                  <HelpOutlineIcon/>
                </ListItemIcon>
                <ListItemText>Help</ListItemText>
              </ListItemButton>
            </Link>
          </ListItem> */}
        </List>
        <Divider color="#B2B2B2" />
        <List className = "sideBarList" >
          <ListItem className = "sideBarListItem">
            <Link to="news/general">
              <ListItemButton sx={{ color: '#B2B2B2', transition: 'ease-out all 500ms', '&:hover': {color: '#EEEEEE', cursor: 'pointer'}}}>
                <ListItemIcon sx={{ color: '#B2B2B2' }}>
                  <FeedIcon />
                </ListItemIcon>
                <ListItemText>Latest</ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem className = "sideBarListItem">
            <Link to="/datedNews">
              <ListItemButton sx={{ color: '#B2B2B2', transition: 'ease-out all 500ms', '&:hover': {color: '#EEEEEE', cursor: 'pointer'}}}>
                <ListItemIcon sx={{ color: '#B2B2B2' }}>
                  <CalendarMonthIcon />
                </ListItemIcon>
                <ListItemText>Top News by Date</ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem className = "sideBarListItem">
            <div className="toFlex" onClick={showSubNav}>
              <div>
              <ListItemButton sx={{ color: '#B2B2B2', transition: 'ease-out all 500ms', '&:hover': {color: '#EEEEEE', cursor: 'pointer'}}}>
                  <ListItemIcon sx={{ color: '#B2B2B2' }}>
                    <CategoryIcon />
                  </ListItemIcon>
                  <ListItemText>
                    Categories
                  </ListItemText>
                  <ListItemIcon sx={{ color: '#B2B2B2' }}>{!subNav ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}</ListItemIcon>
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
        <Divider color="#B2B2B2" />
        <List className = "sideBarList">
          <ListItem className = "sideBarListItem">
            <Link to="/ContactUs">
            <ListItemButton sx={{ color: '#B2B2B2', transition: 'ease-out all 500ms', '&:hover': {color: '#EEEEEE', cursor: 'pointer'}}}>
                <ListItemIcon sx={{ color: '#B2B2B2' }}>
                  <ContactPageIcon />
                </ListItemIcon>
                <ListItemText>Contact Us</ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem className = "sideBarListItem">
            <Link to="AboutUs">
            <ListItemButton sx={{ color: '#B2B2B2', transition: 'ease-out all 500ms', '&:hover': {color: '#EEEEEE', cursor: 'pointer'}}}>
                <ListItemIcon sx={{ color: '#B2B2B2' }}>
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