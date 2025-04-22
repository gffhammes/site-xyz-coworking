"use client";

import { Box, Container, Stack, useScrollTrigger } from "@mui/material";
import { XYZLogo } from "../common/XYZLogo";
import { Menu } from "../common/Menu";

export interface IHeaderProps {}

export const Header = (props: IHeaderProps) => {
  const show = useScrollTrigger({ disableHysteresis: true });

  return (
    <Box
      component="header"
      sx={{
        position: "fixed",
        top: 0,
        py: 1,
        backgroundColor: "rgba(255, 255, 255, .7)",
        backdropFilter: "blur(10px)",
        zIndex: 999,
        width: "100%",
        transform: show ? "unset" : "translateY(-100%)",
        transition: ".3s ease all",
      }}
    >
      <Container>
        <Stack direction="row" justifyContent="space-between" gap={8}>
          <XYZLogo height="1.75rem" />

          <Menu />
        </Stack>
      </Container>
    </Box>
  );
};
