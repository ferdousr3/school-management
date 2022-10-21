import { SxProps, Theme } from "@mui/material";

type SxStyles = Record<string, SxProps<Theme>>;

export function sxStyles<T extends SxStyles>(arg: T): T {
  return arg;
}

const drawerWidth = 280;
const styles = sxStyles({
  toolbarStyle: (theme: Theme) => ({
    py: 1,
    bgcolor: theme.palette.primary.main,
    borderRadius: 1.5,
    position: "absolute",
    width:"76%",
    left:"12%",
  }),
  drawerMenuStyle: (theme: Theme) => ({
    display: { xs: "block", md: "none" },

    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: drawerWidth,
      bgcolor: theme.palette.primary.main,
      color: theme.extraColor.white,
    },
  }),
  headerTopMain: (theme: Theme) => ({
    color: theme.palette.primary.main,
    display: {
      xs: "block",
      sm: "flex",
    },
    justifyContent: "space-between",
    alignItems: "center",
    py: "1rem",
    px: {
      xs: 0,
      sm: "1rem",
    },
  }),
  headerTopLeft: (theme: Theme) => ({
    color: theme.palette.primary.main,
    display: {
      xs: "flex",
      sm: "flex",
    },
    alignItems: "center",
    mx: {
      xs: "auto",
      md: 0,
    },
  }),
  headerTopLeftElement: (theme: Theme) => ({
    "& a": {
      display: "flex",
      alignItems: "center",
      mr: {
        xs: "4px",
        sm: "1.5rem",
      },
      fontSize: ".875rem",
      pr: "4px",
      textDecoration: "none",
      color: theme.palette.primary.main,
      "& svg": {
        fontSize: ".875rem",
        mt: "2px",
        mr: {
          xs: "2px",
          sm: "4px",
        },
      },
      "&:hover": {
        "& svg": {
          color: "rgba(35, 73, 87, 0.7)",
        },
      },
    },
  }),
  headerTopRight: (theme: Theme) => ({
    display: {
      xs: "none",
      md: "flex",
    },
  }),
});

export { styles };
