import React from "react";
import { Box, Grid, Container, useTheme } from "@mui/material";
// import data from "../../data/data";
import FooterFirstPart from "./FooterFirstPart";
import FooterSecondPart from "./FooterSecondPart";
import FooterThirdPart from "./FooterThirdPart";

const Footer: React.FC<{}> = () => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ bgcolor: theme.extraColor.liteGray, pt: 4 }}>
        <Container>
          <Grid container spacing={4} >
            <Grid item xs={12} md={6} lg={3} xl={3}>
              <FooterFirstPart />
            </Grid>
            <Grid item xs={12} md={6} lg={3} xl={3} >
              <FooterSecondPart />
            </Grid>
            <Grid item xs={12} md={6} lg={3} xl={3}>
              <FooterThirdPart />
            </Grid>
            <Grid item xs={12} md={6} lg={3} xl={3}>
              4
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
