import { Box, Typography } from "@mui/material";

const FooterThirdPart = () => {
  // const theme = useTheme();
  return (
    <>
      <Box sx={{ pt: ".75rem" }}>
        <Typography variant="footerTitle">SUBSCRIBE EMAIL</Typography>
        <Box sx={{ pt: "2.5rem" }}>
          <Typography variant="footerDetails" component="p">
            Since ancient times, Dinajpur district has been politically,
            economically, socially and .
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default FooterThirdPart;
