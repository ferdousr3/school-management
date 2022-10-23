import { SxProps, Theme } from "@mui/material";

type SxStyles = Record<string, SxProps<Theme>>;

export function sxStyles<T extends SxStyles>(arg: T): T {
  return arg;
}

const styles = sxStyles({
  main: (theme: Theme) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mt: "10rem",
  }),
  mainCard: (theme: Theme) => ({
    maxWidth: 345,
    boxShadow: "none",
    border: `1px solid ${theme.extraColor.borderColor}`,
  }),
  notVerifiedTitle: (theme: Theme) => ({
    fontWeight: "700",
    fontSize: "1.4rem",
    color: `${theme.palette.primary.main}`,
    display: "flex",
    alignItems: "center",
    "& svg": {
      color: "red",
      ml: 1,
    },
  }),
  subTitleMain: (theme: Theme) => ({
    alignItems: "center",
    color: `${theme.palette.primary.main}`,
    lineHeight: ".2rem",
  }),
  subTitleIcon: (theme: Theme) => ({
    fontSize: "4rem",
    textAlign: { xs: "center" },
  }),
  subTitleText: (theme: Theme) => ({
    fontWeight: "700",
    color: `${theme.palette.secondary.main}`,
    px: ".2rem",
  }),
});

export { styles };
