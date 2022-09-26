import { ThemeOptions } from "@mui/material/styles";
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
    };
  }

  interface ThemeOptions {
    extraColor: {
      white: React.CSSProperties["color"];
      liteGray: React.CSSProperties["color"];
      titleGray: React.CSSProperties["color"];
      linkBlack: React.CSSProperties["color"];
      titleGrayLite: React.CSSProperties["color"];
    };
  }

  // for typography overwrite
  interface TypographyVariants {
    footerTitle: React.CSSProperties;
    footerDetails: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    footerTitle?: React.CSSProperties;
    footerDetails?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    footerTitle: true;
    footerDetails: true;

  }
}
