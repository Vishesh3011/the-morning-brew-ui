import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import FeedIcon from "@mui/icons-material/Feed";
import CategoryIcon from "@mui/icons-material/Category";
import InfoIcon from "@mui/icons-material/Info";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import LogoutIcon from "@mui/icons-material/Logout";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import logo from "../images/logo1.png";

import { SubBarData } from "./SubBarData";
import "./Sidebar.css";
import SubMenu from "./SubMenu";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Feature/userSlice";
import { empty_interested_news } from "../../Feature/newsSlice";
import Avatar from "react-avatar";
import Swal from "sweetalert2";

import SearchBar from "../../SearchBar/searchBar";

import "../../Feature/userSlice.css";

const drawerWidth = 300;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

function PersistentDrawerLeft({
  search,
  setSearch,
  ShowSearchedNews,
  setShowSearchedNews,
}) {
  let [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const [error, setError] = useState("");
  // const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  console.log("zzzzzzz", user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // swal({
    //   title: "Are you sure you want to logout?",
    //   text: "",
    //   dangerMode: true,
    // }).then(async (willLogout) => {
    //   if (willLogout) {
    //     try {
    //       await dispatch(logout());
    //       await dispatch(empty_interested_news());
    //       swal("Logged Out Successfully!", "", "success");
    //       navigate("/login");
    //     } catch (error) {
    //       setError(error.message);
    //       swal("Error Logging Out!", "", "error");
    //     }
    //   }
    // });

    Swal.fire({
      title: "Are you sure you want to logout?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, logout",
      cancelButtonText: "No, cancel",
      reverseButtons: true,
      customClass: {
        popup: "swal2-popup-custom",
        title: "swal2-title-custom",
        content: "swal2-content-custom",
        confirmButton: "swal2-confirm-button-custom",
        cancelButton: "swal2-cancel-button-custom",
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await dispatch(logout());
          await dispatch(empty_interested_news());
          Swal.fire({
            title: "Logged Out Successfully!",
            icon: "success",
          }).then(() => {
            navigate("/login");
          });
        } catch (error) {
          setError(error.message);
          Swal.fire({
            title: "Error Logging Out!",
            text: error.message,
            icon: "error",
          });
        }
      }
    });
  };

  const [subNav, setSubNav] = useState(false);

  const showSubNav = () => setSubNav(!subNav);
  useEffect(() => {
    if (window.innerWidth <= 850) {
      console.log("widht");
      setOpen(false);
    }
  }, [window.innerWidth <= 850]);

  // const [search, setSearch] = useState("");
  // const [ShowSearchedNews, setShowSearchedNews] = useState(false)

  return (
    <Box sx={{ display: "flex", fontFamily: "News Cycle" }} className="Sidebar">
      {/* <CssBaseline /> */}
      <AppBar position="fixed" open={open}>
        <Toolbar className="navbar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <div className="navbarLogo">
            <Link to="/">
              <img src={logo} alt="" className="navbarLogoImage" />
            </Link>
          </div>
          <SearchBar
            setSearch={setSearch}
            search={search}
            ShowSearchedNews={ShowSearchedNews}
            setShowSearchedNews={setShowSearchedNews}
          />
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,

          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#212121",
            color: "#EEEEEE",
          },
        }}
        variant="persistent"
        // anchor="left"
        open={open}
      >
        <div style={{ height: "7rem" }}>
          <DrawerHeader color="#B2B2B2">
            <div
              onClick
              className="navbarOptionsSmall navbarOptions sidebarHeader"
            >
              <Avatar
                name={
                  user === null || typeof user === "undefined"
                    ? "Guest"
                    : user.userName
                }
                round={true}
                size="65"
                className="userAvatar"
              />
              <p className="navbarOption">Hello, &nbsp; &nbsp;</p>
              <p className="navbarOption">
                {user === null || typeof user === "undefined"
                  ? "Guest"
                  : user.userName}
              </p>
            </div>
          </DrawerHeader>
        </div>

        <Divider color="#B2B2B2" />
        <List>
          {user && (
            <ListItem className="sideBarListItem">
              <Link to="/">
                <ListItemButton
                  sx={{
                    color: "#B2B2B2",
                    transition: "ease-out all 500ms",
                    "&:hover": { color: "#EEEEEE", cursor: "pointer" },
                  }}
                >
                  <ListItemIcon sx={{ color: "#B2B2B2" }}>
                    <AlignHorizontalLeftIcon />
                  </ListItemIcon>
                  <ListItemText>For you</ListItemText>
                </ListItemButton>
              </Link>
            </ListItem>
          )}
          <ListItem className="sideBarListItem">
            {user === null ? (
              <Link to="/login">
                <div>
                  <ListItemButton
                    sx={{
                      color: "#B2B2B2",
                      transition: "ease-out all 500ms",
                      "&:hover": { color: "#EEEEEE", cursor: "pointer" },
                    }}
                  >
                    <ListItemIcon sx={{ color: "#B2B2B2" }}>
                      <LoginIcon />
                    </ListItemIcon>
                    <ListItemText>Login</ListItemText>
                  </ListItemButton>
                </div>
              </Link>
            ) : (
              <div onClick={handleLogout}>
                <ListItemButton
                  sx={{
                    color: "#B2B2B2",
                    transition: "ease-out all 500ms",
                    "&:hover": { color: "#EEEEEE", cursor: "pointer" },
                  }}
                >
                  <ListItemIcon sx={{ color: "#B2B2B2" }}>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText>Logout</ListItemText>
                </ListItemButton>
              </div>
            )}
          </ListItem>
          {user && (
            <ListItem className="sideBarListItem">
              <Link to="/news/saved">
                <ListItemButton
                  sx={{
                    color: "#B2B2B2",
                    transition: "ease-out all 500ms",
                    "&:hover": { color: "#EEEEEE", cursor: "pointer" },
                  }}
                >
                  <ListItemIcon sx={{ color: "#B2B2B2" }}>
                    <FavoriteBorderIcon />
                  </ListItemIcon>
                  <ListItemText>Liked News</ListItemText>
                </ListItemButton>
              </Link>
            </ListItem>
          )}
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
        <List className="sideBarList">
          <ListItem className="sideBarListItem">
            <Link to="news/world">
              <ListItemButton
                sx={{
                  color: "#B2B2B2",
                  transition: "ease-out all 500ms",
                  "&:hover": { color: "#EEEEEE", cursor: "pointer" },
                }}
              >
                <ListItemIcon sx={{ color: "#B2B2B2" }}>
                  <FeedIcon />
                </ListItemIcon>
                <ListItemText>Latest</ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
          {/* <ListItem className="sideBarListItem">
            <Link to="/datedNews">
              <ListItemButton sx={{ color: '#B2B2B2', transition: 'ease-out all 500ms', '&:hover': { color: '#EEEEEE', cursor: 'pointer' } }}>
                <ListItemIcon sx={{ color: '#B2B2B2' }}>
                  <CalendarMonthIcon />
                </ListItemIcon>
                <ListItemText>Top News by Date</ListItemText>
              </ListItemButton>
            </Link>
          </ListItem> */}
          <ListItem className="sideBarListItem">
            <div className="toFlex" onClick={showSubNav}>
              <div>
                <ListItemButton
                  sx={{
                    color: "#B2B2B2",
                    transition: "ease-out all 500ms",
                    "&:hover": { color: "#EEEEEE", cursor: "pointer" },
                  }}
                >
                  <ListItemIcon sx={{ color: "#B2B2B2" }}>
                    <CategoryIcon />
                  </ListItemIcon>
                  <ListItemText>Categories</ListItemText>
                  <ListItemIcon sx={{ color: "#B2B2B2" }}>
                    {!subNav ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                  </ListItemIcon>
                </ListItemButton>
              </div>
              <div>
                {subNav &&
                  SubBarData.map((item, index) => {
                    return <SubMenu item={item} key={index} />;
                  })}
              </div>
            </div>
          </ListItem>
        </List>
        <Divider color="#B2B2B2" />
        <List className="sideBarList">
          {/* <ListItem className = "sideBarListItem">
            <Link to="/ContactUs">
            <ListItemButton sx={{ color: '#B2B2B2', transition: 'ease-out all 500ms', '&:hover': {color: '#EEEEEE', cursor: 'pointer'}}}>
                <ListItemIcon sx={{ color: '#B2B2B2' }}>
                  <ContactPageIcon />
                </ListItemIcon>
                <ListItemText>Contact Us</ListItemText>
              </ListItemButton>
            </Link>
          </ListItem> */}
          <ListItem className="sideBarListItem">
            <Link to="/about-us">
              <ListItemButton
                sx={{
                  color: "#B2B2B2",
                  transition: "ease-out all 500ms",
                  "&:hover": { color: "#EEEEEE", cursor: "pointer" },
                }}
              >
                <ListItemIcon sx={{ color: "#B2B2B2" }}>
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

export default PersistentDrawerLeft;
