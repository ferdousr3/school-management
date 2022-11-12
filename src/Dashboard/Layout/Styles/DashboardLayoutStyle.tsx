import { styled } from "@mui/material";
import { SxProps, Theme } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
type SxStyles = Record<string, SxProps<Theme>>;

export function sxStyles<T extends SxStyles>(arg: T): T {
  return arg;
}

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  backgroundColor: theme.extraColor.bgGray,
  height: "100vh",
  overflow: "auto",
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
const Drawer = styled(MuiDrawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    backgroundColor: theme.extraColor.bgGray,
    boxShadow:'none',
  },
}));

const styles = sxStyles({
  mainToolbar: (theme: Theme) => ({
    boxShadow: theme.myShadows.primary,
    backgroundColor: theme.extraColor.white,
    border: "none",
  }),
  // menuDesign: (theme: Theme) => ({
  //   elevation: 0,
  //   sx: {
  //     overflow: "visible",
  //     filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
  //     mt: 1.5,
  //     "& .MuiAvatar-root": {
  //       width: 32,
  //       height: 32,
  //       ml: -0.5,
  //       mr: 1,
  //     },
  //     "&:before": {
  //       content: '""',
  //       display: "block",
  //       position: "absolute",
  //       top: 0,
  //       right: 14,
  //       width: 10,
  //       height: 10,
  //       bgcolor: "background.paper",
  //       transform: "translateY(-50%) rotate(45deg)",
  //       zIndex: 0,
  //     },
  //   },
  // }),
  toolbar: (theme: Theme) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    px: [1],
  }),
  main: (theme: Theme) => ({
    backgroundColor: theme.extraColor.bgGray,
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  }),
  drawerMain: (theme: Theme) => ({
    width: drawerWidth,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      boxSizing: "border-box",
    },
  }),
});

export { AppBar, Main, DrawerHeader, styles, Drawer };
