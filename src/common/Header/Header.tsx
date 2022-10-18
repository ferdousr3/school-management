import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import data from "../../data/data";
import RouteLink from "./RouteLink";
import { Avatar, ListItemIcon, Menu, MenuItem, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { PaperProps } from "./PaperProps";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../config/firebase.config";
import { signOut } from "firebase/auth";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 280;

export default function DrawerAppBar(props: Props) {
  const [user] = useAuthState(auth);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const theme = useTheme();
  const handleLogOut = (): void => {
    signOut(auth);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          my: 2,
          // bgcolor: "palette.primary.main",
        }}
      >
        <img src={data.logoImage} alt="School" height="40px" width="40px" />
        <Typography variant="h6" sx={{ ml: 1 }}>
          {data.schoolDetails.shortName}
        </Typography>
      </Box>
      <Divider />
      <List>
        {data.navItems.slice(0, 3).map((item) => (
          <ListItem key={item?.text} disablePadding>
            <Box
              sx={{
                textAlign: "center",
                margin: "0 auto",
              }}
            >
              <RouteLink to={item.path}>{item.text}</RouteLink>
            </Box>
          </ListItem>
        ))}
        {data.navItems.slice(3, 4).map((item) => (
          <ListItem key={item?.text} disablePadding>
            <Box
              sx={{
                textAlign: "center",
                margin: "0 auto",
              }}
            >
              <RouteLink to={item.path}>{item.text}</RouteLink>
            </Box>
          </ListItem>
        ))}
      </List>

      {user ? (
        <Button variant="contained" color="secondary" onClick={handleLogOut}>
          Sign Out
        </Button>
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
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", alignItems: "center"}}>
      {/* // desktop navbar */}
      <AppBar
        component="nav"
        sx={{ bgcolor: theme.extraColor.transparent, boxShadow: "none"}}
      >
        <Container>
          <Toolbar
            sx={{
              py: 1,
              bgcolor: theme.palette.primary.main,
              borderRadius: 1.5,
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box component="div" sx={{ flexGrow: 1, display: { sm: "block" } }}>
              <Box
                component="div"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <img
                  src={data.logoImage}
                  alt="School"
                  height="60px"
                  width="60px"
                />
                <Box
                  component="div"
                  sx={{
                    ml: 1,
                    display: {
                      xs: "none",
                      sm: "block",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: "900",
                    }}
                  >
                    {data.schoolDetails.name}
                  </Typography>
                  <Typography sx={{ mt: -1, fontSize: ".875rem" }}>
                    {data.schoolDetails.address}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {data.navItems.slice(0, 3).map((item) => (
                <RouteLink key={item.text} to={item.path}>
                  {item.text}
                </RouteLink>
              ))}
              {user && <RouteLink to="/dashboard">Dashboard</RouteLink>}
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
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },

            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              // bgcolor: theme.palette.primary.main,
              color: theme.extraColor.white,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      
          
    </Box>
  );
}
