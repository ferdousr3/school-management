import { Box, Typography } from "@mui/material";
import FooterSubscribeFiled from "./FooterSubscribeFiled";

const FooterThirdPart = () => {
  // const theme = useTheme();
  return (
    <>
      <Box sx={{ pt: ".75rem" }}>
        <Typography variant="footerTitle" component='h2' >SUBSCRIBE EMAIL</Typography>
        <Box sx={{ pt: "2.5rem" }}>
          <Typography variant="footerDetails" component="p">
            Since ancient times, Dinajpur district has been politically,
            economically, socially and .
          </Typography>
          <FooterSubscribeFiled />
        </Box>

      </Box>
    </>
  );
};

export default FooterThirdPart;
