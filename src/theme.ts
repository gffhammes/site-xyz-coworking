"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: 700,
    },
  },
  palette: {
    primary: {
      main: "#F0B62B",
    },
  },
});

export default theme;
