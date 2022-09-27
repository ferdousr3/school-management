import { Box, Container, Typography, useTheme, Button } from "@mui/material";
import { Link } from "react-router-dom";
import HeroImage from "../../assets/hero/hero.jpg";

const Hero = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: {
            xl: "cover",
            lg: "unset",
          },
          backgroundRepeat: "no-repeat ",
          backgroundPosition: {
            lg: "center  ",
            md: "center center",
            sm: "center center",
            xs: "center center ",
          },
        }}
      >
        <Container>
          <Box
            component="div"
            sx={{
              maxWidth: {
                lg: "45rem",
                md: "40rem",
                sm: "30rem",
              },
              // border: "1px solid",
              textAlign: "center",
              py: {
                sm: "2rem",
                md: "3rem",
                lg: "6rem",
              },
            }}
          >
            <Typography
              variant="heroTitle"
              sx={{ fontSize: { xs: "2rem", sm: "4.375rem" } }}
            >
              100+
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", sm: "3.75rem" },
                fontWeight: 700,
                color: theme.extraColor.titleGray,
                textTransform: "uppercase",
                mt: {
                  md: "-1.25rem",
                },
              }}
            >
              Alumni Events
            </Typography>
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: theme.extraColor.titleGray,
                // mt: {
                //   md: "-.75rem",
                // },
              }}
            >
              We have passed 100 years!
            </Typography>
            <Typography
              sx={{
                fontSize: "1.25rem",
                fontWeight: 400,
                color: theme.palette.secondary.main,
              }}
            >
              For Achievement
            </Typography>
            <Link to='/login' >
              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontSize: "1rem !important",
                  textTransform: "uppercase !important",
                  textDecoration:'none'
                }}
              >
                Registration Now
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
