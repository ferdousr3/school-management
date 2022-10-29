import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import EventsCard from "./EventsCard";

const Event = () => {
  return (
    <>
      <Box sx={{ py: { sm: "2rem", xs: "2rem" } }}>
        <Container>
          <Grid container >
            
              <EventsCard />
         
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Event;
