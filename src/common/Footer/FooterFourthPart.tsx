import { Box, Typography, ListItem, useTheme } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const FooterFourthPart = () => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ pt: ".75rem" }}>
        <Typography variant="footerTitle" component="h2">
          get in Touch
        </Typography>
        <Box sx={{ pt: "2.5rem", pb: ".5rem " }}>
          <Typography
            variant="footerDetails"
            component="p"
            sx={{ pb: "1rem " }}
          >
            Since ancient times, Dinajpur district has been politically,
            economically, socially and .
          </Typography>
          <ListItem
            sx={{ py: 0,  color: theme.extraColor.titleGrayDark }}
          >
            <PhoneIcon
              sx={{
                color: theme.palette.secondary.main,
                mr: 1,
                fontSize: "18px",
              }}
            />

            <Typography sx={{ fontSize: "1rem" }} component="p">
              03-0134024567-1
            </Typography>
          </ListItem>
          <ListItem
            sx={{ py: 0, color: theme.extraColor.titleGrayDark }}
          >
            <LocationOnIcon
              sx={{
                color: theme.palette.secondary.main,
                mr: 1,
                fontSize: "18px",
              }}
            />
            <Typography sx={{ fontSize: "1rem" }} component="p">
              Street 21 York E Block 2101 France USA
            </Typography>
          </ListItem>
        </Box>
      </Box>
    </>
  );
};

export default FooterFourthPart;
