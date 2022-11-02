import { Container, Typography, Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import InstructorCards from "./InstructorCards";

// type insData = {
//   insID?: number;
// }
type insCardData = {
  id: number;
  name?: string;
  designation?: string;
  img?: string;
  
};
const Instructors = () => {
  const [instructors, setInstructors] = useState<[] | insCardData[]>([]);
  useEffect(() => {
    fetch("InstructorsData.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.name)
        setInstructors(data)
      });
  }, []);
  console.log(typeof instructors);
  return (
    <>
      <Container>
        <Box sx={{ textAlign: "center" }}>
          <Box  sx={{ marginBottom: '2rem', marginTop:'5rem' }}>
          <Typography variant="h3">FEATURED INSTRUCTORS</Typography>

          <Typography variant="h6">
            The pie and we know flipper lives in a worl the clouds away
          </Typography>
          </Box>
          <img src="https://i.ibb.co/7vk5Q1D/instra.png" alt="images" />
          <Box>
            <Grid  sx={{marginTop:'2rem'}}>
              <Grid container spacing={3}>
                {instructors.map((instructor) => (
                <InstructorCards {...instructor} key={instructor.id} />
                ))}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Instructors;
