"use client";

import { Box, Container, Stack, useScrollTrigger } from "@mui/material";
import { XYZLogo } from "../common/XYZLogo";

export interface IHeaderProps {}

export const Header = (props: IHeaderProps) => {
  const show = useScrollTrigger({ disableHysteresis: true });

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        py: 2,
        backgroundColor: "rgba(255, 255, 255, .7)",
        backdropFilter: "blur(10px)",
        zIndex: 999,
        width: "100%",
        transform: show ? "unset" : "translateY(-100%)",
        transition: ".3s ease all",
      }}
    >
      <Container>
        <Stack direction="row">
          <XYZLogo height="2.5rem" />
        </Stack>
      </Container>
    </Box>
  );
};
