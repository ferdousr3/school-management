import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Outlet } from "react-router-dom";

import {
  AppBar,
  Main,
  DrawerHeader,
  styles,
  Drawer,
} from "./Styles/DashboardLayoutStyle";
import DashboardHeader from "./DashboardHeader";
import DrawerProfileCard from "./DrawerProfileCard";
import DrawerItems from "./DrawerItems";

export default function DashboardLayout() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", fontFamily: `${theme.myFont} !important ` }}>
      <AppBar position="fixed" open={open} sx={styles.mainToolbar}>
        <Toolbar>
          {/* drawer open and close button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              mr: 2,
              color: theme.palette.secondary.main,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          {/* dashboard header component */}
          <DashboardHeader />
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="left" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon sx={{ color: theme.palette.secondary.main }} />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <DrawerProfileCard />
        <DrawerItems />
      </Drawer>
      {/* main drawer and page outlet */}
      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
}
