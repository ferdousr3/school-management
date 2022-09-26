import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

type ThemeProp = {
  children: JSX.Element;
};

export enum themePalette {
  BG = "#ffffff",
  LIME = "#234957",
  ORANGE = "#e05a36",
  FONT_GLOBAL = "'Lato', sans-serif",
}

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: themePalette.BG,
    },
    primary: {
      main: themePalette.LIME,
    },
    secondary: {
      main: themePalette.ORANGE,
    },
  },
  typography: {
    fontFamily: themePalette.FONT_GLOBAL,
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: "none",
          boxShadow: "none",
          borderRadius: "2em",
          fontWeight:700
        },
      },
    },
  },
});

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
