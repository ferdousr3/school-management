import { Container } from "@material-ui/core";
import { Grid, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
// import { Link } from "react-router-dom";
import bgTimeline1 from "../../assets/timeline/bgTimeline1.png";
// import InsetList from "../Timeline/List/TimeList";

type TimelineProps = {};

const Timeline: React.FC<TimelineProps> = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${bgTimeline1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "4rem 0 8rem",
          marginTop: "4rem"
        }}
      >
        <Container>
          <Grid container  sx={{justifyContent:"center"}}>
            <Grid item xs={12} md={12}  sx={{color:"#fff", textAlign:"center"}}>
              <Typography variant="h3">OUR GRADUATES GO 
              <br /> ON TO ATTEND</Typography>
              <Typography variant="h6">
              The pie and we know flipper lives in a worl the clouds away
              </Typography>
              <Typography variant="subtitle1" sx={{margin:"3rem 0"}}>
                Our online courses are built in partnership with technology
                leaders and are relevant to industry needs. Upon completing a
                Online course, you’ll receive a verified completion certificate
                recognized by industry leaders.
              </Typography>
            </Grid>
            <Box>
            <Button variant="contained" sx={{background:"#E05A36"}}>VIEW MORE COURSES</Button>
            </Box>
            {/* <Grid item xs={12} md={4} sx={{ paddingLeft: "" }}>
              <Typography variant="h5" sx={{ color: "#E05B38" }}>
                Welcome to Become A Teacher, you have important steps
              </Typography>
              <Typography
                sx={{ color: "", textAlign: "justify", paddingRight: "0" }}
              >
                <InsetList />
                <InsetList />
              </Typography>
              <Box>
                <Typography variant="subtitle1" sx={{border:"5px solid #234957", borderBottom:"0", borderLeft:"0", borderRight:"0"}}>
                please <Link to="#" style={{color:'#e05a36'}}>Log in</Link>  to send your request
                </Typography>
              </Box>
            </Grid> */}
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default Timeline;
