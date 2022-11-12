import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

type ThemeProp = {
  children: JSX.Element;
};

export enum themePalette {
  BG = "#ffffff",
  BGCOLOR = "transparent",
  GRAY = "#f6f6f6",
  GRAY_BG = "#f2f3ef",
  GRAY_TITLE = "#333333",
  GRAY_TITLE_LITE = "#555555",
  GRAY_TITLE_DARK = "#444444",
  BLACK_LINK = "#1e1e1e",
  BORDER_COLOR = "#e5e5e5",
  LIME = "#234957",
  ORANGE = "#e05a36",
  TEXT_ERROR = "#d32f2f",
  TEXT_ERROR1 = "#00cfe8",
  // TEXT_ERROR2 = "#82868b",
  TEXT_SUCCESS= "#28c76f",
  TEXT_WARNING = "#ea5455",
  TEXT_INFO = "#ff9f43",
  FONT_GLOBAL = "'Lato', sans-serif",
  FONT_GLOBAL2 = "'Source Sans Pro', sans-serif",
}

const theme = createTheme({
  extraColor: {
    white: themePalette.BG,
    transparent: themePalette.BGCOLOR,
    liteGray: themePalette.GRAY,
    bgGray: themePalette.GRAY_BG,
    titleGray: themePalette.GRAY_TITLE,
    titleGrayLite: themePalette.GRAY_TITLE_LITE,
    titleGrayDark: themePalette.GRAY_TITLE_DARK,
    linkBlack: themePalette.GRAY_TITLE,
    borderColor: themePalette.BORDER_COLOR,
    error: themePalette.TEXT_ERROR,
  },
  myFont: themePalette.FONT_GLOBAL2,
  myShadows: {
    primary: `0px 0px 1px rgba(38, 78, 118, 0.35)`,
    secondary: `0px 0px 0px 1px rgba(0,0,0,0.04)`,
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
    error: {
      main: themePalette.TEXT_ERROR,
    },
    warning: {
      main: themePalette.TEXT_WARNING,
    },
    info: {
      main: themePalette.TEXT_INFO,
    },
    success: {
      main: themePalette.TEXT_SUCCESS,
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
    description: {
      color: themePalette.GRAY_TITLE_LITE,
      fontSize: "1rem",
      fontWeight: 400,
    },
    heroTitle: {
      color: themePalette.ORANGE,
      fontWeight: 400,
    },
    sectionTitle: {
      color: themePalette.GRAY_TITLE,
      fontWeight: 700,
      fontSize: "1.875rem",
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
