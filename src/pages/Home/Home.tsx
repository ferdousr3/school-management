import { Box } from "@mui/material";
import React from "react";
import PageTitle from "../../common/PageTitle/PageTitle";
import Hero from "../../components/Hero/Hero";
import Instructors from "../Instructors/Instructors";
import NewEventSection from "./NewEventSection";

const Home: React.FC<{}> = () => {
  return (
    <>
      {/* page title */}
      <PageTitle title="Home" />
      {/* hero section */}
      <Box sx={{ pb: "1.5rem" }} component="section">
        <Hero />
      </Box>
      {/* new event section */}
      <Box sx={{ pb: "1.5rem" }} component="section">
        <NewEventSection />
      </Box>
      {/* Instructors section */}
      <Box sx={{}} component="section">
        <Instructors />
      </Box>
    </>
  );
};

export default Home;
