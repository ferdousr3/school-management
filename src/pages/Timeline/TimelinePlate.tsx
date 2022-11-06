import React from "react";
import { Container } from "@material-ui/core";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
// import timeLineBg from "../../assets/timeline/timelinebg.jpg";
import graduation from "../../assets/timeline/become.png";
import InsetList from "../Timeline/List/UpcomingLists";
import OrientationList from "../Timeline/List/UpcomingListsTwo";

type TimelinePlateProps = {};

const TimelinePlate: React.FC<TimelinePlateProps> = () => {
  return (
    <>
      <Box sx={{ mt: "-6rem" }}>
        <Container>
          <Box
            sx={{
              display: "block",
              maxWidth: "70%",
              margin: "auto",
              borderRadius: "1rem",
              background: "#e05a36",
              // backgroundImage: `url(${timeLineBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: { md: "2rem", xs: "0" },
            }}
          >
            <Grid
              container
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={graduation} alt="" />

              <Typography
                variant="h4"
                sx={{ textAlign: "center", color: "#fff", 
                ml:{md:"15px"} }}
              >
                Upcoming Course Timeline
              </Typography>
            </Grid>
            <Grid container sx={{ padding: "1rem" }}>
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
