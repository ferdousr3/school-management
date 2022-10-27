import { SxProps, Theme } from "@mui/material";

type SxStyles = Record<string, SxProps<Theme>>;

export function sxStyles<T extends SxStyles>(arg: T): T {
  return arg;
}

const styles = sxStyles({
  contactLeft: (theme: Theme) => ({
    bgcolor: theme.palette.primary.main,
    pt: "5rem",
    pb: "4rem",
    pl: { xs: "5%", md: "6%" },
    pr: "5%",
  }),
  contactLeftTitle: (theme: Theme) => ({
    fontSize: "2.1rem",
    color: theme.extraColor.white,
    fontWeight: 700,
  }),
  contactLeftSocial: (theme: Theme) => ({
    fontSize: "1.5rem",
    color: theme.extraColor.white,
    fontWeight: 700,
    mt: "-2px",
  }),
  contactLeftSubTitle: (theme: Theme) => ({
    fontSize: "1rem",
    color: theme.extraColor.white,
    fontWeight: 400,
  }),
  contactLeftIcon: (theme: Theme) => ({
    "& svg": {
      bgcolor: theme.extraColor.white,
      color: theme.palette.secondary.main,
      borderRadius: "50%",
      p: "12px",
      fontSize: "3rem",
    },
  }),
  contactLeftIconDetails: (theme: Theme) => ({
    fontSize: "1rem",
    color: theme.extraColor.white,
    fontWeight: 400,
  }),
  contactLeftSocialIcons: (theme: Theme) => ({
    display: "flex",
    alignItems: "center",
    "& a": {
      color: theme.palette.secondary.main,
      bgcolor: theme.extraColor.liteGray,
      padding: "4px",
      borderRadius: "50%",
      width: "35px",
      height: "35px",
      fontSize: "1.1rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
  }),
  contactRight: (theme: Theme) => ({
    // bgcolor: theme.palette.primary.main,
    pt: "5rem",
    pb: "2rem",
    pl: { xs: "5%", md: "15%" },
    pr: "5%",
  }),
  contactRightTitle: (theme: Theme) => ({
    fontSize: "2.1rem",
    color: theme.extraColor.titleGray,
    fontWeight: 700,
  }),
  contactRightSubTitle: (theme: Theme) => ({
    fontSize: "1rem",
    color: "#666666",
    fontWeight: 400,
  }),
  submitButton: (theme: Theme) => ({
    mt: 3,
    mb: 2,
    py: 1.5,
    px: 4,
    fontWeight: 700,
    textTransform: "uppercase !important",
  }),
});

export { styles };
