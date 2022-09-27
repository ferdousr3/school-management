import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

type ThemeProp = {
  children: JSX.Element;
};

export enum themePalette {
  BG = "#ffffff",
  GRAY = "#f6f6f6",
  GRAY_TITLE = "#333333",
  GRAY_TITLE_LITE = "#555555",
  GRAY_TITLE_DARK = "#444444",
  BLACK_LINK = "#1e1e1e",
  BORDER_COLOR="#e5e5e5",
  LIME = "#234957",
  ORANGE = "#e05a36",
  FONT_GLOBAL = "'Lato', sans-serif",
}

const theme = createTheme({
  extraColor: {
    white: themePalette.BG,
    liteGray: themePalette.GRAY,
    titleGray: themePalette.GRAY_TITLE,
    titleGrayLite: themePalette.GRAY_TITLE_LITE,
    titleGrayDark: themePalette.GRAY_TITLE_DARK,
    linkBlack: themePalette.GRAY_TITLE,
    borderColor: themePalette.BORDER_COLOR,
  },

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
    footerTitle: {
      color: themePalette.GRAY_TITLE,
      fontSize: "1.25rem",
      textTransform: "uppercase",
      fontWeight: 700,
    },
    footerDetails: {
      color: themePalette.GRAY_TITLE_LITE,
      fontSize: "1rem",
      fontWeight: 400,
    },
    heroTitle: {
      color: themePalette.ORANGE,
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: "none",
          boxShadow: "none",
          borderRadius: "2em",
          fontWeight: 700,
          // padding:'.60rem 0rem',
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
