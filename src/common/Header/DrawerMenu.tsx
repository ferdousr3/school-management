import {
  Box,
  Button,
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
  // const handleLogOut = (): void => {
  //   signOut(auth);
  // };

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
          {data.navItems.slice(0, 3).map((item, index) => (
            <ListItem key={index} disablePadding>
              <Box sx={{ pb: 1 }}>
                <RouteLink to={item.path}>{item.text}</RouteLink>
              </Box>
            </ListItem>
          ))}
          {data.navItems.slice(3, 4).map((item, index) => (
            <ListItem key={index} disablePadding>
              <Box sx={{ pb: 1 }}>
                <RouteLink to={item.path}>{item.text}</RouteLink>
              </Box>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box sx={{ pl: 4, pt: 2 }}>
          {user ? (
            <Button
              variant="contained"
              color="secondary"
              onClick={handleLogOut}
            >
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
      </Box>
    </>
  );
};
export default DrawerMenu;
