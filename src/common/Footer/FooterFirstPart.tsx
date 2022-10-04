import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import data from "../../data/data";

const FooterFirstPart: React.FC<{}> = () => {
  const theme = useTheme();
  return (
    <>
      <Box>
        <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={data.logoImage2}
            alt={data.schoolDetails.shortName}
            height="70px"
            width="70px"
          />
          <Box sx={{ pl: 1 }}>
            <Typography
              variant="h6"
              component="h4"
              sx={{
                fontWeight: 900,
                fontSize: "1.5rem",
                color: theme.extraColor.titleGray,
              }}
            >
              {data.schoolDetails.shortName}
            </Typography>
            <Typography
              variant="body2"
              component="h4"
              sx={{ mt: "-8px", color: theme.extraColor.titleGrayLite }}
            >
              {data.schoolDetails.address}
            </Typography>
          </Box>
        </Box>
        <Typography variant="description" component="p" sx={{ pt: 2 }}>
          Since ancient times, Dinajpur district has been politically,
          economically, socially and educationally underdeveloped compared to
          other regions.
        </Typography>
      </Box>
    </>
  );
};

export default FooterFirstPart;
