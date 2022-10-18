import Logout from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import Settings from "@mui/icons-material/Settings";
import {
  AppBar, Avatar, Box, Button,
  Container,
  Divider,
  Drawer,
  IconButton, ListItemIcon,
  Menu,
  MenuItem, Toolbar,
  Typography, useTheme
} from "@mui/material";
import { signOut } from "firebase/auth";
import * as React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../config/firebase.config";
import data from "../../data/data";
import DrawerMenu from "./DrawerMenu";
import HeaderTop from "./HeaderTop";
import { PaperProps } from "./PaperProps";
import RouteLink from "./RouteLink";
import { styles } from "./Styles/HeaderStyles";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function DrawerAppBar(props: Props) {
  const [user] = useAuthState(auth);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);
  const navigate = useNavigate();
  const theme = useTheme();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // open and close mobile drawer function
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogOut = (): void => {
    signOut(auth);
  };

  // const openToMail =
  //   window !== undefined
  //     ? () =>
  //         window().open(
  //           "mailto:email@example.com?subject=Subject&body=Body%20goes%20here"
  //         )
  //     : undefined;

  const drawerMenu = (
    <DrawerMenu
      handleDrawerToggle={handleDrawerToggle}
      handleLogOut={handleLogOut}
    />
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {/* // desktop navbar */}
        <AppBar
          component="nav"
          sx={{ bgcolor: theme.extraColor.white, boxShadow: "none" }}
        >
          <HeaderTop />

          <Container>
            <Toolbar sx={styles.toolbarStyle}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: "none" } }}
              >
                <MenuIcon />
              </IconButton>

              <Box
                component="div"
                sx={{ flexGrow: 1, display: { sm: "block" } }}
              >
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
                {data.navItems.slice(0, 4).map((item, index) => (
                  <RouteLink key={index} to={item.path}>
                    {item.text}
                  </RouteLink>
                ))}
                {user && <RouteLink to="/dashboard">Dashboard</RouteLink>}
              </Box>
              {/* user menu */}
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
        {/* //mobile navbar */}
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={styles.drawerMenuStyle}
          >
            {drawerMenu}
          </Drawer>
        </Box>
      </Box>
    </>
  );
}
