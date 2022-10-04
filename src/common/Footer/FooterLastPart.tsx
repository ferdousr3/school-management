import {
  Box,
  Container,
  Grid,
  Typography,
  useTheme,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
import data from "../../data/data";

const FooterLastPart = () => {
  const theme = useTheme();
  const RouterLink = styled(Link)(({ theme }) => ({
    color: theme.palette.secondary.main,
    textDecoration: "none",
    fontSize: ".875rem",
    fontWeight: 600,
  }));

  return (
    <>
      <Box sx={{ background: "#00080f", py: "1.5rem", mt: "2rem" }}>
        <Container>
          <Grid container spacing={4}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "start" },
              }}
            >
              <Typography
                sx={{
                  color: theme.extraColor.white,
                  fontSize: ".875rem",
                  fontWeight: 400,
                }}
              >
                {"© All right reserved  "}
                <span>{new Date().getFullYear()} - </span>
                <RouterLink to="/">{data.schoolDetails.name}</RouterLink>
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "end" },
              }}
            >
              <Typography
                sx={{
                  color: theme.extraColor.white,
                  fontSize: ".875rem",
                  fontWeight: 400,
                }}
              >
                {"Powered by "}
                <RouterLink to="/">Greek Team</RouterLink>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FooterLastPart;
