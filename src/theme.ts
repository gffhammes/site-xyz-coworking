"use client";
import { createTheme } from "@mui/material/styles";
import { Barlow } from "next/font/google";

const barlow = Barlow({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const theme = createTheme({
  typography: {
    allVariants: { fontFamily: barlow.style.fontFamily },
    h1: {
      fontSize: 32,
      fontWeight: 700,

      "@media (min-width:600px)": {
        fontSize: 48,
      },
    },
    h2: {
      fontSize: 24,
      fontWeight: 700,

      "@media (min-width:600px)": {
        fontSize: 32,
      },
    },
    button: {
      fontWeight: 700,
    },
  },
  palette: {
    primary: {
      main: "#F0B62B",
    },
    secondary: {
      main: "#ED005B",
      light: "#ebb8cc",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: "40rem",
          padding: "1rem 1.75rem",
          fontSize: 16,
          lineHeight: 1,
        },
        outlined: {
          borderRadius: "40rem",
          padding: "1rem 1.75rem",
          fontSize: 16,
          lineHeight: 1,
        },
        sizeSmall: {
          padding: ".5rem 1rem",
          // fontSize: 12,
        },
      },
      // defaultProps: {
      //   sx: { borderRadius: "40rem", px: 4 },
      // },
    },
  },
});

export default theme;
