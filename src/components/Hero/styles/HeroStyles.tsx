import { SxProps, Theme } from "@mui/material";
import HeroImage from "../../../assets/hero/hero.png";
type SxStyles = Record<string, SxProps<Theme>>;

export function sxStyles<T extends SxStyles>(arg: T): T {
  return arg;
}

const styles = sxStyles({
  heroMain: (theme: Theme) => ({
    backgroundImage: `url(${HeroImage})`,
    backgroundSize: {
      xl: "cover",
      lg: "cover",
      md: "cover",
      sm: "cover",
    },
    backgroundRepeat: "no-repeat ",
    backgroundPosition: {
      lg: "center",
      md: "center ",
      sm: "center ",
      xs: "center center ",
    },
  }),
  heroMainContainer: (theme: Theme) => ({
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
      xs: "1rem",
    },
  }),
  heroSecondTitle: (theme: Theme) => ({
    fontSize: { xs: "1.5rem", sm: "2.75rem", md: "3.75rem" },
    fontWeight: 700,
    color: theme.extraColor.titleGray,
    textTransform: "uppercase",
    mt: {
      md: "-1.45rem",
    },
  }),
  heroThirdTitle: (theme: Theme) => ({
    fontSize: { xs: "1rem", sm: "1.5rem" },
    fontWeight: 700,
    color: theme.extraColor.titleGray,
    mt: {
      md: "-.25rem",
    },
  }),
  heroFourthTitle: (theme: Theme) => ({
    fontSize: { xs: "1rem", sm: "1.25rem" },
    fontWeight: 400,
    color: theme.palette.secondary.main,
  }),
});

export { styles };
