"use client";

import { useFloatingCardTrigger } from "@/hooks/useFloatingCTATrigger";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

export interface IFloatingCTAProps {}

export const FloatingCTA = (props: IFloatingCTAProps) => {
  const { show } = useFloatingCardTrigger("beneficios", "passos");

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "1rem",
        zIndex: 9999,
        width: "100%",
        transform: show ? "none" : "translateY(200%)",
        transition: "1s ease all",
      }}
    >
      <Container>
        <Box
          sx={{
            backgroundColor: "rgba(54, 54, 54, 0.8)",
            backdropFilter: "blur(10px)",
            width: "fit-content",
            mx: "auto",
            borderRadius: 64,
            pr: 1,
            pl: 2,
            py: 1,
            boxShadow: 10,
          }}
        >
          <Stack direction="row" alignItems="center" gap={2}>
            <Typography color="primary" fontWeight="bold">
              R$129/mês
            </Typography>

            <Button variant="contained" size="small">
              VER PLANOS
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
