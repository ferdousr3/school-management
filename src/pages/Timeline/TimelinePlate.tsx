import React from "react";
import { Container } from "@material-ui/core";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import timeLineBg from "../../assets/timeline/timelinebg.jpg";
import InsetList from "../Timeline/List/UpcomingLists";
import OrientationList from "../Timeline/List/UpcomingListsTwo";

type TimelinePlateProps = {};

const TimelinePlate: React.FC<TimelinePlateProps> = () => {
  return (
    <>
      <Box sx={{ mt: "-5rem" }}>
        <Container>
          <Box
            sx={{
              display: "block",
              maxWidth: "70%",
              margin: "auto",
              borderRadius: "1rem",
              background: "#244A58",
              minHeight: "300px",
              backgroundImage: `url(${timeLineBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding:"2rem"
            }}
          >
            <Typography
              variant="h3"
              sx={{ textAlign: "center", color: "#fff" }}
            >
              Upcoming Course Timeline
            </Typography>

            <Grid container sx={{padding:'1rem'}}>
              <Grid item xs={12} md={6}>
                <InsetList />
              </Grid>
              <Grid item xs={12} md={6}>
                <OrientationList />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default TimelinePlate;
