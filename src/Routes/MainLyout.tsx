import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <Box
        component="main"
        sx={{ mt: { xs: "6rem",sm:'3rem', md: "8rem" }, pb: "4rem" }}
      >
        <Outlet />
      </Box>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
