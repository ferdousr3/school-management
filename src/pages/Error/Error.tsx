import React from "react";
import PageDetails from "../../common/PageDetails/PageDetails";
import PageTitle from "../../common/PageTitle/PageTitle";
import ErrorPic from "../../assets/404/error.jpg";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import CustomLink from "../../common/CustomLink/CustomLink";

const Error = () => {
  const theme = useTheme();
  return (
    <>
      <PageTitle title="404" />
      <PageDetails title="404" />
      <section>
        <Container>
          <Grid container>
            <Grid
              item
              xs={12}
              
              justifyContent="center"
              sx={{ margin: "0px auto" }}
            >
              <Box
                sx={{
                  width: "100%",
                  background: "cover",
                  objectFit: "fill",

                  "& img": {
                    md: {
                      width: "90%",
                    },
                    xs: {
                      width: "100%",
                    },
                  },
                }}
              >
                <img src={ErrorPic} alt="404 pic" width="100%" />
              </Box>
            </Grid>
            <Grid item xs={12} >
              <Box
                sx={{
                  textAlign: "center",
                  mt: {
                    md: "-5rem",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: theme.palette.primary.main,
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    pt: 0,
                    mt: "-8px",
                  }}
                  component="p"
                >
                  Sorry, we can't find the page you are looking for. Please go
                  to
                  <Box component="span" sx={{ pl: "5px" }}>
                    <CustomLink url="" text="HOME" />
                  </Box>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Error;
