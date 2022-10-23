import React from "react";
import "../../pages/Blogs/Style/BlogStyles";
import SearchIcon from "@mui/icons-material/Search";
import { Container, Grid, Box, Typography, Button } from "@mui/material";
import addImage from "../../assets/Blog/we.jpg";
import data from "../../data/data";
import { styles } from "../../pages/Blogs/Style/BlogStyles";
import { Stack } from "@mui/material";
import Person2Icon from '@mui/icons-material/Person2';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FolderIcon from '@mui/icons-material/Folder';
const Blog = () => {
  return (
    <>
      <Box sx={{ py: { sm: "2rem", xs: "2rem" } }}>
        <Container>
          <Grid container spacing={8}>
            <Grid item xs={12} md={8}>
              <>
                <Box>
                  {data.blogs.map((blog) => (
                    <p>
                      <Typography variant="sectionTitle" component="h1" sx={{ mb: { md: "1rem", xs: "1rem" } }}>
                        {blog.title}
                      </Typography>
                      <img
                        src={blog.img}
                        alt="images"
                        width="100%"
                        height="auto"
                      />
                      <Stack direction="row" spacing={2} sx={{my:{md:"2rem", xs:"2rem"}, pb:{md:'1.5rem', xs:'1.5rem'}, borderBottom:"1px solid #ececec"}}>
                        <Typography variant="subtitle2"><Person2Icon sx={styles.blogIcons} />{blog.author}</Typography>
                        <Typography variant="subtitle2"><CalendarMonthIcon sx={styles.blogIcons}/>{blog.date}</Typography>
                        <Typography variant="subtitle2"><FolderIcon sx={styles.blogIcons}/>{blog.source}</Typography>
                      </Stack>

                      <Typography
                        variant="description"
                        component="p"
                        // sx={{ pt: "1rem" }}
                        sx={{ py: { sm: "1rem", xs: "1rem" } }}
                      >
                        {blog.description}
                      </Typography>
                    </p>
                  ))}
                </Box>

                <Button variant="contained">READ MORE</Button>
              </>
            </Grid>
            <Grid item xs={12} md={4} justifyContent="center">
              <Box component="span" sx={styles.searchLeftBorder}>
                <Typography variant="sectionTitle" sx={{ fontSize: "24px",  display:'block' }}>
                  Search
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontSize: "0.875rem",
                      color: "#e05a36",
                      lineHeight: "1.1",
                      marginTop: "5px",
                    }}
                  >
                    Leave your Keyword
                  </Typography>
                </Typography>
              </Box>
              <Button
                variant="outlined"
                size="large"
                endIcon={<SearchIcon />}
                fullWidth
                sx={{
                  my: {
                    md: "2rem",
                    xs: "2rem",
                    justifyContent: "space-between",
                  },
                }}
              >
                Search...{" "}
              </Button>

              <img src={addImage} alt="blog" width="100%" height="auto" />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Blog;
