import { Box } from "@mui/material";
import React from "react";
import PageTitle from "../../common/PageTitle/PageTitle";
import Hero from "../../components/Hero/Hero";
import Courses from "../Courses/Courses";
import Instructors from "../Instructors/Instructors";
import NewEventSection from "./NewEventSection";

const Home: React.FC<{}> = () => {
  return (
    <>
      {/* page title */}
      <PageTitle title="Home" />
      {/* hero section */}
      <Box sx={{ pb: "2.5rem", mb: '4rem' }} component="section">
        <Hero />
      </Box>
      {/* new event section */}
      <Box sx={{ pb: "1.5rem" }} component="section">
        <NewEventSection />
      </Box>
      {/* Courses section */}
      <Box sx={{}} component="section">
        <Courses />
      </Box>
      <Box sx={{}} component="section">
        <Instructors />
      </Box>
    </>
  );
};

export default Home;
