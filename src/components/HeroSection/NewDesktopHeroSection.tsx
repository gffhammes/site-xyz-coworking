"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { XYZLogo } from "../common/XYZLogo";
import { HeroSectionImage } from "./HeroSectionImage";
import { heroSectionData } from "./HeroSection";
import heroBg from "../../../public/images/hero.jpg";
import { Parallax, Background } from "react-parallax";
import Image from "next/image";

export interface INewDesktopHeroSectionProps {}

export const NewDesktopHeroSection = (props: INewDesktopHeroSectionProps) => {
  return (
    <Box style={{ height: "110svh", width: "100%", position: "relative" }}>
      <Box sx={{ height: "90svh" }}>
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

              <Stack justifyContent="center" flex="1 1 100%" gap={4}>
                <Stack gap={2}>
                  <Typography
                    variant="h1"
                    textTransform="uppercase"
                    maxWidth="30ch"
                  >
                    {heroSectionData.h1}
                  </Typography>

                  <Typography maxWidth="60ch">
                    {heroSectionData.subtitle}
                  </Typography>
                </Stack>

                <Stack
                  gap={1}
                  direction="row"
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
            background: "linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.8))",
            zIndex: 1,
            mixBlendMode: "hard-light",
          }}
        />

        <Image fill src={heroBg.src} alt="Hero" objectFit="cover" priority />
      </Box>

      <Box
        sx={{
          height: "20svh",
          width: "100%",
          backgroundColor: "white",
          position: "absolute",
          bottom: 0,
          borderRadius: "20rem 20rem 0 0",
        }}
      />
    </Box>
  );
};
