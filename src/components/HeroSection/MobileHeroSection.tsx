"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { XYZLogo } from "../common/XYZLogo";
import { HeroSectionImage } from "./HeroSectionImage";
import { heroSectionData } from "./HeroSection";
import heroBg from "../../../public/images/hero.jpg";
import { Parallax, Background } from "react-parallax";
import Image from "next/image";

export interface IMobileHeroSectionProps {}

export const MobileHeroSection = (props: IMobileHeroSectionProps) => {
  return (
    <Box style={{ height: "100svh", width: "100%", position: "relative" }}>
      <Box sx={{ height: "100%" }}>
        <Stack
          sx={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            py: 8,
            alignItems: "flex-end",
            position: "relative",
            zIndex: 1,
            color: "white",
          }}
        >
          <Container sx={{ height: "100%" }}>
            <Stack
              gap={8}
              sx={{ height: "100%" }}
              justifyContent="space-between"
            >
              <XYZLogo width="5rem" color="white" />

              <Stack alignItems="flex-start" gap={4}>
                <Stack gap={2}>
                  <Typography
                    variant="h1"
                    textTransform="uppercase"
                    maxWidth="16ch"
                  >
                    {heroSectionData.h1}
                  </Typography>

                  <Typography>{heroSectionData.subtitle}</Typography>
                </Stack>

                <Stack
                  gap={1}
                  // direction="row"
                  sx={{ position: "relative", zIndex: 1, width: "100%" }}
                >
                  <Button variant="contained">agendar visita</Button>
                  <Button variant="outlined">Descubra o xyz</Button>
                </Stack>
              </Stack>
            </Stack>
          </Container>
        </Stack>
      </Box>

      <Box
        sx={{
          height: "100%",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            background: "linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.8))",
            zIndex: 1,
            mixBlendMode: "hard-light",
          }}
        />

        <Image fill src={heroBg.src} alt="Hero" objectFit="cover" />
      </Box>
    </Box>
  );
};
