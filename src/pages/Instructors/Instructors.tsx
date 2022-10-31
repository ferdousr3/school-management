import { Container, Typography, Box, Grid } from "@mui/material";
// import React, { useEffect, useState } from "react";
import InstructorCards from "../Instructors/InstrauctorCards";

// type insData = {
//   insID?: number;
// }
const Instructors = () => {
  // const [instructors, setInstructors] = useState([]);
  // useEffect(() => {
  //   fetch("InstructorsData.json")
  //     .then((res) => res.json())
  //     .then((data) => setInstructors(data));
  // }, []);
  return (
    <>
      <Container>
        <Box sx={{ textAlign: "center" }}>
          <Box  sx={{ marginBottom: '2rem' }}>
          <Typography variant="h3">FEATURED INSTRUCTORS</Typography>

          <Typography variant="h6">
            The pie and we know flipper lives in a worl the clouds away
          </Typography>
          </Box>
          <img src="https://i.ibb.co/7vk5Q1D/instra.png" alt="instra" />
          <Box>
            <Grid container spacing={3} sx={{marginTop:'2rem'}}>
              {/* <Grid item xs={12} md={3}> */}
                {/* {instructors.map((instructor, key:number) => ( */}
                {/* <InstructorCards instructor={instructor} key={instructor.{insID:insData}} /> */}
                <InstructorCards />
                {/* ))} */}
              </Grid>
            {/* </Grid> */}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Instructors;
