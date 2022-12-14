import { Box, Typography, styled, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import PageDetailsBg from "../../assets/pagedetails/pageDetails.jpg";

const PageDetails = ({ title }: { title: string }) => {
  const theme = useTheme();
  const RouterLink = styled(Link)(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontSize: '14px',
    lineHGeight: '20px',
    fontWeight: 700,
    textDecoration: "none",
    "&:hover": {
      textDecorationColor: theme.palette.secondary.main,
      textDecoration: "underline",
    },
  }));
  return (
    <>
      <Box
        component="section"
        sx={{
          backgroundImage: `url(${PageDetailsBg})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0,0,0,0.7)",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            py: {
              sm: "4rem",
              xs: "2rem",
            },
            pt: {
              md: "14rem",
              sm: "14rem",
              xs: "14rem",
            },
            pb: {
              md: "6rem",
              sm: "6rem",
              xs: "6rem",
            },
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: "2rem",
              fontWeight: 700,
              color: theme.extraColor.white,
            }}
          >
            {title}
          </Typography>
          <Box>
            <RouterLink to="/">Homepage </RouterLink>
            <Box
              component="span"
              sx={{
                color: theme.extraColor.white,
                fontSize: "1rem",
                fontWeight: 700,
              }}
            >
              &#8212; {title}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PageDetails;
