import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  OutlinedInput,
} from "@mui/material";
import seoImage from "../../assets/Blog/seo.png";
import addImage from "../../assets/Blog/we.jpg";
import data from "../../data/data";
const Blog = () => {
  return (
    <>
      <Box sx={{ py: { sm: "4rem", xs: "2rem" } }}>
        <Container>
          <Grid container spacing={8}>
            <Grid item xs={12} md={8}>
              <>
              <Typography variant="sectionTitle" component="h1">
                SEO for your WP website
              </Typography>
              <Typography
                variant="description"
                component="p"
                sx={{ pt: "1rem" }}
              ></Typography>

              <img src={seoImage} alt="blog" width="100%" height="80%" />
              <Typography
                variant="description"
                component="p"
                // sx={{ pt: "1rem" }}
                sx={{ py: { sm: "1rem", xs: "1rem" } }}
              >
                {data.blog.description}
              </Typography>
              <Button variant="contained">READ MORE</Button>
              </>
            </Grid>
            <Grid item xs={12} md={4} justifyContent="center">
              <Typography variant="sectionTitle" component="h1"
              sx={{ mt: { sm: "4rem", xs: "8rem", md: '4rem' } }}
              >
                Search
              </Typography>
              <Typography
                variant="description"
                component="p"
                sx={{ pt: "1rem" }}
              >
                Leave your comment
              </Typography>
              <FormControl sx={{ width: "25ch", my: "2rem" }}>
                <OutlinedInput placeholder="Please enter text" />
                {/* <MyFormHelperText /> */}
              </FormControl>
              <img src={addImage} alt="blog" width="90%" height="80%"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Blog;
