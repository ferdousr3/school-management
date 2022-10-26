import React from "react";
import { Grid, Box, Typography, Stack } from "@mui/material";
import { styles } from "./Styles/ContactStyles";
import data from "../../data/data";

// type ContactLeftProps = {

// };

const ContactLeft: React.FC = () => {
  return (
    <Grid item xs={12} md={6} sx={styles.contactLeft}>
      <Typography component="h1" sx={styles.contactLeftTitle}>
        Contact Information:
      </Typography>
      <Typography component="h6" sx={styles.contactLeftSubTitle}>
        ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor
        incidunt ut labore et dolore magna aliqua invideo miror magis.
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
          <Stack sx={styles.contactLeftSocialIcons} direction="row" spacing={2}>
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
  );
};
export default ContactLeft;
