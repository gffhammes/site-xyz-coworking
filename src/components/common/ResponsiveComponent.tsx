import { Box } from "@mui/material";
import { ReactElement } from "react";

export interface IResponsiveComponentProps {
  xs?: ReactElement;
  sm?: ReactElement;
  md?: ReactElement;
  lg?: ReactElement;
  xl?: ReactElement;
}

export const ResponsiveComponent = ({
  xs,
  sm,
  md,
  lg,
  xl,
}: IResponsiveComponentProps) => {
  const components = {
    xs: xs || sm || md || lg || xl,
    sm: sm || xs || md || lg || xl,
    md: md || sm || xs || lg || xl,
    lg: lg || md || sm || xs || xl,
    xl: xl || lg || md || sm || xs,
  };

  return (
    <>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>{components.xs}</Box>

      <Box sx={{ display: { xs: "none", sm: "block", md: "none" } }}>
        {components.sm}
      </Box>

      <Box sx={{ display: { xs: "none", md: "block", lg: "none" } }}>
        {components.md}
      </Box>

      <Box sx={{ display: { xs: "none", lg: "block", xl: "none" } }}>
        {components.lg}
      </Box>

      <Box sx={{ display: { xs: "none", xl: "block" } }}>{components.xl}</Box>
    </>
  );
};
