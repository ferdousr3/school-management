import React from "react";
import { Box, Grid, Container, useTheme } from "@mui/material";
// import data from "../../data/data";
import FooterFirstPart from "./FooterFirstPart";
import FooterSecondPart from "./FooterSecondPart";
import FooterThirdPart from "./FooterThirdPart";
import FooterFourthPart from "./FooterFourthPart";
import FooterLastPart from "./FooterLastPart";

const Footer: React.FC<{}> = () => {
  const theme = useTheme();
  return (
    <>
      {/* footer first four part */}
      <Box sx={{ bgcolor: theme.extraColor.liteGray, py: '3rem' }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
              <FooterFirstPart />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
              <FooterSecondPart />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
              <FooterThirdPart />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
              <FooterFourthPart />
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* footer last two part */}
      <FooterLastPart />
    </>
  );
};

export default Footer;
