import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
// import React, { useEffect, useState } from "react";
import CourseCard from "../Courses/CourseCard";

const Courses = () => {
  return (
    <>
      <Container>
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ marginBottom: "2rem", marginTop:'5rem' }}>
            <Typography variant="h3">ONLINE BEST COURSES</Typography>

            <Typography variant="h6">
              The pie and we know flipper lives in a worl the clouds away
            </Typography>
          </Box>
          <img src="https://i.ibb.co/7vk5Q1D/instra.png" alt="instra" />
          <Box>
            <Grid container spacing={3} sx={{ marginTop: "2rem" }}>
              <CourseCard />
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Courses;
