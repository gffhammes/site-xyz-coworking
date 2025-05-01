"use client";

import { useFloatingCardTrigger } from "@/hooks/useFloatingCTATrigger";
import { scrollTo } from "@/utils/utils";
import {
  Box,
  Button,
  ButtonBase,
  Collapse,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

export interface IFloatingCTAProps {}

export const FloatingCTA = (props: IFloatingCTAProps) => {
  const { show: showTrigger } = useFloatingCardTrigger("beneficios", "passos");
  const [show, setShow] = useState(false);
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    if (showTrigger === true) {
      setShow(true);

      setTimeout(() => {
        setCollapse(true);
      }, 500);
    } else {
      setCollapse(false);

      setTimeout(() => {
        setShow(false);
      }, 500);
    }
  }, [showTrigger]);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "1rem",
        zIndex: 9999,
        width: "100%",
        transform: show ? "none" : "translateY(200%)",
        transition: "500ms ease all",
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
            px: 1,
            py: 1,
            boxShadow: 10,
          }}
        >
          <Stack direction="row" alignItems="center">
            <Collapse in={collapse} orientation="horizontal" timeout={500}>
              <Typography
                color="primary"
                fontWeight="bold"
                sx={{ pl: 1, pr: 2 }}
              >
                R$129/mês
              </Typography>
            </Collapse>

            <Box
              sx={{
                px: 2,
                py: 1,
                minWidth: 40,
                transition: `500ms ease all`,
                borderRadius: 20,
                backgroundColor: "primary.main",
              }}
              component={ButtonBase}
              onClick={() => scrollTo("planos")}
            >
              <Collapse
                in={collapse}
                orientation="horizontal"
                timeout={500}
                style={{ whiteSpace: "nowrap" }}
              >
                <Typography>VER PLANOS</Typography>
              </Collapse>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
