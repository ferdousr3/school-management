import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useNavigate } from "react-router-dom";
import { Button, Menu, MenuItem } from "@mui/material";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../config/firebase.config";
import { signOut } from "firebase/auth";
import { PaperProps } from "./PaperProps";
import { BiUndo } from "react-icons/bi";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";

// type DashboardHeaderProps = {};

const DashboardHeader: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const navigate = useNavigate();
  const theme = useTheme();
  const [user] = useAuthState(auth);
  const handleClose = () => {
    setAnchorEl(null);
  };

  /**
   * logout method
   */
  const handleLogOut = (): void => {
    signOut(auth);
  };
  return (
    <>
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1 }}
      >
        <Button
          sx={{ color: theme.palette.secondary.main }}
          onClick={() => navigate("/")}
          startIcon={<BiUndo />}
        >
          Home
        </Button>
      </Typography>
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
                size="small"
                sx={{ ml: 2, bgColor: theme.palette.secondary.main }}
              >
                <NotificationsIcon
                  sx={{ color: theme.palette.secondary.main }}
                />
              </IconButton>
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2, bgColor: theme.palette.secondary.main }}
                aria-controls={menuOpen ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={menuOpen ? "true" : undefined}
              >
                <PersonIcon sx={{ color: theme.palette.secondary.main }} />
              </IconButton>
            </Box>
            {/* drop down menu */}
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
                <Typography
                  sx={{
                    color: theme.palette.primary.main,
                    fontSize: ".75rem",
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  {user?.displayName}
                </Typography>
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
          // sign out button
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("/login")}
          >
            Sign in
          </Button>
        )}
      </Box>
    </>
  );
};
export default DashboardHeader;
