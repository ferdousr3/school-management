import { Box, Container, Typography} from "@mui/material";
import MyButton from "../../common/MyButton/MyButton";
import { styles } from "./styles/HeroStyles";

const Hero = () => {
  return (
    <>
      <Box
        sx={styles.heroMain}>
        <Container>
          <Box
            component="div"
            sx={styles.heroMainContainer}
          >
            <Typography
              variant="heroTitle"
              sx={{ fontSize: { xs: "2rem", sm: "4.375rem" } }}
            >
              400+
            </Typography>
            <Typography
              sx={styles.heroSecondTitle}
            >
              staff teaching
            </Typography>
            <Typography
              sx={styles.heroThirdTitle}
            >
              Courses & Discussing Topics Online
            </Typography>
            <Typography
              sx={styles.heroFourthTitle}
            >
              For Potential & Achievement
            </Typography>
            <Box sx={{ mt: 2 }}>
              <MyButton text="Registration Now" url="login" />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
