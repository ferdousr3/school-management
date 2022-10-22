import React from "react";
import "../../pages/Blogs/Style/BlogStyles"
import SearchIcon from "@mui/icons-material/Search";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
} from "@mui/material";
import seoImage from "../../assets/Blog/seo.png";
import addImage from "../../assets/Blog/we.jpg";
import data from "../../data/data";
import { styles } from "../../pages/Blogs/Style/BlogStyles";
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

                <img src={seoImage} alt="blog" width="100%" height="auto" />
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
              <Box component="span" sx={styles.searchLeftBorder}>                          
              <Typography
                variant="sectionTitle"
                sx={{ fontSize:'24px' }}
              >
                Search
                <Typography variant="subtitle2" 
                sx={{fontSize: '0.875rem',color:'#e05a36', lineHeight:'1.1', marginTop: '5px'}}>Leave your Keyword</Typography>
              </Typography>
              </Box>  
              <Button variant="outlined" size="large" endIcon={<SearchIcon />} fullWidth sx={{my:{md:"2rem", xs:"2rem", justifyContent:'space-between'}}}>Search... </Button>
              
              <img src={addImage} alt="blog" width="100%" height="auto" />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Blog;
