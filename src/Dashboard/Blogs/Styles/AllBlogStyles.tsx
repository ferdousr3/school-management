import { SxProps, Theme, styled, alpha } from "@mui/material";

import InputBase from "@mui/material/InputBase";

type SxStyles = Record<string, SxProps<Theme>>;

export function sxStyles<T extends SxStyles>(arg: T): T {
  return arg;
}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    border: `1px solid ${theme.palette.primary.main}`,
    "& svg": {
      color: theme.palette.primary.main,
    },
  },
  marginLeft: 0,
  width: "28ch",
  [theme.breakpoints.down("md")]: {
    margin: "10px 0px",
    width: "250px",
  },
  transition: theme.transitions.create("color"),
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& svg": {
    position: "absolute",
    color: theme.palette.secondary.main,
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "14ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const styles = sxStyles({
  main: (theme: Theme) => ({
    background: theme.extraColor.white,
    boxShadow: theme.myShadows.primary,
    // marginTop: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "6px",
    // border: {
    //   sm: `1px solid ${theme.extraColor.borderColor}`,
    // },
    padding: {
      sm: "1rem 2rem",
    },
  }),
  mainSection: (theme: Theme) => ({
    width: "100%",
    boxShadow: theme.myShadows.primary,
  }),
  topSection: (theme: Theme) => ({
    py: 2,
    display: { sm: "flex" },
    justifyContent: "space-between",
    alignItems: "center",
    mx: 2,
  }),
  topSectionLeft: (theme: Theme) => ({
    display: { sm: "flex" },
    justifyContent: "space-between",
    alignItems: "center",
    width: { md: "50%" },
  }),
});

export { styles, Search, SearchIconWrapper, StyledInputBase };
