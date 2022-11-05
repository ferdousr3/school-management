import { Box } from "@mui/material";
import React from "react";
import PageTitle from "../../common/PageTitle/PageTitle";
import Hero from "../../components/Hero/Hero";
import Courses from "../Courses/Courses";
import Instructors from "../Instructors/Instructors";
import Reviews from "../Reviews/Reviews";
import NewEventSection from "./NewEventSection";

const Home: React.FC<{}> = () => {
  return (
    <>
      {/* page title */}
      <PageTitle title="Home" />
      {/* hero section */}
      <Box sx={{ pb: "2.5rem", mb: "4rem" }} component="section">
        <Hero />
      </Box>
      {/* Courses section */}
      <Box sx={{}} component="section">
        <Courses />
      </Box>
      <Box sx={{}} component="section">
        <Instructors />
      </Box>
      {/* new event section */}
      <Box sx={{}} component="section">
        <NewEventSection />
      </Box>
      <Box sx={{ pb: "5rem", background:"#F3F7FD"  }} component="section">
        <Reviews />
      </Box>
    </>
  );
};

export default Home;
