import {
  Box,
  Button,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../config/firebase.config";
import data from "../../data/data";
import LogoutIcon from "@mui/icons-material/Logout";

// type DrawerItemsProps = {

// };

const DrawerItems: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  /**
   * logout method
   */
  const handleLogOut = (): void => {
    signOut(auth);
  };

  return (
    <>
      <Box>
        <Typography
          sx={{
            ml: 3,
            fontSize: ".875rem",
            color: theme.palette.primary.main,
            fontWeight: 700,
          }}
        >
          Pages
        </Typography>
        <List component="nav" sx={{ overflow: "auto" }}>
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
        </List>
        <Divider />
        <Box sx={{ my: 3, ml: 3 }}>
          <Button
            sx={{ borderRadius: "4px !important" }}
            startIcon={<LogoutIcon />}
            variant="contained"
            color="secondary"
            onClick={handleLogOut}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default DrawerItems;
