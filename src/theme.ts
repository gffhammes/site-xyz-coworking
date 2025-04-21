"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
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
    },
  },
});

export default theme;
