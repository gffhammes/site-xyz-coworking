"use client";

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const useBreakpoint = () => {
  const theme = useTheme();

  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const xl = useMediaQuery(theme.breakpoints.up("xl"));

  return { sm, md, lg, xl };
};
