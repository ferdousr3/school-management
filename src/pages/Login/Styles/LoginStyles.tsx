import { SxProps, Theme } from "@mui/material";

type SxStyles = Record<string, SxProps<Theme>>;

export function sxStyles<T extends SxStyles>(arg: T): T {
  return arg;
}

const styles = sxStyles({
  main: (theme: Theme) => ({
    marginTop: "10rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: {
      sm: `1px solid ${theme.extraColor.borderColor}`,
    },
    padding: {
      sm: "1rem 2rem",
    },
  }),
  mainHeading: (theme: Theme) => ({
    fontSize: "1rem",
    fontWeight: 700,
  }),
  icon: (theme: Theme) => ({
    m: 1,
    fontSize: "3rem",
    color: "secondary.main",
    bgcolor: "transparent",
    " & svg": {
      fontSize: "4rem",
    },
  }),
  orSection: (theme: Theme) => ({
    fontSize: "1rem",
    fontWeight: 700,
    color: theme.extraColor.titleGrayDark,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
});

export { styles };
