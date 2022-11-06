import { Box } from "@mui/material";
import React from "react";
import PageTitle from "../../common/PageTitle/PageTitle";
import Hero from "../../components/Hero/Hero";
import Courses from "../Courses/Courses";
import Instructors from "../Instructors/Instructors";
import Reviews from "../Reviews/Reviews";
import Timeline from "../Timeline/Timeline";
import TimelinePlate from "../Timeline/TimelinePlate";
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


            {/* Timeline section */}
            <Box sx={{}} component="section">
        <Timeline />
      </Box>
            {/* TimelinePlate section */}
            <Box sx={{}} component="section">
        <TimelinePlate />
      </Box>
      {/* Courses section */}
      <Box sx={{}} component="section">
        <Courses />
      </Box>
       {/* Instructors section */}
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
