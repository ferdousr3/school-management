import React from "react";
import PageDetails from "../../common/PageDetails/PageDetails";
import PageTitle from "../../common/PageTitle/PageTitle";
import { Grid, Box, Typography, Stack, Button, TextField } from "@mui/material";

import { styles } from "./Styles/ContactStyles";
import data from "../../data/data";

const Contact = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <>
      <PageTitle title="Contact" />
      <PageDetails title="Contact" />
      <section>
        <Grid container>
          <Grid item xs={12} md={6} sx={styles.contactLeft}>
            <Typography component="h1" sx={styles.contactLeftTitle}>
              Contact Information:
            </Typography>
            <Typography component="h6" sx={styles.contactLeftSubTitle}>
              Lorem ipsum dolor sit amet, consectetur adipisici elit, sed
              eiusmod tempor incidunt ut labore et dolore magna aliqua invideo
              miror magis.
            </Typography>
            <Box sx={{ pt: 4 }}>
              {data.contactDetails.map((item) => (
                <Stack
                  sx={{ display: "flex", alignItems: "center", pb: 2 }}
                  direction="row"
                  spacing={2}
                  key={item.id}
                >
                  <Box component="span" sx={styles.contactLeftIcon}>
                    {item.icon}
                  </Box>
                  <Typography sx={styles.contactLeftIconDetails}>
                    {item.text}
                    <br />
                    {item.text2}
                  </Typography>
                </Stack>
              ))}
            </Box>
            <Box sx={{ pt: "1.5rem" }}>
              <Stack
                sx={{ display: "flex", alignItems: "center", pb: 2 }}
                direction="row"
                spacing={2}
              >
                <Box component="span" sx={styles.contactLeftIcon}>
                  <Typography component="h1" sx={styles.contactLeftSocial}>
                    Contact Us Via:
                  </Typography>
                </Box>
                <Stack
                  sx={styles.contactLeftSocialIcons}
                  direction="row"
                  spacing={2}
                >
                  {data.social.map((item) => (
                    <a
                      key={item.id}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.icon}
                    </a>
                  ))}
                </Stack>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container>
              <Grid item sx={styles.contactRight}>
                <Typography component="h1" sx={styles.contactRightTitle}>
                  Get In Touch:
                </Typography>
                <Typography component="h6" sx={styles.contactRightSubTitle}>
                  Fields marked with an * are required
                </Typography>

                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 2, maxWidth: "30rem" }}
                >
                  <TextField
                    sx={{ mb: "14px" }}
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="Name"
                    autoFocus
                  />
                  <TextField
                    sx={{ mb: "14px" }}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    sx={{ mb: "14px" }}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    required
                    id="outlined-multiline-static"
                    label="Your Comment"
                    multiline
                    rows={2}
                    fullWidth
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    sx={{
                      mt: 3,
                      mb: 2,
                      py: 1.5,
                      px:4,
                      fontWeight:700,
                      textTransform: "uppercase !important",
                    }}
                  >
                    Contact Now
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default Contact;
