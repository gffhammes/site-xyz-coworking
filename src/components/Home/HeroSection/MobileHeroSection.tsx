"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { heroSectionData } from "./HeroSection";
import Image from "next/image";
import { XYZLogoWithLink } from "@/components/common/XYZLogoWithLink";

export interface IMobileHeroSectionProps {}

export const MobileHeroSection = (props: IMobileHeroSectionProps) => {
  return (
    <Box style={{ height: "110svh", width: "100%", position: "relative" }}>
      <Box sx={{ height: "100svh" }}>
        <Stack
          sx={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            pt: 4,
            pb: 8,
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
              <XYZLogoWithLink width="5rem" color="white" />

              <Stack alignItems="flex-start" gap={4}>
                <Stack gap={2}>
                  <Typography variant="h1" maxWidth="16ch">
                    {heroSectionData.h1}
                  </Typography>

                  <Typography>{heroSectionData.subtitle}</Typography>
                </Stack>

                <Stack
                  gap={1}
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

        <Image
          fill
          src={heroSectionData.image}
          alt="Hero"
          objectFit="cover"
          priority
        />
      </Box>

      <Box
        sx={{
          height: "10svh",
          width: "100%",
          backgroundColor: "white",
          position: "absolute",
          bottom: 0,
          borderRadius: "5rem 5rem 0 0",
        }}
      />
    </Box>
  );
};
