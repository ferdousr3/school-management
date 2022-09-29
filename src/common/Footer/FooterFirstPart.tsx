import { Box, Typography } from "@mui/material";
import React from "react";
import data from "../../data/data";

const FooterFirstPart: React.FC<{}> = () => {
  return (
    <>
      <Box>
        <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={data.logoImage}
            alt={data.schoolDetails.shortName}
            height="70px"
            width="70px"
          />
          <Box sx={{ pl: 2 }}>
            <Typography variant="h6" component="h4">
              {data.schoolDetails.shortName}
            </Typography>
            <Typography variant="body2" component="h4">
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
