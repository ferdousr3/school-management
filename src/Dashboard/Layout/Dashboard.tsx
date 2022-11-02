import * as React from "react";
import {
  useTheme,
  Button,
  Toolbar,
  Box,
  List,
  Container,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Outlet, useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import Menu from "@mui/material/Menu/Menu";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { AppBar, Drawer, styles } from "./Styles/DashboardStyles";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import auth from "../../config/firebase.config";
import RouteLink from "../../common/Header/RouteLink";
import { PaperProps } from "./PaperProps";
import data from "../../data/data";
import Copyright from "./Copyright";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";


// const mdTheme = createTheme();

function DashboardContent() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const theme = useTheme();
  const handleClose = () => {
    setAnchorEl(null);
  };

  /**
   * open drawer state
   */
  const [open, setOpen] = React.useState(false);
  /**
   * open drawer function
   */
  const toggleDrawer = () => {
    setOpen(!open);
  };

  /**
   * logout method
   */
  const handleLogOut = (): void => {
    signOut(auth);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            <Button
              sx={{ color: theme.extraColor.white }}
              onClick={() => navigate("/")}
            >
              Home
            </Button>
          </Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {user && <RouteLink to="">{user?.displayName}</RouteLink>}
          </Box>
          <Box sx={{ display: { md: "block" }, ml: 2 }}>
            {user ? (
              <>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={menuOpen ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={menuOpen ? "true" : undefined}
                  >
                    <Avatar
                      sx={{
                        width: 32,
                        height: 32,
                        textTransform: "uppercase",
                      }}
                    >
                      {user?.displayName?.slice(0, 1)}
                    </Avatar>
                  </IconButton>
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={menuOpen}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={PaperProps}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem>
                    <Avatar /> {user?.displayName}
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={handleLogOut}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate("/login")}
              >
                Sign in
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar sx={styles.toolbar}>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        {/* <Divider /> */}
        <List component="nav" sx={{ scrollBehavior: "auto" }}>
          {data.dashboard.map((item) => (
            <ListItemButton
              key={item.id}
              onClick={() => navigate(`${item.path}`)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                sx={{
                  textTransform: "capitalize",
                  color: theme.extraColor.linkBlack,
                  fontSize: "2rem",
                  fontWeight: " 900 !important",
                }}
                primary={item.text}
              />
            </ListItemButton>
          ))}
          <Divider sx={{ my: 1 }} />
          {/* {secondaryListItems} */}
        </List>
      </Drawer>
      <Box component="main" sx={styles.main}>
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Outlet />
        </Container>
        <Copyright />
      </Box>
    </Box>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
