import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

type TitleProps = {
  title: string;
  description: string;
  position?: string;
};

const Title: React.FC<TitleProps> = ({ title, description, position }) => {
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
        <Typography component="h1">{title}</Typography>
        <Typography component="p">{description}</Typography>
      </Box>
    </>
  );
};
export default Title;
