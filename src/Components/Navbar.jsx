import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import {
  Box,
  AppBar,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Badge,
} from "@mui/material";
import { useState } from "react";
import {
  DrawerAppBar,
  Search,
  SearchIconWrapper,
  StyledBadge,
  StyledInputBase,
} from "./NavBar-componets";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(true);

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const menuHandler = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <p>Dark Mode</p>
        <IconButton size="large">
          <ToggleOffIcon style={{ fontSize: "2rem" }} />
        </IconButton>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>What's new?</MenuItem>
      <MenuItem onClick={handleMenuClose}>Help</MenuItem>
      <MenuItem onClick={handleMenuClose}>Send Feedback</MenuItem>
      <MenuItem onClick={handleMenuClose}>Hint and Shortcuts</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" color="inherit">
          <PersonAddIcon />
        </IconButton>
        <p> INVITE TEAM MEMBER</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit">
          <NotificationsIcon />
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }} m="-0.5rem">
      <AppBar
        position="static"
        style={{
          backgroundColor: "transparent",
          color: "#71717a",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={menuHandler}
          >
            <MenuIcon />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="dfin"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Box display="flex" alignItems="center" marginRight="1rem">
              <PersonAddIcon style={{ fontSize: "1rem" }} />
              <Typography variant="caption" fontSize="0.8rem">
                INVITE TEAM MEMBER
              </Typography>
            </Box>
            <IconButton size="large" color="inherit">
              <NotificationsIcon />
            </IconButton>
            <IconButton
              size="small"
              edge="end"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Badge badgeContent={"new"} color="error">
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar sx={{ bgcolor: "#9c27b0" }}>FL</Avatar>
                </StyledBadge>
              </Badge>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <DrawerAppBar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
