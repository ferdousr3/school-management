import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Slider from "../../Slider/Slider";

type ReviewsProps = {};

const Reviews: React.FC<ReviewsProps> = () => {
  return (
    <>
      <Box>
        <Container>
          <Grid container sx={{ alignItems: "center"}}>
            <Grid item xs={12} md={4}>
              <Box sx={{ paddingTop: "6rem" }}>
                <img src="https://i.ibb.co/Nxz2p1T/forma.png" alt="forma" />
                <Typography variant="h4" sx={{ fontWeight: "700" }}>
                  WHAT OUR <br /> STUDENTS SAY’S
                  <Typography
                    variant="body1"
                    sx={{ color: "#E05A36", fontSize: "20px" }}
                  >
                    Online Learn Courses Management
                  </Typography>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Slider />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default Reviews;
