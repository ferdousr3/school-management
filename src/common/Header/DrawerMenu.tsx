import {
  Avatar,
  Box,
  Chip,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
// import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../config/firebase.config";
import data from "../../data/data";
import RouteLink from "./RouteLink";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

type DrawerMenuProps = {
  handleDrawerToggle: () => void;
  handleLogOut: () => void;
};

const DrawerMenu: React.FC<DrawerMenuProps> = ({
  handleDrawerToggle,
  handleLogOut,
}) => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  return (
    <>
      <Box onClick={handleDrawerToggle}>
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            my: 2,
            bgcolor: "palette.primary.main",
            pl: 4,
          }}
        >
          <img src={data.logoImage} alt="School" height="40px" width="40px" />
          <Typography variant="h6" sx={{ ml: 1 }}>
            {data.schoolDetails.shortName}
          </Typography>
        </Box>

        <Divider />
        <List sx={{ pl: 2 }}>
          {data.navItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <Box sx={{ pb: 1 }}>
                <RouteLink to={item.path}>{item.text}</RouteLink>
              </Box>
            </ListItem>
          ))}

          {user && (
            <ListItem disablePadding>
              <Box sx={{ pb: 1 }}>
                <RouteLink to="/dashboard">Dashboard</RouteLink>
              </Box>
            </ListItem>
          )}
        </List>
        <Divider />
        <Box sx={{ pl: 2, pt: 1 }}>
          {user ? (
            <>
              <Box sx={{ pl: 2, pb: 1 }}>
                <Chip
                  color="secondary"
                  avatar={<Avatar> {user?.displayName?.slice(0, 1)}</Avatar>}
                  label={user?.displayName}
                />
              </Box>

              <MenuItem sx={{ py: 0, my: "-12px", fontWeight: 700 }}>
                <ListItemIcon>
                  <Settings fontSize="small" color="secondary" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem
                onClick={handleLogOut}
                sx={{
                  py: 0,
                  my: "-12px",
                  fontWeight: 700,
                }}
              >
                <ListItemIcon>
                  <Logout fontSize="small" color="secondary" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem
                onClick={() => navigate("/login")}
                sx={{
                  py: 0,
                  my: "-12px",
                  fontWeight: 700,
                }}
              >
                <ListItemIcon>
                  <LoginIcon fontSize="small" color="secondary" />
                </ListItemIcon>
                Login
              </MenuItem>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};
export default DrawerMenu;
