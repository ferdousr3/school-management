import { Container, Grid } from "@mui/material";
import React from "react";
import data from "../../data/data";
import AboutCard from "./AboutCard";

const OurVision = () => {
  return (
    <>
      <Container>
        <Grid container spacing={4}>
          {data.about.target.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4}>
              <AboutCard icon={item.icon} title={item.title} description={item.description} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default OurVision;
