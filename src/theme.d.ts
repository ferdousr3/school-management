import "@mui/material/styles";
import React from "react";

declare module "@mui/material/styles" {
  // for theme color
  interface Theme {
    extraColor: {
      white: string;
      liteGray: string;
      titleGray: string;
      linkBlack: string;
      titleGrayLite: string;
      titleGrayDark: string;
      borderColor: string;
      transparent: string;
      error: string;
      bgGray: string;
    };
    myShadows: {
      primary: string;
    };
  }

  interface ThemeOptions {
    extraColor: {
      white: React.CSSProperties["color"];
      liteGray: React.CSSProperties["color"];
      titleGray: React.CSSProperties["color"];
      linkBlack: React.CSSProperties["color"];
      titleGrayLite: React.CSSProperties["color"];
      titleGrayDark: React.CSSProperties["color"];
      borderColor: React.CSSProperties["color"];
      transparent: React.CSSProperties["color"];
      error: React.CSSProperties["color"];
      bgGray: React.CSSProperties["color"];
    };
    myShadows: {
      primary: React.CSSProperties["box-shadow"];
    };
  }

  // for typography overwrite
  interface TypographyVariants {
    footerTitle: React.CSSProperties;
    description: React.CSSProperties;
    heroTitle: React.CSSProperties;
    sectionTitle: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    footerTitle?: React.CSSProperties;
    description?: React.CSSProperties;
    heroTitle?: React.CSSProperties;
    sectionTitle?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    footerTitle: true;
    description: true;
    heroTitle: true;
    sectionTitle: true;
  }
}

declare function useNavigate(): NavigateFunction;

interface NavigateFunction {
  (
    to: To,
    options?: {
      replace?: boolean;
      state?: any;
      relative?: RelativeRoutingType;
    }
  ): void;
  (delta: number): void;
}
