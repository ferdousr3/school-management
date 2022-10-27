import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

type TitleProps = {
  title: string;
  description: string;
};

const Title: React.FC<TitleProps> = ({ title, description }) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          py: 1,
          textAlign: "center",
          "& h1": {
            fontSize: "1.2rem",
            color: theme.palette.primary.main,
            fontWeight: 800,
          },
          "& p": {
            fontSize: "1rem",
            color: theme.extraColor.linkBlack,
            fontWeight: 500,
          },
        }}
      >
        <Typography component="h1">{title}</Typography>
        <Typography component="p">{description}</Typography>
      </Box>
    </>
  );
};
export default Title;
