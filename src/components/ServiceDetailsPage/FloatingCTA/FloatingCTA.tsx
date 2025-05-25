"use client";

import { IServiceItem } from "@/data/types";
import { useFloatingCardTrigger } from "@/hooks/useFloatingCTATrigger";
import { scrollTo } from "@/utils/utils";
import {
  Box,
  ButtonBase,
  Collapse,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

export interface IFloatingCTAProps {
  service: IServiceItem;
}

export const FloatingCTA = ({ service }: IFloatingCTAProps) => {
  const { show: showTrigger } = useFloatingCardTrigger("beneficios", "planos");
  const [show, setShow] = useState(false);
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    if (showTrigger === true) {
      setShow(true);

      setTimeout(() => {
        setCollapse(true);
      }, appearDuration);
    } else {
      setCollapse(false);

      setTimeout(() => {
        setShow(false);
      }, appearDuration);
    }
  }, [showTrigger]);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        zIndex: 99,
        width: "100%",
        transform: show ? "none" : "translateY(200%)",
        transition: `${appearDuration}ms ease all`,
        pb: "7svh",
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
            <Collapse
              in={collapse}
              orientation="horizontal"
              timeout={collapseDuration}
            >
              <Typography
                color="primary"
                fontWeight="bold"
                whiteSpace="nowrap"
                sx={{ pl: 1, pr: 2 }}
              >
                {service.detailsPage.floatingCtaMessage}
              </Typography>
            </Collapse>

            <Box
              sx={{
                px: 2,
                py: 1,
                minWidth: 40,
                transition: `${collapseDuration}ms ease all`,
                borderRadius: 20,
                backgroundColor: "primary.main",
              }}
              component={ButtonBase}
              onClick={() => scrollTo("planos")}
              id="botao-flutuante-ver-planos"
            >
              <Collapse
                in={collapse}
                orientation="horizontal"
                timeout={collapseDuration}
                style={{ whiteSpace: "nowrap" }}
              >
                <Typography fontWeight="bold">VER PLANOS</Typography>
              </Collapse>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

const appearDuration = 500;
const collapseDuration = 300;
