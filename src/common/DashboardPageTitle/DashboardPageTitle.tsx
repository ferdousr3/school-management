import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

type TitleProps = {
  sectionTitle: string;
  description: string;
  position?: string;
};

const DashboardSectionTitle: React.FC<TitleProps> = ({
  sectionTitle,
  description,
  position,
}) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          py: 1,
          textAlign: `${position ? position : "center"}`,
          "& h1": {
            fontSize: "1.2rem",
            color: theme.palette.primary.main,
            fontWeight: 900,
            textTransform: "uppercase",
          },
          "& p": {
            fontSize: "1rem",
            color: theme.extraColor.linkBlack,
            fontWeight: 600,
          },
        }}
      >
        <Typography component="h1">{sectionTitle}</Typography>
        <Typography component="p">{description}</Typography>
      </Box>
    </>
  );
};
export default DashboardSectionTitle;
